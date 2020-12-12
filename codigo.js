function Noche(){
	document.body.style.backgroundColor.classList.toggle= "RGB(46, 80, 165)";
	celda = document.getElementById("tabla");
	celda.style.backgroundColor="RGB(230, 232, 232)";
	nav=document.getElementById("nav");
	nav.style.backgroundColor="gray"
	
}
function sendMessage(){
msj=document.getElementById("msj").value;
if (msj=="") {
	alert("Esta Vacío");
}
else{
	var par = document.getElementById("p");
	var newContentName=document.createTextNode(""+msj);
	par.appendChild(newContentName);
}
}
