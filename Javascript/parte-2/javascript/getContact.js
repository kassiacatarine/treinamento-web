let contacts = [];

function getAllContacts() {
    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts?limit=100`,
        success: successMessage,
        error: errorMessage,
    });
}

function successMessage(data) {
    console.log('Contatos encontrados com sucesso --> length: ' + data.length);
    if (!data) return;

    contacts = [];
    data.forEach(c => {
        contacts.push(sanitizer(c));
    });
    listCardContacts(contacts);
    listAllFavorite(contacts);
    atualiza();
}


function errorMessage(err) {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`);
}


// let id_contact;
// let contact_search;

// function addEventGetId() {
//     $('.card-contact-unique').on('click', function() {
//         if (id_contact !== $(this).attr('id')) {
//             id_contact = $(this).attr('id');
//         }
//     });
// }

// function getContactById() {
//     $.ajaxSetup({ async: false });
//     $.ajax({
//         method: 'GET',
//         url: `${baseUrl}/contacts/${id_contact}`,
//         success: getContact,
//         error: getContactErro,
//     });
//     $.ajaxSetup({ async: true });
// }

// function getContact(data) {
//     if (!data) return;
//     contact_search = data;
//     debugger
// }

// function getContactErro(err) {
//     console.log(`Erro ao buscar contatos --> status: ${err.status}`);
// }