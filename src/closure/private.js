/**
 * Creación de variables "privadas" en JS
 * Ya que JS no es un lenguaje en el cual se puedan declarar variables privadas
 * estas pueden ser simuladas usando closures y métodos los cuales retornen y/o asignen 
 * el valor de la variable.
 */

//Función principal
const person = () => {
    //variable "privada"
    var saveName = "Enrique";
    //El return encapsula los métodos set y get
    return {
        //metodo el cual es una función que retorna el valor de la variable
        getName: () => {
            return saveName;
        },
        //metodo el cual asigna el nuevo valor 
        setName: (name) => {
            saveName = name;
            return 'Nombre guardado con éxito!';
        },
    }
}

const newPerson = person();

console.log(newPerson.getName());
console.log(newPerson.setName('Eduardo'));
console.log(newPerson.getName());

//Mismo ejemplo pero usando getters y setters

const person2 = () => {
    var name = 'default';
    return {
        get name() {
            return name;
        },
        
        set name(name) {
            name = name;
        }
    }
}

const secondPerson = person2();
//Asignando el valor
secondPerson.name = 'Enrique';
//Devolviendo el valor asignado
console.log(secondPerson.name);