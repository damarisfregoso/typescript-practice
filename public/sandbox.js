"use strict";
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
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet = function (user) {
    console.log("".concat(user.name, " says hello"));
};
