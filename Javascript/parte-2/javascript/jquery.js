function alertMessage(message, color) {
    let html = `${message}`
    $('.mensagem').prepend(html);
    $('.card-message').addClass(color);
    $('.alerta').show();
    setTimeout(function() {
        $('.alerta').fadeOut('slow');
    }, 5000);
}

function success(message) {
    alertMessage(message, 'green');
}

function erro(message) {
    alertMessage(message, 'red');
}

$(document).ready(() => {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('#textarea-comment').trigger('autoresize');
    $('.modal').modal();

    $('.fechar').click(function() {
        $('.alerta').fadeOut('slow');
    });

    // $.ajax({
    //     method: 'PUT',
    //     url: `${baseUrl}/contacts/${id}`,
    //     success: updateContact,
    //     error: updateErro,
    // })
});