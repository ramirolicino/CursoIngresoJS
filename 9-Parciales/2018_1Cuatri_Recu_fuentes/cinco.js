function mostrar()
{
    var diaDeSemana;
    var respuesta = true
       while(respuesta){ 
            do{
                diaDeSemana = prompt("Ingresa un dia de semana");
            }while(!isNaN(diaDeSemana) || diaDeSemana != diaDeSemana);

            switch(diaDeSemana){
                case "lunes":
                case "martes":    
                case "miercoles":
                case "jueves":
                case "viernes":
                    alert("A trabajar")
                    break;
                case "sabado": 
                case "domingo":
                    alert("a descansar");
                    break;
                default: 
                    if(diaDeSemana != true){   
                        alert("Error. ingrese un dia de semana");
                    }
                }
                respuesta = confirm("desea continuar?")
        }

}
