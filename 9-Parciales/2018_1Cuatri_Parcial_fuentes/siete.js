function mostrar()
{

/*
    var nota;
    var sexo;
    var contador = 0;
    var notaMinima;
    var sexoMinimo;
    var contadorDeVarones;

    
    while(contador < 5){ 
        contador++

        do{
            nota = prompt("Ingrese un numero")
            nota = parseInt(nota);
        } while (isNaN(nota) || nota > 0 || nota < 11); 

        do{
            sexo = prompt("Ingrese sexo");
        }while (sexo !="f" && sexo !="m");

        //Punto A

        acumuladorDeNotas += nota;

        promedio = nota / contador;

        //Punto B

        if(contador==1){
            notaMinima=nota;
            sexoMinimo=sexo;
        }else if (nota<notaMinima){
            notaMinima=nota;
            sexoMinimo=sexo;
        }

        //Punto C
        if(sexo =="m" && nota>6){
            contadorDeVarones++;
        }
    }

    alert("El promeio es: "+promedio);
    alert("La nota mas baja es: "+notaMinima + " Del sexo "+sexoMinimo);
    alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es: "+contadorDeVarones);

*/
    var nota;
    var sexo;
    var contador = 0;

    while (contador < 5) {
        contador++

        do{
            nota = prompt("Ingrese la nota");
            nota = parseInt(nota);

        }while(isNaN(nota) || nota > 0 || nota < 11);

        do{
            sexo = prompt("Ingrese el sexo");
            
        }while(sexo != "f" && sexo != "m" );

        //Punto a

        acumuladorDeNotas += nota;



    }
































}
