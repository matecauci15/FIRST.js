
	let materias = {
		fisica: ["Rodriguez","pedro", "maria", "juan", "cofla"],
		programacion: ["Perez","pedro", "maria", "pepe"],
		logica: ["Marcio","pedro", "maria", "pepe", "juan", "cofla"],
		quimica: ["Juanse","maria", "pepe", "juan", "cofla"]
	}

	const inscribir = (alumno,materia)=>{
		personas = materias[materia];
		if(personas.length >=21 ){
			document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br><br>` )
		} else {
			personas.push(alumno);
			if(materia == "fisica"){
				materias = {
				 fisica: personas,
				 programacion: materias["programacion"],
				 logica: materias["logica"],
				 quimica: materias["quimica"]
				}
		  }else if (materia == "programacion"){
				materias = {
				 fisica: materias[fisica],
				 programacion: personas,
				 logica: materias["logica"],
				 quimica: materias["quimica"]
			}	
		}else if (materia == "quimica"){
				materias = {
				 fisica: materias[fisica],
				 programacion: materia[programacion],
				 logica: personas,
				 quimica: materias["quimica"]
			}
		}else if (materia == "quimica"){
				materias = {
				 fisica: materias[fisica],
				 programacion: materia[programacion],
				 logica: materias["logica"],
				 quimica: personas
			}		
		}
		document.write(`Felicidades <b style = color:red>${alumno}</b>, te has incrito a <b>${materia}</b> con exito <br><br>`);
	}
}

document.write(materias["fisica"]+ "<br>");

inscribir("pedrito", "fisica");
inscribir("rama", "fisica");
inscribir("pera", "fisica");
inscribir("mate", "fisica");
inscribir("jojo", "fisica");
inscribir("jai", "fisica");
inscribir("liana", "fisica");
inscribir("nina", "fisica");
inscribir("nala", "fisica");
inscribir("gala", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");

document.write(materias["fisica"])


