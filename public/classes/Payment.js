// inatead of making it accsbile for evryone to chnage, you can better still hve it like this
export class Payments {
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} is  owed E${this.amount} for ${this.details}`;
    }
}
