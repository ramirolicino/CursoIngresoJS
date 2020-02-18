function mostrar()
{
    
    var clave = prompt("ingrese el número clave.");
    var contador = 0;

    while(clave != "utn750"){
        clave = prompt("Ingrese la clave");

        contador ++;
        if(contador == 2){
            break;
        }
    }

    alert("Bienvenido");

}//FIN DE LA FUNCIÓN
