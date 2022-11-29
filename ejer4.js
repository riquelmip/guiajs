/*4.	Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.
*/


function tablamultiplicar(numero){
    let num = parseInt(numero);
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + i*num);
        
    }
}

tablamultiplicar(2);