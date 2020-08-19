function mostrar()
{
//tomo la edad  
    /*
    var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño) {
        case "Enero":
            mensaje="que comiences bien el año!!!";
            break;
        case "Marzo":
            mensaje="a clases!!!";
            break;
        case "Julio":
            mensaje="se vienen las vacaciones!!!";
            break;
        case "Diciembre":
            mensaje="Felices fiesta!!!";
    }

    alert(mensaje);
    */

    //Inicio
    var mesDelAño;

    mesDelAño = document.getElementById("mes").value;

    switch(mesDelAño) {
        case "Enero":
            msj = "Que comiences bien el año!!!";
            break;
        case "Marzo": 
            msj= "A clases!!!";
            break;
        case "Julio": 
            msj= "Se vienen las vacaciones!!";
            break;
        case "Diciembre":
            msj= "Felices fiestas !!!";

    }

    console.log(msj);


}//FIN DE LA FUNCIÓN