//1.	Leer un número entero y determinar si tiene 3 dígitos

function evaluarEnteroTresDigitos(numero){
    let n = parseInt(numero);
    if(n > -1000 && n < -99){ //si el numero tiene 3 digitos pero es negativo
        console.log("El numero: " + n + " es negativo, y tiene 3 digitos");
    }else if(n > 99 && n < 1000){ //si el numero tiene 3 digitos pero y es positivo
        console.log("El numero: " + n + " es positivo, y tiene 3 digitos");
    }else{
        console.log("El numero no tiene 3 digitos");
    }
}

evaluarEnteroTresDigitos(300);