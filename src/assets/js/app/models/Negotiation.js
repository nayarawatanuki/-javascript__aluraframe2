export class Negotiation {

    constructor(date, quantity, value) {
        this._date = new Date(date);
        this._quantity = quantity;
        this._value = value;
    }

    get date() {
        return new Date(this._date);
    }

    get quantity() {
        return this._quantity;
    }

    get value() {
        return this._value;
    }

    get volume() {
        return this._quantity * this._value;
    }
}