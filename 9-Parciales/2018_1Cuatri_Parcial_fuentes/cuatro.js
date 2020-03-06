function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;
    var resultadoSuma;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    numeroUno = prompt("Ingresa el primer numero");
    numeroDos = prompt("Ingresa el segundo numero");

    while(isNaN(numeroUno) && isNaN(numeroDos)){
        if(numeroUno == numeroDos){
            
            resultado = numeroUno + numeroDos;

            alert("Concatenados: "+resultado);

        }else if(numeroUno > numeroDos){

            numeroUno = parseInt(numeroUno);
            numeroDos = parseInt(numeroDos);

            resultado = numeroUno - numeroDos;

            alert("Resta: "+resultado);

        }else if(numeroUno < numeroDos){

            numeroUno = parseInt(numeroUno);
            numeroDos = parseInt(numeroDos);

            resultadoSuma = numeroUno + numeroDos;

            alert("Suma: "+resultadoSuma);

            if(resultadoSuma >= 10 ){

                alert("la suma es "+resultadoSuma + " y supero el 10");
            }

        }
    }
}
