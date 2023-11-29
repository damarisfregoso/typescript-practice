// //you cannot change the types the variable, you can change the values but not types
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;

// character = 'luigi';

// age = 40;

// isBlackBelt = true;

// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// }

// console.log(circ(7.5));

let names = ['luigi', 'mario', 'peach'];

names.push('toad');


//Arrays

//cannot do this because the names array was initialized to strings
// names.push(3);
//names[0] = 3;

// let numbers = [10, 20, 30, 40];
// numbers.push(25);
// numbers.push('shaun');
// numbers[1] = 'shaun'

// let mixed = ['ken', 4, 'jenny', 8, 9];

// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;

// //Objects 
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };

// ninja.age = 40;
// ninja.name = 'ryu'
// // ninja.age = '30'
// // ninja.skills = ['fighting', 'sneaking']

// ninja = {
//   name: 'luigi',
//   belt: 'orange',
//   age: 40,
//   skills: []
// }

//EXPLICIT TYPES

// //explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// age = 22;
// isLoggedIn = true;

// //arrays
// let ninjas: string[] = [];
// ninjas.push('shaun');

// //union types
// let mixed: (string|number| boolean)[] =[];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(false);

// let uid: string|number;
// uid = '123';
// uid = 123;

// //objects
// let ninjaOne: object;
// ninjaOne ={ name: 'yoshi', age = 30}

// let ninjaTwo: {
//   name: string,
//   age: number,
//   beltColor: string
// }

// ninjaTwo = {name: 'luigi', age: 20, beltColor: 'black'}

//DYNAMIC TYPES (try not to use so much defeats the purpose of typescript)

// let age: any = 25;
// age = true;

// let mixed: any[] =[];
// mixed.push('hello');
// mixed.push(22);
// mixed.push(false);

// let ninja: {name: any, age: any}
// ninja = {name: 'yoshi', age: 25};
// ninja = {name: 25, age: 'yoshi'};


// console.log('test');
let greet: Function;

greet = () => {
  console.log('hello, again');
}

//tip: always do required parameters first, then the optional at the end
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, '20');

const minus = (a: number, b: number) => {
  return a +b;
}

let result = minus(10, 7);