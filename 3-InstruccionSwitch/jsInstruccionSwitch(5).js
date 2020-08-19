function mostrar()
{
//tomo la edad  
    /*
var laHora = document.getElementById('hora').value;

//alert (laHora);
	
	switch(laHora){
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            alert("Es de mañana");
            break;
        default:
            alert("...");
    }
    */
   //Inicio
    var laHora;

    laHora = document.getElementById("hora").value;

    switch(laHora){
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
        msj= "Es de mañana";
        break;
    default:
        msj= "No config.";

    }
    
    console.log(msj);

}//FIN DE LA FUNCIÓN