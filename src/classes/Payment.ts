import { Hasformatted } from "../interfaces/HasFormated";
// inatead of making it accsbile for evryone to chnage, you can better still hve it like this
export class Payments implements Hasformatted {
  constructor(
    readonly recepient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recepient} is  owed E${this.amount} for ${this.details}`;
  }
}
