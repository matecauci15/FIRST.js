const obtenerInformacion = (materia)=>{
	materias = {
		fisica: ["Rodriguez","pedro", "maria", "juan", "cofla"],
		programacion: ["Perez","pedro", "maria", "pepe"],
		logica: ["Marcio","pedro", "maria", "pepe", "juan", "cofla"],
		quimica: ["Juanse","maria", "pepe", "juan", "cofla"]
	}
	if (materias[materia] !== undefined){
		return [materias[materia], materia, materias];
	} else {
		return materias;
	}
}
 const mostrarInformacion = materia =>{
	let informacion = obtenerInformacion(materia);
	
	if (informacion !== false){ 
	let profesor = informacion[0][0];
	alumnos = informacion[0];
	alumnos.shift();
document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
	Los alumnos son: <b style= "color:blue">${alumnos}</b><br><br>
	`);
}
}

const cantidadDeClases = (alumno) =>{
	let informacion = obtenerInformacion()
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion){
		if (informacion[info].includes(alumno)){	
			cantidadTotal++;
			clasesPresentes.push(" " + info);
		}
	}
	return `<b style= "color:red"> ${alumno}</b> esta en <b>${cantidadTotal}</b> clases <br>
	Esta cursando las clases: <b> ${clasesPresentes}</b><br><br>
	`;
}



mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("juan"));
document.write(cantidadDeClases("maria"));
document.write(cantidadDeClases("pepe"));