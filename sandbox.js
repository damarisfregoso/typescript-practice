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
var names = ['luigi', 'mario', 'peach'];
names.push('toad');
//Arrays
//cannot do this because the names array was initialized to strings
// names.push(3);
//names[0] = 3;
// let numbers = [10, 20, 30, 40];
// numbers.push(25);
// numbers.push('shaun');
// numbers[1] = 'shaun'
var mixed = ['ken', 4, 'jenny', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
//Objects 
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'luigi',
    belt: 'orange',
    age: 40,
    skills: []
};
