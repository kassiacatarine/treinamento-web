function createContact() {
    let contact = new Object();
    contact.info = new Object();

    contact.firstName = $("#first_name").val();
    contact.lastName = $("#last_name").val();
    contact.email = $("#email").val();
    contact.gender = $("input[name='sexo']:checked").val();
    contact.info.avatar = "https://api.adorable.io/avatars/285/abott@adorable.png";
    contact.info.company = $("#empresa").val();
    contact.info.address = $("#endereco").val();
    contact.info.phone = $("#telefone").val();
    contact.info.comments = $("#comments").val();
    contact.isFavorite = false;

    return contact;
}


function postContact() {
    let contact = createContact();

    $.ajax({
        method: 'POST',
        url: `${baseUrl}/contacts`,
        data: contact,
    }).done(function() {
        alertMessage('Criado com successo!');
    }).fail(function() {
        alertMessage('Erro ao criar contato.');
    }).always(function() {
        getContacts();
    });
}


$(document).ready(() => {
    // $('#form-contact').submit(function(e) {
    //     e.preventDefault();
    //     postContact();
    // });
});