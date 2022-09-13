class NegotiationView extends View {

    _template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negotiations.map(negotiation => `
                            
                        <tr>
                            <td>${DateHelper.dateToText(negotiation.date)}</td>
                            <td>${negotiation.quantity}</td>
                            <td>${negotiation.value}</td>
                            <td>${negotiation.volume}</td>
                        </tr>
                        
                    `).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3">TOTAL</td>
                    <td>
                        ${model.negotiations.reduce((total, n) => total + n.volume, 0.0)}
                    </td>
                </tfoot>
            </table>       
        `;
    }
}





