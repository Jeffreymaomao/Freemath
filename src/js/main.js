window.addEventListener("load", (e)=>{
	// Array.from(document.querySelectorAll("section")).forEach(section=>{
	// 	// const mathEditor = new MathEditor({
	// 	// 	parent: section
	// 	// });
	// });

	const app = new Freemath({});
	window.app = app
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

class Freemath {
    constructor(config = {}) {
        this.dom = {};
        this.notes = {};
        this.translate = {x:0,y:0};
        this.background = {
        	type: 'grid', // 'dot' or 'grid'
        	size: 20,
        	lineStyle: '#aaa',
        	lineWidth: 0.5
        };
        this.dom.parent = config.parent || document.body;
        this.initializeDom();
    }

    initializeDom() {
    	this.dom.container = this.createAndAppendElement(this.dom.parent, 'div', {
            class: 'freemath-container'
        });

        this.dom.canvas = this.createAndAppendElement(this.dom.container, 'div', {
            class: 'freemath-canvas',
            style: 'background-position: 0 0'
        });

        this.dom.noteContainer = this.createAndAppendElement(this.dom.container, 'div', {
            class: 'freemath-note-container'
        });

        this.dom.notes = {};
        this.changeBackground();

        this.dom.container.addEventListener('wheel', this.containerWheelEvents.bind(this), false);
        this.dom.container.addEventListener('dblclick', this.containerDoubleClickEvents.bind(this), false);
    }

    containerWheelEvents(e) {
        e.preventDefault();
        this.translate.x -= e.deltaX;
        this.translate.y -= e.deltaY;
        this.dom.noteContainer.style.transform = `translate(${this.translate.x}px, ${this.translate.y}px)`;
        this.dom.canvas.style.backgroundPosition = `${this.translate.x}px ${this.translate.y}px`;
    }

    containerDoubleClickEvents(e) {
        e.preventDefault();
        app.addNote(e.clientX - this.translate.x, e.clientY - this.translate.y);
    }

    changeBackground() {
    	const canvas = this.dom.canvas;
    	const config = this.background;
    	config.type = config.type || 'dot';
    	config.lineStyle = config.lineStyle || '#ccc';
    	config.lineWidth = config.lineWidth || 1;
    	config.size = config.size || 20;


    	canvas.style.background = 'white';
	    if(config.type==='dot'){
	    	canvas.style.backgroundImage = `radial-gradient(${config.lineStyle} ${config.lineWidth}px, transparent 0)`;
	    } else if (config.type==='grid'){
	    	canvas.style.backgroundImage = `linear-gradient(to right, ${config.lineStyle} ${config.lineWidth}px, transparent ${config.lineWidth}px), linear-gradient(to bottom, ${config.lineStyle} ${config.lineWidth}px, transparent ${config.lineWidth}px)`;
	    }
	    canvas.style.backgroundSize = `${config.size}px ${config.size}px`;
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