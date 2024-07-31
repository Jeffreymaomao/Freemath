class MathEditor {
    constructor(config = {}) {
        this.id = this.hash(Date.now().toString());
	    this.dom = {};
        this.dom.parent = config.parent || document.body;
        this.mathquill = MathQuill.getInterface(2);
        this.createTime = this.getTime();
        this.id_prefix = this.config?.id_prefix || this.id;
        this._id_num = 1;
        this.focusId = null;
        this.mathfields = {};
        this.downkeys = {};
        this.states = {};

        // https://stackoverflow.com/questions/14747537/implementin-undo-redo-in-math-editor

        if(!window.MathEditors){
            window.MathEditors = [];
        } else{
            window.MathEditors.forEach(matheditor=>{
                Object.values(matheditor.mathfields).forEach((mathfield)=>{
                    mathfield.blur();
                });
            });
        }
        window.MathEditors.push(this);
        window.needFocusUpDown = false;

        this.initializeDom();
    }

    createId(id) {
        this._id_num += 1;
        return `${this.id_prefix}-${this._id_num - 1}`;
    }

    initializeDom() {
        this.dom.container = this.createAndAppendElement(this.dom.parent, "div", {
            class: "mathnote-container",
            id: this.id
        });

        this.dom.matheqs = {};
        this.createEquationDom();
    }

    createEquationDom() {
        const id = this.createId();

        const state = {
        	id: id,
            isEmpty: true,
        	latex: '',
        };

        const {matheq, mathfield} = this.addMathModeArea(id, state);

        if (!this.dom.container.lastChild || !this.dom.matheqs[this.focusId] || !this.dom.matheqs[this.focusId].nextSibling) {
            this.dom.container.appendChild(matheq); // the container is empty || focus matheq not found || focus matheq next is empty
        } else if (this.dom.matheqs[this.focusId].nextSibling) {
            this.dom.container.insertBefore(matheq, this.dom.matheqs[this.focusId].nextSibling); // focus matheq next is not empty
        }

        this.states[id] = state;
        this.focusId = id;
        mathfield.focus();
        return true;
    }

    addMathModeArea(id, state){
        const matheq = this.createAndAppendElement(null, "div", {
            class: "mathnote-matheq",
            id: id
        });

        const mathTextArea = this.createAndAppendElement(null, "textarea", {
            class: "mathnote-math-textarea",
            autocapitalize: 'off',
            autocomplete: 'off',
            autocorrect: 'off',
            spellcheck: 'false',
            id: `${id}-mathmode-textarea`,
        });
        mathTextArea.setAttribute('x-palm-disable-ste-all', 'true');

        const mathfield = this.mathquill.MathField(matheq, {
            substituteTextarea: function (){ return mathTextArea;},
            handlers: {
                edit: function(e) {
                    state.latex = mathfield.latex();
                    state.isEmpty = state.latex==='';
                },
                enter: function() {
                    this.createEquationDom();
                }.bind(this),
            }
        });

        mathTextArea.addEventListener('keydown', function(e) {
            this.handleMathKeydown(e, matheq, mathfield);
        }.bind(this), false);

        matheq.addEventListener("click", function(e) {
            this.focusId = id;
        }.bind(this), false);

        this.dom.matheqs[id] = matheq;
        this.mathfields[id] = mathfield;

        return {matheq, mathfield};
    }

    addTextModeArea(matheq, mathfield){
        const id = matheq.id;
        const state = this.states[id];
        const newMatheq = this.createAndAppendElement(null, "div", {
            class: "mathnote-matheq textmode",
            id: id
        });
        matheq.replaceWith(newMatheq);

        const textContainer = this.createAndAppendElement(newMatheq, "div", {
            class: "mathnote-text-container"
        });

        const textArea = this.createAndAppendElement(textContainer, "textarea", {
            class: "mathnote-text-textarea",
            autocapitalize: 'off',
            id: `${id}-textmode-textarea`,
            rows: 1
        });

        textArea.addEventListener("keydown", function(e) {
            this.handleTextKeydown(e, textArea, newMatheq);
        }.bind(this), false);

        textArea.addEventListener("focus", function(e) {
            newMatheq.classList.add("focus");
        }.bind(this), false);

        textArea.addEventListener("blur", function(e) {
            newMatheq.classList.remove("focus");
        }.bind(this), false);

        textArea.addEventListener("input", function() {
            state.text = textArea.value;
            state.isEmpty = state.text==='';
            textArea.style.height = 'auto';
            textArea.style.height = (textArea.scrollHeight) + 'px';
        }.bind(this), false);

        mathfield.blur();
        mathfield = null;
        textArea.focus();
        setTimeout(function(){
            textArea.value = "";
            state.text = textArea.value;
            state.isEmpty = true;
        }, 0);
        this.dom.matheqs[id] = newMatheq;
        this.mathfields[id] = textArea;
        delete state.latex;
    }

    handleMathKeydown(event, matheq, mathfield) {
        const focusState = this.states[this.focusId];
        if (event.key==='ArrowUp' || event.key==='ArrowDown') {
            setTimeout(function(){
                if(!window.needFocusUpDown) return;
                window.needFocusUpDown = false;
                this.moveFocusUpDown(event, matheq);
            }.bind(this), 0);
        } else if (focusState.isEmpty && event.key==='Backspace' && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey){
            this.deleteFocus();
        } else if(focusState.isEmpty && (event.ctrlKey || event.metaKey) && event.key==='/'){
            this.addTextModeArea(matheq, mathfield);
        }
    }

    handleTextKeydown(event, textArea, textModeMatheq) {
        const focusState = this.states[this.focusId];

        if (event.key==='ArrowUp' || event.key==='ArrowDown') {
            const cursorPosition = textArea.selectionStart;
            const hasPreviousLine = cursorPosition > 0;
            const hasNextLine = cursorPosition < textArea.value.length;
            if (event.key === 'ArrowUp' && !hasPreviousLine) {
                this.moveFocusUpDown(event, textModeMatheq);
            } else if (event.key === 'ArrowDown' && !hasNextLine) {
                this.moveFocusUpDown(event, textModeMatheq);
            }
        } else if (event.key==='Enter' && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
            event.preventDefault();
            this.createEquationDom();
        }  else if (focusState.isEmpty && event.key==='Backspace' && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey){
            this.deleteFocus();
        } else if(focusState.isEmpty && (event.ctrlKey || event.metaKey) && event.key==='/') {
            const id = this.focusId;
            const state = this.states[id];
            const {matheq, mathfield} = this.addMathModeArea(id, state);
            textModeMatheq.replaceWith(matheq);
            mathfield.focus();
            delete state.text
        }
    }

    deleteFocus(){
        const deleteId = this.focusId;
        const previosMatheq = this.dom.matheqs[deleteId]?.previousSibling;
        if(!previosMatheq) return;
        this.dom.matheqs[deleteId].remove();
        const previosId = previosMatheq.id;
        this.focusId = previosId;
        delete this.dom.matheqs[deleteId];
        delete this.states[deleteId];
        delete this.mathfields[deleteId];
        this.mathfields[previosId].focus();
        // if previous is mathmode => mathfield is mathquill mathfield
        // if previous is textmode => mathfield is textarea 
    }

    moveFocusUpDown(event, matheq) {
        if (event.key==='ArrowDown' && matheq.nextSibling) {
        	const nextId = matheq.nextSibling.id;
        	this.mathfields[nextId]?.focus();
        	this.focusId = nextId;
        } else if (event.key==='ArrowUp' && matheq.previousSibling) {
        	const previosId = matheq.previousSibling.id;
        	this.mathfields[previosId]?.focus();
        	this.focusId = previosId;
        }
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
        
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    hash(str){
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32-bit integer
        }
        hash = Math.abs(hash);
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        while (hash > 0) {
            const shift = Math.floor(Math.random() * 100);
            result = chars[(hash+shift) % 26] + result;
            hash = Math.floor(hash / 26);
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