function mostrar()
{
    /*
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño){
        case "Julio":
        case "Agosto":
            alert("Abirgate");
            break;
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta para el invierno");
            break;
        default:
            alert("Ya pasamos el frio, ahora calor!!!")
    }


alert (mesDelAño);

    */
   //Inicio
    var mesDelAño;

    mesDelAño = document.getElementById("mes").value;

    switch(mesDelAño){
        case "Julio":
        case "Agosto":
            msj= "Abrigate que hace frio";
            break;
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            msj= "Falta para el invierno";
            break;
        default: 
            msj= "Ya pasamos el frio, ahora calor!!!";
    }

    console.log(msj);




}//FIN DE LA FUNCIÓN