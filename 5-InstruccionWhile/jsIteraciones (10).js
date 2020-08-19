function mostrar()
{
	/*
	var numero;
	var respuesta = true;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadCero = 0;
	var cantidadNegativos = 0;
	var cantidadPares = 0;
	var cantidadPositivos = 0;
	var promedioN;
	var promedioP;
	var diferencia;

	while(respuesta){
		do{
			numero = prompt("Ingresa un numero");
			numero = parseInt(numero);

		}while(isNaN(numero));

		//Punto 1
		if(numero < 0){
			sumaNegativos += numero;
		}

		//Punto 2 
		if(numero > 0){
			sumaPositivos += numero;
		}

		//Punto 3 
		if(numero > 0){
			cantidadPositivos++;
		}

		//Punto 4
		if(numero < 0){
			cantidadNegativos++;
		}

		//Punto 5
		if(numero % 10 == 0){
			cantidadCero++;
		}

		//Punto 6
		if(numero % 2 == 0){
			cantidadPares++;
		}

		//Punto 7
		if(numero > 0){
			promedioP = sumaPositivos / cantidadPositivos;
		}

		//Punto 8
		if (numero < 0) {
			promedioN = sumaNegativos / cantidadNegativos;
		}

		//Punto 9
		diferencia =  sumaPositivos - sumaNegativos;

		console.log(numero);

		respuesta = confirm("Desea continuar?");
	}

	console.log("...");
	console.log("Suma negativos: "+sumaNegativos);
	console.log("...");
	console.log("Suma positivos: "+sumaPositivos);
	console.log("...");
	console.log("Cantidad +: "+cantidadPositivos);
	console.log("...");
	console.log("Cantidad -: "+cantidadNegativos);
	console.log("...");
	console.log("Cantidad cero: "+cantidadCero);
	console.log("...");
	console.log("Cantidad pares: "+cantidadPares);
	console.log("...");
	console.log("Promedio p: "+sumaPositivos+" / "+cantidadPositivos+" = "+promedioP);
	console.log("...");
	console.log("Promedio n: "+sumaNegativos+" / "+cantidadNegativos+" = "+promedioN);
	console.log("...");
	console.log("Diferencia: "+sumaPositivos+" - "+sumaNegativos+" = "+diferencia);
	*/
	//Inicio
	var numero;
	var respuesta = true;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadPares = 0;
	var cantidadNegativos = 0;
	var cantidadCero = 0;
	var cantidadPositivos = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	while(respuesta){
		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}while(isNaN(numero))

		//Punto 1-
		if(numero < 0){
			sumaNegativos += numero;
		}

		//Punto2-
		if(numero > 0){
			sumaPositivos += numero;
		}

		//Punto 3-
		if(numero > 0){
			cantidadPositivos++;
		}

		//Punto 4-
		if(numero < 0){
			cantidadNegativos++;
		}

		//Punto 5-
		if(numero % 10 == 0){
			cantidadCero++;
		}

		//Punto 6-
		if(numero % 2 == 0){
			cantidadPares++;
		}

		//Punto 7-
		if(numero > 0){
			promedioPositivos = sumaPositivos / cantidadPositivos;
		} 

		//Punto 8-
		if(numero < 0){
			promedioNegativos = sumaNegativos / cantidadNegativos;
		}

		//Punto 9-
		diferencia =  sumaPositivos - sumaNegativos;


		console.log(numero);

		respuesta = confirm("Desea continuar?");
	}

	console.log("...");
	console.log("Suma negativos: "+sumaNegativos);
	console.log("...");
	console.log("Suma positivos: "+sumaPositivos);
	console.log("...");
	console.log("Cantidad +: "+cantidadPositivos);
	console.log("...");
	console.log("Cantidad -: "+cantidadNegativos);
	console.log("...");
	console.log("Cantidad cero: "+cantidadCero);
	console.log("...");
	console.log("Cantidad pares: "+cantidadPares);
	console.log("...");
	console.log("Promedio p: "+sumaPositivos+" / "+cantidadPositivos+" = "+promedioPositivos);
	console.log("...");
	console.log("Promedio n: "+sumaNegativos+" / "+cantidadNegativos+" = "+promedioNegativos);
	console.log("...");
	console.log("Diferencia: "+sumaPositivos+" - "+sumaNegativos+" = "+diferencia);
	

}//FIN DE LA FUNCIÓN