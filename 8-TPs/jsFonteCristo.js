/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

var numero;

function ComenzarIngreso() 
{
     numero = document.getElementById("numero").value ;

     numero = parseInt(numero);

     while(isNaN(numero) || numero <= 0){
        numero = document.getElementById("numero").value;        
        
        numero = parseInt(numero);
     }
}

function NumerosPares()
{
    ComenzarIngreso();
    var contador = numero +1;
    var contadorDePares = 0;

    while(contador > 1){
        contador--;


        if(contador % 2 == 0){
            contadorDePares++;
            console.log("Pares: "+contador);
        }

    }

    console.log("Numeros pares: "+contadorDePares);
}

function NumerosImpares()
{
    ComenzarIngreso();
    var contador = numero +1;
    var contadorDeImpares = 0;

    while(contador > 1){
        contador--;

        if(contador % 2 == 1){
            contadorDeImpares++;
            console.log("Impares: "+contador);
        }

    }

    console.log("Numeros pares: "+contadorDeImpares);
}

function NumerosDivisibles()
{
    ComenzarIngreso ();
    var contador = 0;
    var contadorDivicibles = 0;

    while(contador<101){
        contador++;

        if(numero % contador == 0){
            contadorDivicibles++;
        }
    }

    console.log("Contador de divisibles: "+contadorDivicibles);

}

function VerificarPrimo()
{
    ComenzarIngreso();

    var contador = 2;
    var noEsPrimo = false;

    while(contador < numero){
        

        if(numero % contador == 0){
            noEsPrimo = true;
            break;
        }
        
        contador++;
    }

    if(noEsPrimo){
        console.log("No es primo");
    }else{
        console.log("El numero es primo");
    }

}
