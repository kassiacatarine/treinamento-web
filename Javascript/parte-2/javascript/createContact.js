function successCreate() {
    alertMessage('Criado com successo!', 'green');
}

function createErro() {
    alertMessage('Erro ao criar contato.', 'red');
}


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


function postContact(params) {
    let contact = createContact();

    $.ajax({
        method: 'POST',
        url: `${baseUrl}/contacts`,
        data: contact,
        success: successCreate,
        error: createErro,
    })
}


$(document).ready(() => {
    // CARD NEW CONTACT
    $("#btn-cancelar").click(function() {
        $("#card-new-contact").hide();
    });

    $('#form-contact').submit(function(e) {
        e.preventDefault();
        postContact();
        $("#card-new-contact").hide();
        getContacts();
    });
});