// // Dom
// // const anchor = document.querySelector("a");
// /* anchor.href will birng error, because typescript is saying its
// not sure if that anchor tag exist, we can ether use if sttement ti display the hfref or rather use an !
// at the end of the queryselector , ! this eansm, uu as a developer is sure that that anchor tag exist
// */
// const anchor = document.querySelector("a")!;

// console.log(anchor.href);

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

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
