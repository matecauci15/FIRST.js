let free = false;

const validarCliente = (time)=>{
	let edad = prompt("Cual es tue edad?");
	if (edad >= 18){
		if(time >= 2 && time < 7 && free == false){
			alert("Podes pasar y como sos el primero en pasar despues de las 2 am pasas gratis");
			free = true;
		}else {
			alert( `Son las ${time}hs y podes pasar pero tenes que pagar`);
		}
} else {
	alert ("Sos menor de edad no podes pasar");
}
}

validarCliente(15);
validarCliente(20);
validarCliente(1);
validarCliente(3);


















