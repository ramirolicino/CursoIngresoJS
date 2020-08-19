function mostrar()
{
//tomo la edad  
    /*
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
        //Abril, Junio, Septiembre y Noviembre
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Tienen 30 dias");
            break;
        //Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Tienen 31 dias");
            break;
        default:
            alert("Tienen 28 dias");
    }
    */
   //Inicio
    var mesDelAño;

    mesDelAño = document.getElementById("mes").value;

    switch(mesDelAño){
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            msj= "30 Dias";
            break;
        case "Febrero":
            msj= "28 Dias";
            break;
        default:
            msj="31 Dias";
    }

    console.log(msj);





}//FIN DE LA FUNCIÓN