function mostrar()
{
//tomo la edad  

    var edad;
   // var soltero;

    edad = document.getElementById("edad").value;
    //soltero = document.getElementById("estadoCivil").value="Soltero";

    if(edad<18){
        
    }else {
        if(edad>18){
            alert("Es soltero y no es menor");
        }
    }

}//FIN DE LA FUNCIÓN