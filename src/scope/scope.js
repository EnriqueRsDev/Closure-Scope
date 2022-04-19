/**
 * ¿Qué es el scope?
 * Es el alcanze que tienen las variables dentro de
 * los bloques de código, existen dos tipos de scope:
 * Scope Local y Scope global
 */

//ejemplo de Global Scope

/**
 * Con var se puede reasignar un nuevo valor a una misma variable
 * ej: var hola = 'Hola';   -> reasignando = var hola = 'Adios';
 * En consola se mostraria el nuevo valor asignado.
 *  
 * Eso no pasa con let y const.
 */

var global = 'Hello';
let world = 'Hello World';
const helloW = 'Hello World';

const anotherFunction = () => {
    console.log(global);
    console.log(world);
    console.log(helloW);
}

anotherFunction();

//Otra manera de tener variables globales

const helloWorld = () => {
    //se inicializa una variable, pero esta no debe tener, var, let o const
    globalVar = 'Variable Global';
}
//se inicializa la funcion para poder acceder a sus valores.
helloWorld();
//se accede desde el global scope a la variable interna de la funcion.
console.log(globalVar);
//Hacer lo anterior es una mala práctica
