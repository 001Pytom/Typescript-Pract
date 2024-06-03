import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payments } from "./classes/Payment.js";
import { Hasformatted } from "./interfaces/HasFormated";

// interface
// allows us to enforce certain structure of something
// interface isPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: isPerson = {
//   name: "shaun",
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log(amount);
//     return amount;
//   },
// };

// console.log(me);
// console.log("jsjsj");
// // Dom
// // const anchor = document.querySelector("a");
// /* anchor.href will birng error, because typescript is saying its
// not sure if that anchor tag exist, we can ether use if sttement ti display the hfref or rather use an !
// at the end of the queryselector , ! this eansm, uu as a developer is sure that that anchor tag exist
// */
// const anchor = document.querySelector("a")!;

// console.log(anchor.href);

// let docOne = new Invoice("yoshi", "web work", 250);
// let docTwo = new Invoice("mario", "plumbing work", 200);

// let docs: Hasformatted[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the luigi website", 300);

// let invoices: Invoice[] = [];
// const form = document.querySelector("form")!;
/*
for it to see this as a form and nit just a rnadon element , u do this below and dont use exclamation marlk
*/
// form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//input
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: Hasformatted;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});
