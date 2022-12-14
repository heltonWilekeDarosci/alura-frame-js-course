class NegotiationList {
    
    constructor () {
        this._negotiations = [];
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
    }
    
    get negotiations() {
        return [].concat(this._negotiations); //Defensive programming to avoid altering//
    }
    
    clear() {
        this._negotiations = [];
    }
}