/**
 * El local scope solo permite acceder a las variables de una funcion desde dentro 
 * de la misma función
 */

//Ejemplos de Local Scope

//La constante hello solo puede ser utilizada en la funcion donde se encuentra
const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
//var global
var scope = 'Im Global';

const functionScope = () => {
    //var local
    var scope = 'I am just a local';
    //Como se encuentran en el mismo lexico, la funcion "func" puede hacer uso 
    //de la variable scope
    const func = () => {
        return scope;
    }

    console.log(func());
}

functionScope()