//Función por la cual vamos a hacer la tarea de pedir los datos y hacer los calculos.
function calcularCuotas() {
    //Pedimos al usuario que ingrese su monto a calcular.
    let importe = +prompt("Bienvenido! Ingrese el monto que desea calcular: ");
    //Utilizamos el ciclo for para decirle que muestre una por una los distintos valores de las cuotas hasta doce.
    for(let i = 1; i <= 12; i++){
        //Devolvemos al usuario las opciones que tiene para usar.
        alert("Su monto a pagar en " + i + " cuotas es: " + importe/i);
    }
}
//Aplicamos la función.
calcularCuotas();