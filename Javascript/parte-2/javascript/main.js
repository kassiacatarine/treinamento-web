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
    $('.alerta').hide();

    getContacts();

});