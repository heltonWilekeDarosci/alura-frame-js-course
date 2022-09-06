class MessageView extends View {

    _template(model) {
        return model.text ? `<p class="alert alert-info text-center">${model.text}</p>` : `<p></p>`;
    }
}