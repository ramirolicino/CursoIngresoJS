function mostrar()
{
    var nota;
    var sexo;
    var contador = 0;
    var notasTotales = 0;
    var promedio;
    var notaMinimo = 0;
    var sexoMinimo;
    var contadorVarones = 0;

    while(contador < 5){

        do{
            nota = prompt("Ingrese la nota");
            nota = parseInt(nota);

        }while(isNaN(nota) || nota < 1 || nota > 10);

        do{
            sexo = prompt("Ingrese el sexo");

        }while(!isNaN(sexo) || (sexo != "m" && sexo != "f"));

        console.log("nota: "+nota);
        console.log("sexo: "+sexo);
        
        notasTotales += nota;

        //Punto a 

        promedio = (notasTotales) / 5;

        //Punto b

        if(contador == 1 || nota < notaMinimo){
            notaMinimo = nota;
            sexoMinimo = sexo;
        }

        //Punto c 

        if(sexo == "m" && nota >= 6){
            contadorVarones++;
        }

        contador++;
    }
    
    console.log("...");
    console.log("nota T: "+notasTotales);
    console.log("...");
    console.log("promedio: "+promedio);
    console.log("...");
    console.log("nota minima: "+notaMinimo+" y sexo "+sexoMinimo);
    console.log("...");
    console.log("La cantidad de varones q >= 6: "+contadorVarones);



}
