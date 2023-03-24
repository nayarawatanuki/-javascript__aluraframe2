export class ListNegotiations {
    constructor() {
        this._negotiations = [];
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
        // this._view(this);
        // Reflect.apply(this._view, this._context, [this]);
    }

    get negotiations() {
        // return this._negotiations;

        return [].concat(this._negotiations); //evita que alguém consiga alterar a lista 
    }

    delete() {
        this._negotiations = [];
        // this._view(this);
        // Reflect.apply(this._view, this._context, [this]);
    }

    get volumeTotal() {

        return this._negotiations.reduce((total, n) => total + n.volume, 0.0);
    }

    order(col) {

        this._negotiations.sort(col);
    }

    sortReverse() {

        this._negotiations.reverse();
    }
}