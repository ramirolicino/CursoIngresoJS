function mostrar()
{
//tomo la edad  

    var edad;
   //var soltero;

    edad = document.getElementById("edad").value;
    //soltero = document.getElementById("estadoCivil").value="Soltero";

    if(edad<18 ){
        alert("Es muy pequeño para NO ser soltero");
    }else {
        alert("...");
    }


}//FIN DE LA FUNCIÓN