let query = 'firstName=Cecília'

let searchContact = (data) => {
    let contact = data;

    if (!contact) return false;
    // let html = `

    //             `
    // $('').prepend(html);

}

let searchContactErro = (err) => {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`)
}

$(document).ready(() => {

    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts${query}`,
        success: searchContact,
        error: searchContactErro,
    })
});