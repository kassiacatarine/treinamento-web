let id_contact;
let contact_search;

function addEventGetId() {
    $('.card-contact-unique').on('click', function() {
        if (id_contact !== $(this).attr('id')) {
            id_contact = $(this).attr('id');
        }
    });
}

function getContactById() {
    $.ajaxSetup({ async: false });
    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts/${id_contact}`,
        success: getContact,
        error: getContactErro,
    });
    $.ajaxSetup({ async: true });
}

function getContact(data) {
    if (!data) return;
    contact_search = data;
}

function getContactErro(err) {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`);
}