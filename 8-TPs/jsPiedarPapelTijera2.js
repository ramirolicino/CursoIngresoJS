	var eleccionMaquina;
	var ContadorDeEmpates=0;
	var ContadorDeGanadas=0;
	var ContadorDePerdidas=0;
	var max;
    var min;
    var random;
    var mensaje = console.log;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	max = 4;
    min = 1;
    random = Math.floor(Math.random()* (max - min) + min);

	console.log(random);
	
}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina){
        case 1:
            mensaje= "Empato";
            break;
        case 2:
            mensaje= "Gano";
            break;
        case 3:
            mensaje= "Perdio";
    }


}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina){
        case 1:
            mensaje= "Gano";
            break;
        case 2:
            mensaje= "Empato";
            break;
        case 3:
            mensaje= "Perdio";
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina){
        case 1:
            mensaje= "Perdio";
            break;
        case 2:
            mensaje= "Gano";
            break;
        case 3:
            mensaje= "Empato";
    }
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	
}