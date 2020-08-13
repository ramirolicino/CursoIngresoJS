function mostrar()
{
//tomo la edad  
    /*
    var edad;

    edad = document.getElementById("edad").value;

    if(edad>=18){
        alert("Es mayor de edad");
    } else {
        if(edad<13){
            alert("Es un niño");
        } else {
            alert("Es adolecente");
        }
    } 
    */

    var edad;

    edad = document.getElementById("edad").value;

    if(edad >= 18){
        console.log("Mayor");
    }else if(edad >= 13 && edad <= 17){
        console.log("Adolecente");
    }else if(edad < 13){
        console.log("Menor");
    } 

}//FIN DE LA FUNCIÓN