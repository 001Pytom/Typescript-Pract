// classes
// class Invoice {
//   client: string;
//   details: string;
//   amount: number;
// inatead of making it accsbile for evryone to chnage, you can better still hve it like this
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes E${this.amount} for ${this.details}`;
    }
}
