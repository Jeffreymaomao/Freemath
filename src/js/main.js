import '../css/normalize.css';
import '../css/mathquill-0.10.1.css';
import '../css/style.css';
import '../css/matheditor.css';
 
import Freemath from './Freemath.js';

window.addEventListener("load", (e)=>{
	const app = new Freemath({});
    app.addNote(window.innerWidth*0.5, window.innerHeight*0.5);
	window.app = app
});