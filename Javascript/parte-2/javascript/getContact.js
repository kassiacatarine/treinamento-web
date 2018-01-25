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
    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts/${id_contact}`,
        success: getContact,
        error: getContactErro,
    });
}

function getContact(data) {
    if (!data) return;
    contact_search = data;
}

function getContactErro(err) {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`);
}

// let getContact = (data) => {
//     let contact = data;

//     if (!contact) return false;
//     let html = `

//                 `
//     $('').prepend(html);
// }

// let getContactErro = (err) => {
//     console.log(`Erro ao buscar contatos --> status: ${err.status}`)
// }

// $(document).ready(() => {
//     $.ajax({
//         method: 'GET',
//         url: `${baseUrl}/contacts/`,
//         success: getContact,
//         error: getContactErro,
//     })

//     console.log(addEventGetId());
// });