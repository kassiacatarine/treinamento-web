function addEventUpdate() {
    $('.btn-edit').on('click', function() {
        $('form').data('id', $(this).data('id'));
        setValuesForm(getContactById($('form').data('id')));
    });
    $('.favorito').on('click', function() {
        putStarContact(setStar(getContactById($(this).data('id'))));
    });
}

function setValuesForm(contact) {

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


function setStar(contact) {
    contact.isFavorite = contact.isFavorite ? false : true;

    return contact;
}

function putContact(contact) {
    $.ajax({
        method: 'PUT',
        url: `${baseUrl}/contacts/${contact._id}`,
        data: contact,
    }).done(function() {
        alertMessage('Contato atualizado com sucesso!');
        listContacts(contacts);
    }).fail(function() {
        alertMessage('Erro ao atualizar contato.');
    }).always(function() {
        $('form').data('id', '');
    });
}


function putStarContact(contact) {
    $.ajax({
        method: 'PUT',
        url: `${baseUrl}/contacts/${contact._id}`,
        data: contact,
    }).done(function() {
        editColorStar(contact);
    }).fail(function() {
        alertMessage('Erro ao atualizar o favorito do contato.');
    });
}