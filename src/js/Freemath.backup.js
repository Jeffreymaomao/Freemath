window.addEventListener("load", (e)=>{
    const app = new Freemath({});


    // const x1 = 100, y1 = 100;
    // const x2 = 400, y2 = 400;

    // app.addNote(x1, y1);
    // app.addNote(x2, y2);

    // const cx1 = x1 + (x2 - x1) / 3;
    // const cy1 = y1;
    // const cx2 = x2 - (x2 - x1) / 3;
    // const cy2 = y2;
    // app.drawBezierCurve(x1, y1, x2, y2, cx1, cy1, cx2, cy2);

    const xr = ()=>{return (2*Math.random()-0.5)*window.innerWidth}
    const yr = ()=>{return (2*Math.random()-0.5)*window.innerHeight}
    for(let i=0;i<0;i++){
        const x1 = xr(), y1 = yr();
        const x2 = xr(), y2 = yr();

        app.addNote(x1, y1);
        app.addNote(x2, y2);

        const cx1 = x1 + (x2 - x1) / 3;
        const cy1 = y1;
        const cx2 = x2 - (x2 - x1) / 3;
        const cy2 = y2;
        app.drawBezierCurve(x1, y1, x2, y2, cx1, cy1, cx2, cy2);
    }

    window.app = app
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

class Freemath {
    constructor(config = {}) {
        this.dom = {};
        this.translate = {x:0,y:0};
        this.scale = 1;
        this.background = {
            type: 'dot', // 'dot' / 'grid' / 'none'
            size: 20,
            lineStyle: '#aaa',
            lineWidth: 1
        };
        this.initialPinchDistance = 0;
        this.isPinching = false;
        this.dom.parent = config.parent || document.body;
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
        this.changeBackground();
        this.initializeSVGLayer();

        this.dom.container.addEventListener('wheel', this.containerWheelEvents.bind(this), false);
        this.dom.container.addEventListener('dblclick', this.containerDoubleClickEvents.bind(this), false);
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
        let scaleFactor = 1.0;
        const rect = this.dom.container.getBoundingClientRect();
        const center = {x: rect.width*0.5, y: rect.height*0.5};
        if(e.ctrlKey){
            e.preventDefault();
            scaleFactor = 1.0 + (e.deltaY * -0.01);
            
            this.scale *= scaleFactor;
            if(this.scale>=5){
                this.scale = 5.0; return;
            }
            if(this.scale<=0.1){
                this.scale = 0.1; return;
            }

            // https://stackoverflow.com/questions/70210288/zoom-image-in-out-on-mouse-point-using-wheel-with-transform-origin-center-need
            // const oldScale = this.scale * 1.0;
            // const newScale = this.scale * (1.0 + (e.deltaY * -0.01));
            // this.scale = newScale;
            // const x = e.clientX - rect.left;
            // const y = e.clientY - rect.top;

            // const scaleRatio = newScale / oldScale;
            // const dx = x - center.x;
            // const dy = y - center.y;
            // // const m = newScale - oldScale;
            // const m = scaleRatio - 1;
            // this.translate.x -= dx * m;
            // this.translate.y -= dy * m;

        } else {
            this.translate.x -= e.deltaX;
            this.translate.y -= e.deltaY;   
        }

        requestAnimationFrame(function(){
            this.dom.noteContainer.style.transform = `translate(${this.translate.x}px, ${this.translate.y}px) scale(${this.scale})`;
            this.background.size *= scaleFactor;
            this.changeBackground();
        }.bind(this));
        
    }

    containerDoubleClickEvents(e) {
        e.preventDefault();
        const rect = this.dom.container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // 根據當前的縮放和位移計算實際的坐標
        const x = (mouseX - this.translate.x) / this.scale;
        const y = (mouseY - this.translate.y) / this.scale;
        app.addNote(x,y);
    }

    drawBezierCurve(x1, y1, x2, y2, cx1, cy1, cx2, cy2) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute('d', `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', '#000000');
        path.setAttribute('stroke-width', '1.75');
        this.dom.pathContainer.appendChild(path);
    }

    addNote(x, y, text) {
        text = text || 'This is some text.'
        const id = this.hash(`${text}-${x}-${y}-${Date.now()}`.padStart(50,'0')).slice(0,10)
        // ---
        // const note = this.createAndAppendElement(this.dom.noteContainer, 'div', {
        //     class: 'note',
        //     id: id,
        //     style: `position: absolute; top: ${y}px; left: ${x}px; background-color: yellow;`,
        //     textContent: text
        // });
        // ---
        const note = this.createAndAppendElement(this.dom.noteContainer, 'div', {
            class: 'note',
            id: id,
            style: `absolute; top: ${y}px; left: ${x}px; width: 300px; background-color: white;`
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
        config.type = config.type || 'dot';
        if(config.type==='none') return;
        const rect = this.dom.container.getBoundingClientRect();
        const center = {x: rect.width*0.5, y: rect.height*0.5};

        canvas.style.background = 'white';
        if(config.type==='dot'){
            canvas.style.backgroundImage = `radial-gradient(${config.lineStyle} ${config.lineWidth*this.scale}px, transparent 0)`;
        } else if (config.type==='grid'){
            canvas.style.backgroundImage = `linear-gradient(to right, ${config.lineStyle} ${config.lineWidth*this.scale}px, transparent ${config.lineWidth*this.scale}px), linear-gradient(to bottom, ${config.lineStyle} ${config.lineWidth*this.scale}px, transparent ${config.lineWidth*this.scale}px)`;
        }
        canvas.style.backgroundPosition = `${center.x + this.translate.x}px ${center.y + this.translate.y}px`;
        canvas.style.backgroundSize = `${config.size}px ${config.size}px`;
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