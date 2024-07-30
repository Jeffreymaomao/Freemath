window.addEventListener("load", (e)=>{
	const mathEditor = new MathEditor({
		parent: document.querySelector("main")
	});
	window.mathEditor = mathEditor;
	console.log(mathEditor);
});