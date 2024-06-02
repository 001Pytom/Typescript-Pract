var chaacter = "faatihat";
console.log(chaacter);
var inputs = document.querySelectorAll("input");
console.log(inputs);
/* this wont work, unless u connect it with js
in the terminal type tsc sandbox.ts sandbox.js
ensue you are in this dirctory
if they are the same name u can do this isnatead :tsc sandbox.ts
*/
inputs.forEach(function (input) {
    console.log(input);
});
/*
to run this everytime without needing to re run the tsc sandbox.ts
use, tsc sandbox.ts -w
*/
// lesson3
// you can change value of ariables but nt the type
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(10));
