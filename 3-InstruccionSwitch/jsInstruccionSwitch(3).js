function mostrar()
{
//tomo la edad  
    /*
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
    switch(mesDelAño){
        case "Febrero":
            alert(" Este mes no tiene más de 29 días");
            break;
        default: 
            alert("Este mes tiene 30 o más días");
    }
    */
    //Inicio
    var mesDelAño;

    mesDelAño = document.getElementById("mes").value;

    switch(mesDelAño){
        case "Febrero":
            msj= "Este mes no tiene más de 29 días.";
            break;
        default: 
            msj= "Este mes tiene 30 o más días."; 
    }

    console.log(msj);

}//FIN DE LA FUNCIÓN