let getContact = (data) => {
    let contact = data;

    if (!contact) return false;
    let html = `
                
                `
    $('').prepend(html);
}

let getContactErro = (err) => {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`)
}

$(document).ready(() => {
    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts/${id}`,
        success: getContact,
        error: getContactErro,
    })
});