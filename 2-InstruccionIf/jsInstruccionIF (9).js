function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	var max;
	var min;

	max = 11;
	min = 0;

	random =  Math.floor(Math.random()* (max - min) + min);

	console.log(random);

}//FIN DE LA FUNCIÓN