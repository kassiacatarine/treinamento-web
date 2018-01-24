let query = 'firstName=Cecília'

let searchContact = (data) => {
    let contact = data;

    if (!contact) return false;
    // let html = `

    //             `
    // $('').prepend(html);

    console.log("ali" + contact);
}

let searchContactErro = (err) => {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`)
}

$(document).ready(() => {
    console.log('aqui');

    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts${query}`,
        success: searchContact,
        error: searchContactErro,
    })
});