function getContacts() {
    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts?limit=1000`,
        success: handleGetContacts,
        error: handleError
    });
}

let handleGetContacts = (data) => {
    contacts = data;

    if (!contacts) return false;

    // contacts.sort(function(a, b) {
    //     return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0);
    // });

    listContacts(contacts);
}

function listContacts(contacts) {
    $('#list-cards').html('');
    $('.btn-edit').off("click");
    contacts.forEach((contact) => {
        let html = `
                    <li class="card-contact-unique" id="${contact._id}">
                        <div class="collapsible-header collection-card">
                            <div class="collection col s12 collection-card">
                                <div class="collection-item avatar">
                                    <img src="${contact.info.avatar}" alt="" class="circle">
                                    <span class="title cyan-text text-darken-4" style='font-weight: bold; padding-left: 45px;'>${contact.firstName} ${contact.lastName}</span>
                                    <p>
                                        <i class="tiny material-icons">phone</i>${contact.info.phone} <br>
                                        <i class="tiny material-icons">email</i>${contact.email}
                                    </p>
                                    <a class="secondary-content"><i class="small material-icons favorito">${colorStar(contact)}</i></a>
                                </div>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <a class="btn-floating btn-small waves-effect waves-light secondary-content btn-delete btn modal-trigger" style="margin-left: 10px;" href="#modal-delete-contact">
                                <i class=" small material-icons">delete</i>
                            </a>
                            <a class="btn-floating btn-small waves-effect waves-light secondary-content btn-edit btn modal-trigger" href="#card-form-contact"><i class="small material-icons">edit</i></a>
                            <i class="tiny material-icons tab-bottom">work</i><span class="tab-left">${contact.info.company}</span><br>
                            <i class="tiny material-icons tab-bottom">home</i><span class="tab-left">${contact.info.address}</span><br>
                            <i class="tiny material-icons tab-bottom">comment</i><span class="tab-left">${contact.info.comments}</span><br>
                        </div>
                    </li>
                `;
        $('#list-cards').append(html);
        insertIndex(contact);
        colorStar(contact);
    });
    addEventGetId();
    addEventUpdate();
    addEventFavorite();
}

let handleError = (err) => {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`)
}

function insertIndex(contact) {
    if (checkNewLetter(contact) != true) {
        let htmlIndex = `
                <div class="row index">
                    <div class="col s12 light-blue-text text-accent-4">
                        <h4 class="text-index">${letters[letters.length -1]}</h4>
                        <div class="divider light-blue darken-3"></div>
                    </div>
                </div>
                `;
        $('#' + contact._id).before(htmlIndex);
    }
}


function colorStar(contact) {
    return contact.isFavorite ? 'star' : 'star_border';
}

function addEventFavorite() {
    $('.favorito').on('click', function() {
        starContact();
    })
}