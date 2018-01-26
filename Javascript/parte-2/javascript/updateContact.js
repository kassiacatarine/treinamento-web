function addEventUpdate() {
    $('.btn-edit').on('click', setValuesForm);
}

function setValuesForm() {
    getContactById();
    let contact = contact_search;

    $('form').data("type-form", "put");
    $("#first_name").attr('value', contact.firstName);
    $("#last_name").attr('value', contact.lastName);
    $("#email").attr('value', contact.email);
    $("#empresa").attr('value', contact.info.company);
    $("#endereco").attr('value', contact.info.address);
    $("#telefone").attr('value', contact.info.phone);
    $("#comments").val(contact.info.comments);
    contact.gender == 'f' ? $('#feminino').prop('checked', true) : $('#masculino').prop('checked', true);
    // contact.info.avatar = "https://api.adorable.io/avatars/285/abott@adorable.png";
    // contact.isFavorite = false;

    Materialize.updateTextFields();
}

function putContact(contact) {

    $.ajax({
        method: 'PUT',
        url: `${baseUrl}/contacts/${contact._id}`,
        data: contact,
        success: function() {
            alertMessage('Contato atualizado com sucesso!');
            getContacts();

        },
        erro: function() { alertMessage('Erro ao atualizar contato.'); },
    });
}


function starContact(contact) {
    $.ajax({
        method: 'PUT',
        url: `${baseUrl}/contacts/${id_contact}`,
        data: contact,
        success: colorstar,
        erro: function() { alertMessage('Erro ao atualizar o fovorito do contato.'); },
    });
}