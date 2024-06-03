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
// let names = ["gggg", "kkkk", "jjj"];

// // you cant dothis
// // names.push(10);
// // you cant chnage type of an array
// // to make it mixed array, u just have to decleare those types initially in the array
// let mixed = ["jsh", 8, 0.01];
// mixed.push(10);

// // objects

// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 12,
// };

// // you cant chnage the type of the array and it behnave the same way as variable  well u can update it buut cant change the type
// // lesson5
// // explicit types
// let character: string;
// let age: number;
// // arrays
// let ninjas: string[] = [];
// ninjas.push("yusi");
// console.log(ninjas);

// // union type this is saying this can be any of the two data type
// let mixed2: (string | number)[] = [];
// // here u dont need to put in bracket
// let uid: string | number;

// lesson 6
// // dynamic types (any)
// let age: any;
// 7;
// // better workflow  and ts conflihg

// functions
// let greet: Function;

// greet = () => {
//   console.log("hello world");
// };

// const add = (a: number, b: number, c?: number | string) => {
//     // the c is optional, so if we like, we get to not pass in an argument
//   console.log(a + b);
// };

// add(5, 10);

// to avoid repitition
// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };

// const greet = (user: { name: string; uid: string | number }) => {
//   console.log(`${user.name} says hello`);
// };
// do this

// type stringOrNum = string | number;
// type objWithName = { name: string; uid: stringOrNum };
// const logDetails = (uid: stringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };

// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// };

// function signature

// example1
// let greet: (a: string, b: string) => void;
// // the type has to amtch
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// };
// //  example2
// let calc: (a: number, b: number, c: string) => number;
// // this means it must return a number
// calc = (num1: number, numtwo: number, action: string) => {
//   if (action === "add") {
//     return num1 + numtwo;
//   } else {
//     return num1 - numtwo;
//   }
// };

// the dom and type casting
