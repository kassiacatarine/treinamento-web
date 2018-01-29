let baseUrl = 'http://localhost:3000/v1';


$(document).ready(() => {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('#textarea-comment').trigger('autoresize');
    $('.modal').modal();
    $('select').material_select();
    $(".tabs>li>a").css("color", '#0d47a1');
    $(".tabs>.indicator").css("background-color", '#03a9f4');

    getAllContacts();

    $('#home').click(function() {
        window.location.reload(true);
    })
});