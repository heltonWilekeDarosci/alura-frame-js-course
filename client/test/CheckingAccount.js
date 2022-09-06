class CheckingAccount extends Account {

    update(tax) {
        this._balance = this._balance + tax; 
    }
}