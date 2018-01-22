let baseUrl = 'http://localhost:3000/v1';
let contacts = [];

function handleEvent(event) {
    console.log(`text: ${$(this).text()}`)
    console.log(`val: ${$(this).val()}`)
    console.log(`html: ${$(this).html()}`)
}

let handleGetContacts = (data) => {
    contacts = data;

    if (!contacts) return false;

    contacts.forEach((contact) => {
        let html = `
                    <li class="collection-item avatar">
                        <img src="${contact.info.avatar}" alt="" class="circle">
                        <span class="title">${contact.firstName} ${contact.lastName}</span>
                        <p>${contact.info.phone} <br>
                            ${contact.email}
                        </p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                `
        $('.collection').prepend(html)
    })

    setTimeout(function(){$('.circular-spinner').hide()},500)    
}

let handleError = (err) => {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`)
    $('.circular-spinner').hide()
}

$(document).ready(() => {
    $(".button-collapse").sideNav();

    
    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts`,
        success: handleGetContacts,
        error: handleError
    })
});