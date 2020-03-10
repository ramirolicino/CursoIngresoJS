function mostrar()
{
    var altura;
    var base;
    var resultado;

    
    do{
        base = prompt("Ingresa la base");
        base = parseInt(base);

    }while(isNaN(base));

    do{
        altura = prompt("Ingresa la altura");
        altura = parseInt(altura);

    }while(isNaN(altura));

    resultado = base * altura;

    console.log(base);
    console.log(altura);
    console.log(resultado);

}
