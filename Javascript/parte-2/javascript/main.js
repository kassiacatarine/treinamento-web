let baseUrl = 'http://localhost:3000/v1';


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

    // $('#comfirm-delete').on('click', function() {
    //     deleteContact($(this).data('id'));
    // });

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

    $('#new-contact').click(function() {
        clearForm();
    });
    getAllContacts();
    saveForm();
});



function clearForm() {
    $('#form-contact').data("type-form", "post");
    debugger
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
        e.preventDefault();
        debugger
        if ($('#form-contact').data("type-form") == 'put') {
            putContact(editContact(getContactById($('form').data('id'))));
        } else if ($('#form-contact').data("type-form") == 'post') {
            let contact = new Object();
            contact.info = new Object();
            debugger
            postContact(editContact(contact));
        }
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