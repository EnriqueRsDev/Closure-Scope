/**
 * Closure
 * Combinancion entre una función y el ambito léxico en donde fue creada.
 */

const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10)

/**
 * Un closure no es mas que una función que contiene una variable la cual
 */
const moneyBox2 = () => {
    var saveCoins = 0;

    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }

    return countCoins;
}

let myMoneyBox = moneyBox2();

myMoneyBox(10);
myMoneyBox(5);

//Ejemplo, display name

//se crea la función principal, es decir la que contiene el closure
const principal = () => {
    //se declara la variable que va a almacenar el argumento
    var name;
    //se crea el closure y se le asigna que parametro o parametros recibe
    const displayName = (nme) => {
        name = nme;
        console.log(nme);
    }
    //se retorna el closure
    return displayName;
}
//En una variable o constante se asigna la función principal
const givenName = principal();

//Se pasan los argumentos.
givenName('Eduardo');

/**
 * Más información del funcionamiento de los closure:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * https://www.geeksforgeeks.org/how-closure-works-in-javascript/#:~:text=A%20Closure%20is%20a%20combination,external%20things%20used%20inside%20it.
*/