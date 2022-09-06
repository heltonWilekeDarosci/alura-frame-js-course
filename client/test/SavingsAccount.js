class SavingsAccount extends Account {

    update(tax) {
        this._balance = this._balance + 2 * tax;
    }
}