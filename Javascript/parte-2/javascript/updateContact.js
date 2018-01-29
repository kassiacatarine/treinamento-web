$(document).on('click', '.favorito', function() {
    putStarContact(setStar(getContactById($(this).data('id'))));
});

$(document).on('click', '.btn-edit', function() {
    $('#form-contact').data('id', $(this).data('id'));
    setValuesForm(getContactById($(this).data('id')));
});



function setValuesForm(contact) {
    $('#form-contact').data("type-form", "put");
    $("#first_name").val(contact.firstName);
    $("#last_name").val(contact.lastName);
    $("#email").val(contact.email);
    $("#empresa").val(contact.info.company);
    $("#endereco").val(contact.info.address);
    $("#telefone").val(contact.info.phone);
    $("#comments").val(contact.info.comments);
    $('#image').val(contact.info.avatar);
    contact.gender == 'f' ? $('#feminino').prop('checked', true) : $('#masculino').prop('checked', true);

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
        getAllContacts();
        debugger
    }).fail(function() {
        alertMessage('Erro ao atualizar contato.');
    });
}


function putStarContact(contact) {
    $.ajax({
        method: 'PUT',
        url: `${baseUrl}/contacts/${contact._id}`,
        data: contact,
    }).done(function() {
        editColorStar(contact);
        listAllFavorite(contacts);
    }).fail(function() {
        alertMessage('Erro ao atualizar o favorito do contato.');
    });
}