import MathEditor from './MathEditor.js';

class Freemath {
    constructor(config = {}) {
        this.dom = {};
        this.translate = {x:0,y:0};
        this.background = {
        	type: 'dot', // 'dot' / 'grid' / 'none'
        	size: 20,
        	lineStyle: '#aaa',
        	lineWidth: 1
        };
        this.createTime = this.getTime();
        this.dom.parent = config.parent || document.body;
        this.mouseClickStart = {x:0,y:0};
        this.currentDraggingNote = null;
        this.focusNote = null;
        this.drawingPath = false;
        this.pathStart = {x:0,y:0,id:null};
        this.initializeDom();
    }

    initializeDom() {
    	this.dom.container = this.createAndAppendElement(this.dom.parent, 'div', {
            class: 'freemath-container',
            style: 'display: block; position: fixed; top: 0; left: 0; overflow: hidden; width: 100vw; height: 100vh;'
        });

        this.dom.canvas = this.createAndAppendElement(this.dom.container, 'div', {
            class: 'freemath-canvas',
            style: 'display: block; position: fixed;  overflow: hidden; width: 100%; height: 100%;'
        });

        this.dom.noteContainer = this.createAndAppendElement(this.dom.container, 'div', {
            class: 'freemath-note-container',
            style: 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
        });

        this.dom.notes = {};
        this.dom.paths = {};
        this.changeBackground();
        this.initializeSVGLayer();

        this.dom.container.addEventListener('wheel', this.containerWheelEvents.bind(this), { passive: true });
        this.dom.container.addEventListener('dblclick', this.containerDoubleClickEvent.bind(this), false);
        this.dom.container.addEventListener('mousedown', this.containerMouseDownEvent.bind(this), false);
        document.addEventListener('keydown', this.containerKeyDownEvent.bind(this), false);
        document.addEventListener('mousemove', this.containerMouseMoveEvent.bind(this), false);
        document.addEventListener('mouseup', this.containerMouseUpEvent.bind(this), false);
    }

    initializeSVGLayer(){
        const pathContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        pathContainer.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        pathContainer.setAttribute('overflow', 'visible');
        pathContainer.style = 'display: block; width: 100%; height: 100%; position: absolute; left: 0; top: 0;';
        this.dom.pathContainer = pathContainer;
        this.dom.canvas.appendChild(pathContainer);
        this.dom.noteContainer.appendChild(pathContainer);
    }

    containerWheelEvents(e) {
        if(e.ctrlKey) return;
        // e.preventDefault();
        this.translate.x -= e.deltaX;
        this.translate.y -= e.deltaY;
        const rect = this.dom.container.getBoundingClientRect();
        const center = {x: rect.width*0.5, y: rect.height*0.5};
        requestAnimationFrame(function(){
            this.dom.noteContainer.style.transform = `translate(${this.translate.x}px, ${this.translate.y}px)`;
            this.dom.canvas.style.backgroundPosition = `${center.x + this.translate.x}px ${center.y + this.translate.y}px`;
        }.bind(this));
    }

    containerDoubleClickEvent(e) {
        e.preventDefault();
        app.addNote(e.clientX - this.translate.x, e.clientY - this.translate.y);
    }

    containerMouseDownEvent(e){
        Object.values(this.dom.notes).forEach(note=>{note.classList.remove('focus');})
        Object.values(this.dom.paths).forEach(path=>{path.dom.classList.remove('focus');})
        const classList = e.target.classList;
        if(!classList.contains('note') && !classList.contains('path')){
            this.focusNote = null;
            return;
        }
        this.focusNote = e.target;
        this.focusNote.classList.add("focus");

        if(e.shiftKey && !this.drawingPath && !this.dom.drawingPath){
            // start to draw path
            this.drawingPath = true;
            const noteRect = e.target.getBoundingClientRect();
            const centerX = noteRect.left + (noteRect.width*0.5) - this.translate.x;
            const centerY = noteRect.top + (noteRect.height*0.5) - this.translate.y;

            const pathStart = { x: centerX, y: centerY, id: e.target.id};
            this.dom.drawingPath = this.createBezierCurve(pathStart, pathStart);
            this.pathStart = pathStart;
        } else {
            this.currentDraggingNote = e.target;
            this.startX = e.clientX - e.target.offsetLeft;
            this.startY = e.clientY - e.target.offsetTop;
        }
    }

    containerMouseMoveEvent(e) {
        if (!e.shiftKey && this.currentDraggingNote){
            const containerRect = this.dom.noteContainer.getBoundingClientRect();
            const newX = e.clientX - containerRect.left - this.startX + this.translate.x;
            const newY = e.clientY - containerRect.top - this.startY + this.translate.y;
            this.currentDraggingNote.style.left = `${newX}px`;
            this.currentDraggingNote.style.top = `${newY}px`;
            const draggingId = this.currentDraggingNote.id;
            Object.keys(this.dom.paths).forEach((pathId)=>{
                if(!pathId.includes(draggingId)) return;
                const path = this.dom.paths[pathId];
                const noteRect = this.currentDraggingNote.getBoundingClientRect();
                const centerX = noteRect.left + (noteRect.width*0.5) - this.translate.x;
                const centerY = noteRect.top + (noteRect.height*0.5) - this.translate.y;
                if(draggingId===path.start.id){
                    path.start.x = centerX;
                    path.start.y = centerY;
                }else if(draggingId===path.end.id){
                    path.end.x = centerX;
                    path.end.y = centerY;
                }
                this.setBezierCurvePath(path.dom, path.start, path.end);
            });

        } else if(e.shiftKey && this.drawingPath && this.dom.drawingPath){
            const pathEnd = { x: e.clientX - this.translate.x, y: e.clientY - this.translate.y };
            this.setBezierCurvePath(this.dom.drawingPath, this.pathStart, pathEnd, this.pathStart.width, this.pathStart.width);
        }
    }

    containerMouseUpEvent(e) {
        if (this.currentDraggingNote) {
            this.currentDraggingNote = null;
        } else if (this.drawingPath && this.dom.drawingPath) {
            // end to draw path
            this.dom.drawingPath.remove();
            if(e.target.classList.contains('note')){
                const pathEndId = e.target.id;
                if(this.pathStart.id===pathEndId) return;
                // add path
                const noteRect = e.target.getBoundingClientRect();
                const centerX = noteRect.left + (noteRect.width*0.5) - this.translate.x;
                const centerY = noteRect.top + (noteRect.height*0.5) - this.translate.y;

                const pathEnd = { x: centerX, y: centerY, id: pathEndId};
                const id = `${this.pathStart.id}-${pathEndId}`
                this.dom.paths[id] = {
                    start: this.pathStart,
                    end: pathEnd,
                    dom: this.createBezierCurve(this.pathStart, pathEnd)
                }
            }
        }
        this.dom.drawingPath = null;
        this.drawingPath = false;
    }

    containerKeyDownEvent(e){
        if(this.focusNote && e.key==='Backspace'){
            const name = this.focusNote.classList.contains("note") ? 'note' : 'path';
            const confirmed = window.confirm(`Are you sure to delete this ${name}?`);
            if(!confirmed) return;
            const deleteId = this.focusNote.id;
            this.focusNote.remove();
            Object.keys(this.dom.paths).forEach(pathId=>{
                if(!pathId.includes(deleteId)) return; 
                this.dom.paths[pathId].dom.remove();
            });
        } else if(e.metaKey || e.ctrlKey){
            if(e.key==='e'){
                const filename = `freemath-${this.createTime}.json`;
                this.exportState(filename);
            } else if (e.key==='s'){
                e.preventDefault();
                const states = this.getState();
                console.log(states)
                // save
            }  else if (e.key==='/'){
                console.log('?')
            }
        }
    }

    getState(){
        if(!window.MathEditors) return;
        const states = {
            translate: this.translate,
            matheditor: [],
            linkpath: []
        };
        window.MathEditors.forEach(matheditor=>{
            const id = matheditor.id;
            const dom = this.dom.noteContainer.querySelector(`#${id}`);
            const noteRect = dom.getBoundingClientRect();
            const centerX = noteRect.left + (noteRect.width*0.5);
            const centerY = noteRect.top + (noteRect.height*0.5);
            const state = {
                matheditor: matheditor.states,
                center: {
                    x: centerX,
                    y: centerY,
                }
            };
            states.matheditor.push(state);
        });

        Object.keys(this.dom.paths).forEach(pathId=>{
            states.linkpath.push(pathId.split("-"));
        });
        return states;
    }

    exportState(filename){
        const states = this.getState();
        // ------
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(states,null,4));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", filename);
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove()
    }

    createBezierCurve(start, end, startWidth=null, endWidth=null) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.classList.add("path");
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', '#aaa');
        path.setAttribute('stroke-width', '2');
        this.setBezierCurvePath(path, start, end, startWidth, endWidth);
        this.dom.pathContainer.appendChild(path);
        return path;
    }

    setBezierCurvePath(path, start, end, startWidth=null, endWidth=null) {
        const x1 = start.x, y1 = start.y, x2 = end.x, y2 = end.y;
        const w1 = (x2 - x1)*0.7;
        const w2 = (x2 - x1)*0.7;
        const cx1 = x1 + w1, cy1 = y1,
              cx2 = x2 - w2, cy2 = y2;
        path.setAttribute('d', `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`);
    }

    findParentWithSelector(element, cssSelector) {
        if (!element) return null;
        let currentElement = element;
        while (currentElement) {
            if (currentElement === document.body) return null;
            if (currentElement.matches(cssSelector)) return currentElement;
            currentElement = currentElement.parentElement;
        }
        return null;
    }

    addNote(x, y) {
    	const id = this.hash(`${x}-${y}-${Date.now()}`.padStart(50,'0')).slice(0,10)
		// ---
		const note = this.createAndAppendElement(this.dom.noteContainer, 'div', {
            class: 'note',
            id: id,
            draggable: false,
            style: `display: block; absolute; top: ${y}px; left: ${x}px; min-width: 300px;`
        });
       	const mathEditor = new MathEditor({
			parent: note
		});
		// ---
        this.dom.notes[id] = note;
    }

    changeBackground() {
        const canvas = this.dom.canvas;
        const config = this.background;
        if(config.type==='none') return;
        const rect = this.dom.container.getBoundingClientRect();
        const center = {x: rect.width*0.5, y: rect.height*0.5};

        canvas.style.background = 'white';
        if(config.type==='dot'){
            canvas.style.backgroundImage = `radial-gradient(${config.lineStyle} ${config.lineWidth}px, transparent 0)`;
        } else if (config.type==='grid'){
            canvas.style.backgroundImage = `linear-gradient(to right, ${config.lineStyle} ${config.lineWidth}px, transparent ${config.lineWidth}px), linear-gradient(to bottom, ${config.lineStyle} ${config.lineWidth}px, transparent ${config.lineWidth}px)`;
        }
        canvas.style.backgroundPosition = `${center.x + this.translate.x}px ${center.y + this.translate.y}px`;
        canvas.style.backgroundSize = `${config.size}px ${config.size}px`;
    }

    getTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}.${minutes}.${seconds}.${milliseconds}`;
    }

    hash(str){
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32-bit integer
        }
        hash = Math.abs(hash);
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //  + 'abcdefghijklmnopqrstuvwxyz' + '0123456789'
        const n = chars.length;
        let result = '';
        while (hash > 0) {
            const shift = Math.floor(Math.random() * 1000);
            result = chars[(hash+shift) % n] + result;
            hash = Math.floor(hash / n * 10);
        }
        return result;
    }

    createAndAppendElement(parent, tag, attributes = {}) {
        const element = document.createElement(tag);

        // class 
        if (attributes.class) {
            attributes.class.split(" ").forEach(className => element.classList.add(className));
            delete attributes.class; // delete class in attributes
        }
        // dataset
        if (attributes.dataset) {
            Object.keys(attributes.dataset).forEach(key => element.dataset[key] = attributes.dataset[key]);
            delete attributes.dataset; // delete dataset in attributes
        }
        // other attributes
        Object.keys(attributes).forEach(key => {
            element[key] = attributes[key];
            if(!element[key]) element.setAttribute(key, attributes[key]);
        });

        Object.keys(attributes).forEach(key => {element[key] = attributes[key]});

        if (parent) parent.appendChild(element);
        return element;
    }
}

export default Freemath;