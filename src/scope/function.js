const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();

const anotherFunction = () => {
    var x = 1;
    var x = 2;

    let y = 1;

    /**
     * Mientras las variables y las funciones se encuentren en el mismo ambito,
     * las variables pueden ser usadas por las funciones que están en el mismo nivel.
     */
    const example = () => {
        return y;
    }
    console.log(x);
    console.log(example());
}

anotherFunction();