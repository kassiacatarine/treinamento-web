function addEventUpdate() {
    $('.btn-edit').on('click', function() {
        setValuesForm();
        $('#form-contact').submit(function(e) {
            e.preventDefault();
            updateContact();
        });
    });
}

function setValuesForm() {
    getContactById();


    $("#last_name").attr('value', contact_search.lastName);
    $("#email").attr('value', contact_search.email);
    $("#empresa").attr('value', contact_search.info.company);
    $("#endereco").attr('value', contact_search.info.address);
    $("#telefone").attr('value', contact_search.info.phone);
    $("#comments").attr('value', contact_search.info.comments);

    // contact.gender = $("input[name='sexo']:checked").val();
    // contact.info.avatar = "https://api.adorable.io/avatars/285/abott@adorable.png";
    // contact.isFavorite = false;

    Materialize.updateTextFields();
}


function updateContact() {
    $.ajax({
        method: 'PUT',
        url: `${baseUrl}/contacts/${id_contact}`,
        success: updateContact,
        error: updateErro,
    }).done(function() {
        alertMessage('Contato atualizado com sucesso!');
    }).fail(function() {
        alertMessage('Erro ao atualizar contato!');
    }).always(function() {
        getContacts();
    })
}