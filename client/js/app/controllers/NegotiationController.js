class NegotiationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        this._negotiationList = new NegotiationList(model => this._negotiationView.update(model));
        
        this._negotiationView = new NegotiationView($('#negotiationView'));
        this._negotiationView.update(this._negotiationList);
        
        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message);
    }
    
    add(event) {
        event.preventDefault();
        this._negotiationList.add(this._createNegotiation());
        
        this._message.text = 'Negociação adicionada com sucesso!';
        this._messageView.update(this._message);
        
        this._clearForm();
    }

    clearList() {
        this._negotiationList.clear();

        this._message.text = 'Negociações apagadas com sucesso!';
        this._messageView.update(this._message);
    }
    
    _createNegotiation() {
        return new Negotiation (
            DateHelper.textToDate(this._inputDate.value),
            this._inputQuantity.value,
            this._inputValue.value,
        );
    }

    _clearForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}