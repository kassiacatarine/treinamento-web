function postContact(contact) {
    $.ajax({
        method: 'POST',
        url: `${baseUrl}/contacts`,
        data: contact,
    }).done(function() {
        alertMessage('Contato criado com successo!');
        getAllContacts();
    }).fail(function() {
        alertMessage('Erro ao criar contato.');
    });
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
        e.preventDefault();
        if ($('#form-contact').data("type-form") == 'put') {
            putContact(editContact(getContactById($('#form-contact').data('id'))));
        } else if ($('#form-contact').data("type-form") == 'post') {
            let contact = new Object();
            contact.info = new Object();
            postContact(editContact(contact));
        }
        $('#form-contact').data("type-form", "");
        $('#form-contact').data("id", "");
        clearForm();
    });
}


function verifyInputRequire() {
    if ($('#fist_name').val() !== '' && $('#last_name').val() !== '' && $('#email').val() !== '') {
        $('#btn-salvar').removeClass("disabled");
        $('#btn-salvar').addClass('modal-close')
    } else {
        $('#btn-salvar').addClass("disabled");
        $('#btn-salvar').removeClass('modal-close');
    }
}


$(document).ready(() => {
    // Limpa modal e adiciona method post
    $('#new-contact').click(function() {
        clearForm();
    });

    $('.require').on('keyup select change', function() {
        verifyInputRequire();
    });

    $('textarea, input').change(function() {
        if ($('#form-contact').data('type-form') === 'put') {
            verifyInputRequire();
        }
    })

    $('#btn-cancel-form').click(function() {
        clearForm();
        $('#btn-salvar').addClass("disabled");
    });


    saveForm();
});