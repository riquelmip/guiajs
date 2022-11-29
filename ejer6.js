/*6.	Elaborar un algoritmo para leer las notas de 1 estudiantes.
Calcular el promedio de cada estudiante de la siguiente manera:
Nota 1 (20%)
Nota 2 (30%)
Nota 3 (50%)

*/


function prom(n1, n2, n3){
    let nota1 = parseFloat(n1);
    let nota2 = parseFloat(n2);
    let nota3 = parseFloat(n3);
    let promedio = (nota1*0.2)+(nota2*0.30)+(nota3*0.5);
    console.log("El promedio de notas es de: " +promedio.toFixed(2));
    
}

prom(5,5,5);