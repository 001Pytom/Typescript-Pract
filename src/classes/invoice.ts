// classes
// class Invoice {
//   client: string;
//   details: string;
//   amount: number;

//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes E${this.amount} for ${this.details}`;
//   }
// }

import { Hasformatted } from "../interfaces/HasFormated";
// inatead of making it accsbile for evryone to chnage, you can better still hve it like this
export class Invoice implements Hasformatted {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes E${this.amount} for ${this.details}`;
  }
}
