let baseUrl = 'http://localhost:3000/v1';
let contacts = [];


function alertMessage(message) {
    Materialize.toast(message, 5000);
}

// function disabledButton() {
//     if ($("#firstName").val() == "" || $("#lastName").val() == "" || $("#email").val() == "") {
//         $('#btn-salvar').prop('disabled', 'disabled')
//     } else if ($("#firstName").val() != "" && $("#lastName").val() != "" && $("#email").val() != "") {
//         $('#btn-salvar').prop('disabled', false)
//     }
// }




$(document).ready(() => {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('#textarea-comment').trigger('autoresize');
    $('.modal').modal();
    $('.alerta').hide();

    getContacts();
    $('.btn-edit').on('click', function() {
        debugger
        getContacts();
        setValuesForm();
    });
});


function setValuesContact(contact) {

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

function clearForm() {
    $('#form-contact').data("type-form", "post");
    let inputs = $('textarea, input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text' || inputs[i].type == 'email' || inputs[i].type == 'textarea') {
            inputs[i].value = '';
        } else if (inputs[i].type == 'radio') {
            $('#' + inputs[i].id).prop('checked', false);
        }
    }
    Materialize.updateTextFields();
}

function saveForm() {
    $('#form-contact').submit(function(e) {
        e.preventDefault();
        if ($('form').data("type-form") == 'put') {
            let contact = setValuesContact(contact_search);
            putContact(contact);
        } else {
            let contact = new Object();
            contact.info = new Object();

            postContact(setValuesContact(contact));
        }
    });
}