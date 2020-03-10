function mostrar()
{
    var nota; 
    var sexo;
    var cantidadAlumnos = 0;
    var notasTotales = 0;
    var promedio;
    var notaMinimo = 0;
    var sexoMinimo;
    var varonesGenios = 0;

    while(cantidadAlumnos < 5){
        do{
            nota = prompt("Ingrese la nota");
            nota = parseInt(nota);

        }while(isNaN(nota) || nota < 1 || nota > 10);

        do{
            sexo = prompt("Ingresa sexo");

        }while(!isNaN(sexo) || sexo != "f" && sexo != "m");

        console.log(nota+" / "+sexo);

        //Punto a
        notasTotales += nota;

        promedio = notasTotales / 5

        //Punto b
        if(notaMinimo > nota){
            notaMinimo = nota;
            sexoMinimo = sexo;
        }

        //Punto c 
        if(sexo == "m" && nota >= 6){
            varonesGenios++;
        }

        cantidadAlumnos++;
    }

    console.log("...");
    console.log("Promedio: "+notasTotales+" / "+"5 = "+promedio);
    console.log(".");
    console.log("nota min: "+notaMinimo+" sexo min: "+sexoMinimo);
    console.log(".");
    console.log("varones genios: "+varonesGenios);
}
