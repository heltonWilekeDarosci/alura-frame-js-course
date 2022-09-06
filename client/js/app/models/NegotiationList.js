class NegotiationList {
    
    constructor (trap) {
        this._negotiations = [];
        this._trap = trap;
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
        this.trap(this);
    }
    
    get negotiations() {
        return [].concat(this._negotiations); //Defensive programming to avoid altering//
    }

    clear() {
        this._negotiations = [];
    }
}