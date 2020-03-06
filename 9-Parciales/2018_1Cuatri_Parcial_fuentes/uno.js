
function mostrar()
{
    var base;
    var altura;
    var resultado;
    
    base = parseInt(base);
    altura = parseInt(altura);

    while(isNaN(base) && isNaN(altura)){

        base = prompt("Ingrese la base del rectangulo");

        altura = prompt("Ingrese la altura del rectangulo");
 
        resultado = base * altura;
    }

    alert("perímetro: "+resultado);
}
