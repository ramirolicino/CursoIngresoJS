function mostrar()
{

	/*
	//Genero el número RANDOM entre 1 y 10 

	var random;
	var max;
	var min;

	max = 11;
	min = 0;

	random =  Math.floor(Math.random()* (max - min) + min);

	console.log(random);

	if(random > 8) {
		alert("Exelente");
	}else{
		if(random >= 4){
			alert("Aprobo");
		}else{
			alert("Suerte la prox");
		}
	}
	*/

	var random;
	var max = 11;
	var min = 0;

	random = Math.floor(Math.random()* (max -min) + min);

	console.log(random);

	if(random > 8){
		console.log("Exelente");
	}else if(random > 4){
		console.log("Aprobo");
	}else if(random < 4){
		console.log("Mal");
	}

}//FIN DE LA FUNCIÓN