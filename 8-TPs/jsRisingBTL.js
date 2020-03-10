/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldoBruto;
    var numeroLegajo;
    var nacionalidad;
    var respuesta = true;

    while(respuesta){
        
        do{
            edad =  prompt("Ingrese la edad");
            edad =  parseInt(edad);

        }while(isNaN(edad) || edad < 18 || edad > 90);

        do{
            sexo = prompt("Ingresar el sexo ");

        }while(!isNaN(sexo) || sexo != "f" && sexo != "m");

        do{
            estadoCivil = prompt("Ingrese estado civil: Casado / Soltero / Divorciado");

        }while(!isNaN(estadoCivil) || estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "divorciado");

        do{
            sueldoBruto = prompt("Ingrese su sueldo bruto");
            sueldoBruto = parseInt(sueldoBruto);

        }while(isNaN(sueldoBruto) || sueldoBruto < 8000);

        do{
            numeroLegajo = prompt("Ingrese su N` legajo");
            numeroLegajo = parseInt(numeroLegajo);

        }while(isNaN(numeroLegajo) || numeroLegajo < 999 );

        do{
            nacionalidad = prompt("Ingrese su nacionalidad");

        }while(!isNaN(nacionalidad) || nacionalidad != "a" && nacionalidad != "e");
   
        respuesta = confirm("Formulario finalizado?")
    }
    
    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = estadoCivil;
    document.getElementById("Sueldo").value = sueldoBruto;
    document.getElementById("Legajo").value = numeroLegajo;
    document.getElementById("Nacionalidad").value = nacionalidad;    
    




}
