//.----------------------------------------------------parte 2
let name = 'oscar';
let age = 32;

//es5
let obj;
obj = { name: name, age: age };
//es6
let obj2;
obj2 = { name, age };
console.log(obj2);


//AREGLO DE OBJETOS
const names = [
    { name: 'Oscar', age: 32 , country:'PE'},
    { name: 'Yesica', age: 10, country:'BOL'}
]
//ES5
let listOfNames = names.map(function (item) {
    console.log(item.name);
})

//ES6
let listOfNames2 = names.map(item => console.log('===='+item.name))

//ES6
// muy interesante
let  miarroafuncion = names.map(i => {
    if (i.age > 18){
        console.log( `==========1 ${i.name} tiene ${i.age} años es mayor de edad
        y es de ${i.country}` )
    }else{
        console.log( `==========1 ${i.name} tiene ${i.age} años es menor de edad
        y es de ${e.country}` )
    }
})



const listOfNames3 = (name, age, country) => {
    console.log(`${name} tiene ${age} años y es de ${country} ` )
}
listOfNames3('diego','22','PE');

// const listOfNames4 = name => {
// ...
// }

const square = num => num * num;


// PROMESA
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();


//GENERADORES

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
