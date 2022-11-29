/*
8.	Elabore un algoritmo con un menú simple con las cuatro operaciones básicas: sumar, restar, multiplicar, dividir.


*/
//SUMA = 1
//RESTA = 2
//MULTIPLICACION = 3
//DIVISION = 4

function menu(operacion, num1, num2){
    let tipo = parseInt(operacion);
    let numero1 = parseInt(num1);
    let numero2 = parseInt(num2);
    let resultado = 0;
    if(tipo == 1){ //es suma
        resultado = numero1 + numero2;
        console.log("La suma de los numeros: "+numero1+" + "+numero2+" es = "+resultado);
    }else if(tipo == 2){ //es resta
        resultado = numero1 - numero2;
        console.log("La resta de los numeros: "+numero1+" - "+numero2+" es = "+resultado);
    }else if(tipo == 3){ //es multiplicacion
        resultado = numero1 * numero2;
        console.log("La multiplicacion de los numeros: "+numero1+" x "+numero2+" es = "+resultado);
    }else if(tipo == 4){ //es suma
        resultado = numero1 / numero2;
        console.log("La division de los numeros: "+numero1+" / "+numero2+" es = "+resultado);
    }
    
    
}
menu(1,4,2);
menu(2,4,2);
menu(3,4,2);
menu(4,4,2);