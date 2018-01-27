function postContact(contact) {
    $.ajax({
        method: 'POST',
        url: `${baseUrl}/contacts`,
        data: contact,
    }).done(function() {
        alertMessage('Contato criado com successo!');
        contacts.push(contact);
        listContacts(contacts);
    }).fail(function() {
        alertMessage('Erro ao criar contato.');
    }).always(function() {
        $('#form-contact').data("type-form", "");
    })
}