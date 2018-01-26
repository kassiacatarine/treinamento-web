let baseUrl = 'http://localhost:3000/v1';
let contacts = [];


function alertMessage(message) {
    Materialize.toast(message, 5000);
}

$(document).ready(() => {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('#textarea-comment').trigger('autoresize');
    $('.modal').modal();
    $('select').material_select();
    $(".tabs>li>a").css("color", 'teal');
    $(".tabs>.indicator").css("background-color", 'teal');

    getContacts();

    $('.options').click(function() {
        $('#search-field').slideUp("slow");
        $('#drop-type').slideUp('slow');
    });

    $('#search').click(function() {
        $('#search-field').slideDown("slow");
        $('#drop-type').slideDown("fast");
        $('#search-field').removeClass("hide");
        $('#drop-type').removeClass("hide");
    });

    $('#input-search').click(function() {
        searchContact();
    });

    $('#type-search').click(function() {

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

}

function saveForm() {
    $('#form-contact').submit(function(e) {
        console.log(e);

        e.preventDefault();
        console.log(e);

        if ($('form').data("type-form") == 'put') {
            putContact(setValuesContact(contact_search));
        } else if ($('form').data("type-form") == 'post') {
            let contact = new Object();
            contact.info = new Object();

            postContact(setValuesContact(contact));
        }
        $('form').data("type-form", "");
    });
}


function searchContact() {
    let word = $('#input-search').val();
    let type = $('#type-search option:selected').val() != "" ? $('#type-search option:selected').val() : alertMessage('Tipo da pesquisa vazio, selecione algum tipo.')
    word != "" ? search(type, word) : alertMessage('Pesquisa vazia, digite algo.');
}

function search(type, word) {
    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts?${type}=${word}`,
        success: getContact,
    }).fail(function() {
        alertMessage('Nenhum contato encontrado.');
    })
}