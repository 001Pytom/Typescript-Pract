// const chaacter = "faatihat";

// console.log(chaacter);

// const inputs = document.querySelectorAll("input");

// console.log(inputs);
// /* this wont work, unless u connect it with js
// in the terminal type tsc sandbox.ts sandbox.js
// ensue you are in this dirctory
// if they are the same name u can do this isnatead :tsc sandbox.ts
// */
// inputs.forEach((input) => {
//   console.log(input);
// });
// /*
// to run this everytime without needing to re run the tsc sandbox.ts
// use, tsc sandbox.ts -w
// */

// // lesson3
// // you can change value of ariables but nt the type

// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };

// console.log(circ(10));
// // lesson 3

// arrays
let names = ["gggg", "kkkk", "jjj"];

// you cant dothis
// names.push(10);
// you cant chnage type of an array
// to make it mixed array, u just have to decleare those types initially in the array
let mixed = ["jsh", 8, 0.01];
mixed.push(10);

// objects

let ninja = {
  name: "mario",
  belt: "black",
  age: 12,
};

// you cant chnage the type of the array and it behnave the same way as variable  well u can update it buut cant change the type
