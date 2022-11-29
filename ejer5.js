/*5.	Elaborar un algoritmo para leer la edad de 10 personas y mostrar cuantos son mayores de edad.
*/


function mayoresedad(edades){
    let arr_edades = edades;
    let contador = 0;
    for (let i = 0; i < arr_edades.length; i++) {
        
        if(arr_edades[i] >= 18){
            contador++;
        }
        
    }
    console.log("De un total de "+arr_edades.length+" personas, son mayores de edad un total de: " + contador + " personas");
    
}
var array = [3,5,7,9,18,20,32,45,6,6];
mayoresedad(array);