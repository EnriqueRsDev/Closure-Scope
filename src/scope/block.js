/**
 * Cuando se usa var, para crear una variable, dentro de un bloque esa variable
 * puede ser accedida desde afuera de ese bloque. Pero si se usa let o const, 
 * dichas variables solo pueden ser utilizadas dentro del bloque y no por fuera.
 */

const fruits = () => {
    //ambito de bloque
    if (true) {
        const fruit1 = 'apple';
        var fruit2 = 'banana';
        let fruit3 = 'kiwi';
    }
    //no se puede acceder al ambito del bloque
    //Esto se debe a que los log tuvierean que estar en el mismo ambito de las variables
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

//Ejemplo en donde si se puede acceder a las variables

const verduras = () => {
    if (true) {
        let ver1 = 'Zanahoria';
        let ver2 = 'Apio';
        const ver3 = 'cebolla';
        //En este caso los logs si funcionarian
        //porque estos se encuentran en el ambito de las variables
        console.log(ver1);
        console.log(ver2);
        
        /**
         * En este caso se puede acceder a ver3 ya que como con los logs,
         * la funcion está en el mismo ambito de las variables, si se quisisera 
         * acceder desde fuera no funcionaría.
         */
        const ver = () => {
            return ver3;
        }
        console.log(ver());
    }
}

verduras();

//Otros ejemplos

/**
 * Acá funciona porque let no permite sobreescribir el valor de x
 * por tal manera el primer log es 2 y el segundo log es 1, ya que no pueden ser
 * sobreescritas.
 */

//scope global
let x = 1;

//ambito de bloque
{
    let x = 2;
    console.log(x);
}

console.log(x);

/**
 * Lo anterior no pasa con var, si se tiene var en el scope global y se hace 
 * una reasignación del valor de x, este si se sobreescribiría y en los dos logs seria
 * el mismo valor
 */

//scope global
var y = 1;

//ambito de bloque
{
    var y = 2;
    console.log(y);
}

console.log(y);

//Más ejemplos

const anotherFunction = () => {
    /**
     * En el resultado se mostraran solo 10, ¿por qué no va del 0 al 1?
     * Bueno, esto se debe a que javascript pone en colo cada paso de la iteración
     * y como en cada iteración se va sumando 1 a i y la ultima condicion fue que sea 
     * menor de 10 y como con var se va sobre escribiendo el valor, entonces por "culpa"
     * de la fila de tareas este queda sobre escrito en la variable y se imprimen todos
     * los 10 justo cuando se libera el setTimeout.
     * Lo anterior se soluciona usando let en vez de var.
     */
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();

for (var o = 0; o < 10; o++) {
    console.log(o);
}