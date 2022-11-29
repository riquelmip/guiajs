/*7.	Elaborar un algoritmo para leer la nota de diez estudiantes y mostrar cantidad de aprobados y reprobados.

*/


function aprobados(notas){
    let arr_notas = notas;
    let contadorAprob = 0;
    let contadorRep = 0;
    for (let i = 0; i < arr_notas.length; i++) {
        
        if(arr_notas[i] >= 6){
            contadorAprob++;
        }else{
            contadorRep++;
        }
        
    }
    console.log("De un total de "+arr_notas.length+" notas, los que aprobaron fueron: " + contadorAprob + ", y los que no aprobaron fueron "+contadorRep);
    
}
var array = [3,5,7,9,8,2,2,4,6,6];
aprobados(array);