const materias = {
	fisica: [90, 6, 4, "fisica"],
	matematica: [75, 8, 2, "matematica"],
	biologia: [85, 9, 3, "biologia"],
	quimica: [65, 6, 1, "quimica"],
	ingles: [95, 5, 4, "ingles"],
	algebra: [50, 3, 3, "algebra"]
} 

const asistencia = ()=>{
	for (materia in materias){
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos =  materias[materia][2];

		console.log(materias[materia][3]);
		if(asistencias >= 90){
			
			console.log("%c   Aprobado", "color: green");
		
		} else {
			// console.log(materias[materia][3]);
			console.log("%c   Desaprobado", "color: red");
		} 
		if(promedio >= 7){
			console.log("%c   Promedio en ordean", "color: green");
		} else {
			console.log("%c   Promedio desaprobado", "color: red");
		} if (trabajos >= 3){
			console.log("%c   Trabajos aprobados", "color: green");
		} else {
			console.log("%c   Trabajos no aprobados", "color: red");
		}
	} 
}
asistencia();