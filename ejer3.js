/*3.	El costo de las llamadas telefónicas internacionales depende de la zona geográfica en la 
que se encuentre el país destino y del número de minutos hablados. 
En la siguiente tabla se presenta el costo del minuto por zona. 
A cada zona se le ha asociado una clave.
Nota: Para llamadas con duración menor a 30 minutos se hace descuento del 10%.
Clave
Zona
Precio

12
América del Norte
$ 2.00

15
América Central
$ 2.20

18
América del Sur
$ 4.50

19
Europa
$ 3.50

23
Asia
$ 6.00

25
África
$ 6.00

29
Oceanía
$ 5.00

*/





function calcularCostoLlamada(clavez, duracion){
    let minutos = parseFloat(duracion);
    let clave = parseInt(clavez);
    let costomin = 0.00;
    let zona = "";
    if(clave == 12){ 
        costomin = 2;
        zona = "América del Norte";
    }else if(clave == 15){ 
        costomin = 2.20;
        zona = "América Central";
    }else if(clave == 18){ 
        costomin = 4.5;
        zona = "América del Sur";
    }else if(clave == 19){
        costomin = 3.5;
        zona = "Europa";
    }else if(clave == 23){
        costomin = 6;
        zona = "Asia";
    }else if(clave == 25){
        costomin = 6;
        zona = "África";
    }else if(clave == 29){
        costomin = 5;
        zona = "Oceanía";
    }else{
        console.log("La clave no es valida.");
        return false;
    }

    let costototal = minutos * costomin;
    console.log("El costo total de la llamada es: " + minutos + " minutos a un costo de: $" +costomin.toFixed(2)+" para la zona de "+zona+". Hace un total de $" +costototal.toFixed(2));
    if(minutos < 30){
        costototal = costototal - (costototal*0.10);
        console.log("Como la llamada es menor a 30 minutos, se le hizo un descuento del 10%. El nuevo costo de llamada es de $" + costototal.toFixed(2));
    }
       
}

calcularCostoLlamada(23, 29);