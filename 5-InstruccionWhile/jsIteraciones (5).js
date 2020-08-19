function mostrar()
{
    /*
    var sexo = prompt("ingrese f ó m .");

    while(sexo != "f" && sexo != "m"){
        
        sexo = prompt("Error. ingrese f ó m");
        
    }

    document.getElementById('Sexo').value = sexo;
    */
   //Inicio
    var sexo = prompt("INgressar sexo (m / f)");

    do{
        sexo = prompt("INgressar sexo (m / f)");
    }while(sexo != "m" && sexo != "f");

    document.getElementById('Sexo').value = sexo;
   
}//FIN DE LA FUNCIÓN