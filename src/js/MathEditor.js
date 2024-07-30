class MathEditor {
    constructor(config = {}) {
	    this.dom = {};
        this.dom.parent = config.parent || document.body;
        this.mathquill = MathQuill.getInterface(2);
        this._id_num = 1;
        this.focusId = null;
        this.mathfields = {};
        this.downkeys = {};
        this.states = {};

        window.needFocusUpDown = false;

        this.initializeDom();
    }

    createId(id) {
        this._id_num += 1;
        return `eq-${this._id_num - 1}`;
    }

    initializeDom() {
        this.dom.container = this.createAndAppendElement(this.dom.parent, "div", {
            class: "mathnote-container"
        });

        this.dom.matheqs = {};
        this.createEquationDom();
    }

    createEquationDom() {
        const id = this.createId();

        const state = {
        	id: id,
        	latex: "",
            isEmpty: true,
            hasDeletedOnce: true
        };

        this.states[id] = state;

        const matheq = this.createAndAppendElement(null, "div", {
            class: "mathnote-matheq",
            id: id
        });

        const mathfield = this.mathquill.MathField(matheq, {
            handlers: {
                edit: function() {
                	state.latex = mathfield.latex();
                    state.isEmpty = state.latex==='';
	            },
                enter: function() {
                    this.createEquationDom();
                }.bind(this)
            }
        });

        matheq.addEventListener('keydown', function(e) {
            this.handleKeydown(e, matheq, mathfield);
        }.bind(this), false);

        matheq.addEventListener("click", function(e) {
            this.focusId = id;
        }.bind(this), false)

        if (!this.dom.container.lastChild || !this.dom.matheqs[this.focusId] || !this.dom.matheqs[this.focusId].nextSibling) {
            // the container is empty || focus matheq not found || focus matheq next is empty
            this.dom.container.appendChild(matheq);
        } else if (this.dom.matheqs[this.focusId].nextSibling) {
            // focus matheq next is not empty
            this.dom.container.insertBefore(matheq, this.dom.matheqs[this.focusId].nextSibling)
        }

        this.focusId = id;
        this.dom.matheqs[id] = matheq;
        this.mathfields[id] = mathfield;
        mathfield.focus();
        return true;
    }

    handleKeydown(event, matheq, mathfield) {
        const focusState = this.states[this.focusId];
        if(!focusState.isEmpty) focusState.hasDeletedOnce = false;
        if (window.needFocusUpDown && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
            window.needFocusUpDown = false;
            this.moveFocusUpDown(event, matheq);
        } else if (focusState.isEmpty && event.key === 'Backspace' && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey){
        	if (focusState.hasDeletedOnce) {
                this.deleteFocus();
            } else {
                focusState.hasDeletedOnce = true;
            }
        }
    }

    deleteFocus(){
    	const deleteId = this.focusId;
    	const previosMatheq = this.dom.matheqs[deleteId]?.previousSibling;
    	if(!previosMatheq) return;
    	this.dom.matheqs[deleteId].remove();
    	const previosId = previosMatheq.id;
    	this.mathfields[previosId].focus();
        this.focusId = previosId;
        delete this.dom.matheqs[deleteId];
        delete this.states[deleteId];
        delete this.mathfields[deleteId];
    }

    moveFocusUpDown(event, matheq) {
        if (event.key === 'ArrowDown' && matheq.nextSibling) {
        	const nextId = matheq.nextSibling.id;
        	this.mathfields[nextId]?.focus();
        	this.focusId = nextId;
        } else if (event.key === 'ArrowUp' && matheq.previousSibling) {
        	const previosId = matheq.previousSibling.id;
        	this.mathfields[previosId]?.focus();
        	this.focusId = previosId;
        }
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