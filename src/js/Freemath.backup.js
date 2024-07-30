class Freemath {
    constructor(config = {}) {
        this.dom = {};
        this.notes = {};
        this.origin = {x:0,y:0};
        this.dom.parent = config.parent || document.body;
        this.initializeDom();
    }

    initializeDom() {
    	this.dom.container = this.createAndAppendElement(this.dom.parent, 'div', {
            class: 'freemath-container'
        });

        this.dom.canvas = this.createAndAppendElement(this.dom.container, 'div', {
            class: 'freemath-canvas'
        });

        this.dom.notes = {};

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const initialWidth = windowWidth * 2;
        const initialHeight = windowHeight * 2;

        this.dom.canvas.style.width = `${initialWidth}px`;
        this.dom.canvas.style.height = `${initialHeight}px`;
        this.dom.container.scrollLeft = (initialWidth - windowWidth)/2;
        this.dom.container.scrollTop = (initialHeight - windowHeight)/2;
        this.initScrollEvents();
    }

    initScrollEvents() {
        this.dom.container.addEventListener('wheel', function(e){
            e.preventDefault();
            this.dom.container.scrollLeft += e.deltaX;
            this.dom.container.scrollTop += e.deltaY;
            this.expandCanvas(e.deltaX, e.deltaY);
        }.bind(this), false);
    }

    expandCanvas(deltaX, deltaY) {
        const scrollLeft = this.dom.container.scrollLeft;
        const scrollTop = this.dom.container.scrollTop;
        const clientWidth = this.dom.container.clientWidth;
        const clientHeight = this.dom.container.clientHeight;
        const canvasWidth = this.dom.canvas.offsetWidth;
        const canvasHeight = this.dom.canvas.offsetHeight;

        // delta > 0 && the canvas is not enouh
        if (deltaX > 0 && scrollLeft + clientWidth >= canvasWidth) {
            this.dom.canvas.style.width = `${canvasWidth + Math.abs(deltaX)}px`;
        }
        if (deltaY > 0 && scrollTop + clientHeight >= canvasHeight) {
            this.dom.canvas.style.height = `${canvasHeight + Math.abs(deltaY)}px`;
        }

        // delta < 0 && the canvas is not enouh
        if (deltaX < 0 && scrollLeft <= 0) {
            this.dom.canvas.style.width = `${canvasWidth + Math.abs(deltaX)}px`;

        	this.origin.x += deltaX;
            this.reDrawNote();
        }
        if (deltaY < 0 && scrollLeft <= 0) {
        	this.dom.canvas.style.height = `${canvasHeight + Math.abs(deltaY)}px`;

        	this.origin.y += deltaY;
        	this.reDrawNote()
        }
    }

    reDrawNote(){
    	Object.values(this.dom.notes).forEach(note=>{

    	})
    }


    addNote(x, y, text) {
    	const id = this.hash(`${text}-${x}-${y}-${Date.now()}`.padStart(50,'0')).slice(0,10)
        const note = this.createAndAppendElement(this.dom.canvas, 'div', {
            class: 'note',
            id: id,
            style: `position: absolute; top: ${y}px; left: ${x}px;`,
            textContent: text
        });
        this.dom.notes[id] = note;
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
        Object.keys(attributes).forEach(key => element[key] = attributes[key]);

        if (parent) parent.appendChild(element);
        return element;
    }
}