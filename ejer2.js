/*2.	En un cierto país el impuesto que se debe pagar por artículos importados se calcula mediante las siguientes reglas:
Precio
Impuesto

$ 0.00 - $ 20.00
No genera impuesto.

$ 20.01 - $ 40.00
30 %

$ 40.01 - $ 500.00
40 %

$ 500.01 en adelante
50 %
*/





function calcularImpuesto(precio){
    let precioProd = parseFloat(precio);
    if(precioProd >= 0 && precioProd <= 20){ 
        console.log("El precio del producto no genera impuesto");
    }else if(precioProd >= 20.01 && precioProd <= 40){
        console.log("El precio: $" + precioProd + " genera un impuesto del 30%, es decir: $" + (precioProd*0.30).toFixed(2));
    }else if(precioProd >= 40.01 && precioProd <= 500){
        console.log("El precio: $" + precioProd + " genera un impuesto del 40%, es decir: $" + (precioProd*0.40).toFixed(2));
    }else if(precioProd >= 500.01){
        console.log("El precio: $" + precioProd + " genera un impuesto del 50%, es decir: $" + (precioProd*0.50).toFixed(2));
    }
       
}

calcularImpuesto(1400);