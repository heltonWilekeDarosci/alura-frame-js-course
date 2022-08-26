class Negotiation {

    constructor (date, quantity, value) {
        this._date = date;
        this._quantity = quantity;
        this._value = value;
        Object.freeze(this);
    }

    
    get date () {
        return this._date;
    }
    
    get quatity () {
        return this._quantity;
    }
    
    get value () {
        return this._value;
    }
    
    get volume() {
        return this._quantity * this._value;
    }
}