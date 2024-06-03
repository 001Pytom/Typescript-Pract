"use strict";
// // Dom
// // const anchor = document.querySelector("a");
// /* anchor.href will birng error, because typescript is saying its
// not sure if that anchor tag exist, we can ether use if sttement ti display the hfref or rather use an !
// at the end of the queryselector , ! this eansm, uu as a developer is sure that that anchor tag exist
// */
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes E${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
let invoices = [];
// const form = document.querySelector("form")!;
/*
for it to see this as a form and nit just a rnadon element , u do this below and dont use exclamation marlk
*/
// form
const form = document.querySelector(".new-item-form");
//input
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
