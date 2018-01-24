let baseUrl = 'http://localhost:3000/v1';
let contacts = [];

function getContacts() {
    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts`,
        success: handleGetContacts,
        error: handleError
    })
}

let handleGetContacts = (data) => {
    contacts = data;

    if (!contacts) return false;

    contacts.forEach((contact) => {
        let html = `
                    <li class="card-contact-unique">
                        <div class="collapsible-header collection-card">
                            <div class="collection col s12 collection-card">
                                <div class="collection-item avatar">
                                    <img src="${contact.info.avatar}" alt="" class="circle">
                                    <span class="title cyan-text text-darken-4" style='font-weight: bold; padding-left: 45px;'>${contact.firstName} ${contact.lastName}</span>
                                    <p>
                                        <i class="tiny material-icons">phone</i>${contact.info.phone} <br>
                                        <i class="tiny material-icons">email</i>${contact.email}
                                    </p>
                                    <a class="secondary-content"><i class="material-icons icon-star">grade</i></a>
                                </div>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <ul id="dropdown" class="dropdown-content">
                                <li><a href="#">Editar</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Excluir</a></li>
                            </ul>
                            <a class="btn-floating btn-small waves-effect waves-light secondary-content" style="margin-left: 10px;" id="btn-delete"><i class=" small material-icons">delete</i></a>
                            <a class="btn-floating btn-small waves-effect waves-light secondary-content"><i class=" small material-icons">edit</i></a>
                            <i class="tiny material-icons tab-bottom">work</i><span class="tab-left">${contact.info.company}</span><br>
                            <i class="tiny material-icons tab-bottom">home</i><span class="tab-left">${contact.info.address}</span><br>
                            <i class="tiny material-icons tab-bottom">comment</i><span class="tab-left">${contact.info.comments}</span><br>
                        </div>
                    </li>
                `
        $('#list-cards').prepend(html);

        // let htmlMenu = `
        //                 <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Editar</a><br>
        //                 <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Excluir</a>
        //                 `
        // $('#menu-cards').prepend(htmlMenu);
    })

    setTimeout(function() { $('.circular-spinner').hide() }, 500)
}

let handleError = (err) => {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`)
    $('.circular-spinner').hide()
}

$(document).ready(() => {
    getContacts();
})