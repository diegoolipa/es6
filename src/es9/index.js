
//-----------------rest operator-------------------/
const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
};

let { name, age } = obj;
console.log(name, age);

//si quiero solo name y age
let { country, ...alls } = obj;
console.log(alls);

//---------------anidar con operador de propagacion------------------/

const obj1 = {
    name: 'oscar',
    age: 32,
};
// agregar un nuevo dato a nuestro objeto
const obj2 = {
    ...obj1,
    country: 'MX',
};

console.log(obj2)

//----------------Promise.finally------------------------------------/
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test de error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//------------------Regex---------------------------/
//-----------------(year)-----(month)----(day)------/

// me gusta intnresante
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20');

const year = match[1]

const month = match[2]

const day = match[3]



console.log(year, month, day);
//
const regexData1 = /(?<anio>[0-9]{4})-(?<mes>[0-9]{2})-(?<dia>[0-9]{2})/
const match1 = regexData1.exec('2018-04-20');
const {anio, mes, dia } = match1.groups;

console.log(anio, mes, dia);
