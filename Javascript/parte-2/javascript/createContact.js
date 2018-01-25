function postContact(contact) {
    $.ajax({
        method: 'POST',
        url: `${baseUrl}/contacts`,
        data: contact,
    }).done(function() {
        alertMessage('Criado com successo!');
        getContacts();
    }).fail(function() {
        alertMessage('Erro ao criar contato.');
    });
}