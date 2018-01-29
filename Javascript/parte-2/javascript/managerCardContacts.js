function insertInformationsCard(contact) {
    let html = `
                <li class="card-contact-unique" data-id="${contact._id}">
                    <div class="collapsible-header collection-card">
                        <div class="collection col s12 collection-card">
                            <div class="collection-item avatar">
                                <img src="${contact.info.avatar}" alt="" class="circle">
                                <span class="title cyan-text text-darken-4" style='font-weight: bold; padding-left: 45px;'>${upperCase(contact.firstName)} ${upperCase(contact.lastName)}</span>
                                <p>
                                    <i class="tiny material-icons">phone</i>${contact.info.phone} <br>
                                    <i class="tiny material-icons">email</i>${contact.email}
                                </p>
                                <a class="secondary-content favorito" data-id="${contact._id}" data-on=""><i class="small material-icons">${colorStar(contact)}</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="collapsible-body">
                        <a class="btn-floating btn-small waves-effect waves-light secondary-content btn-delete btn modal-trigger" style="margin-left: 10px;" href="#modal-delete-contact" data-id="${contact._id}">
                            <i class=" small material-icons">delete</i>
                        </a>
                        <a class="btn-floating btn-small waves-effect waves-light secondary-content btn-edit btn modal-trigger" href="#card-form-contact" data-id="${contact._id}"><i class="small material-icons">edit</i></a>
                        <i class="tiny material-icons tab-bottom">work</i><span class="tab-left">${upperCase(contact.info.company)}</span><br>
                        <i class="tiny material-icons tab-bottom">home</i><span class="tab-left">${upperCase(contact.info.address)}</span><br>
                        <i class="tiny material-icons tab-bottom">comment</i><span class="tab-left">${contact.info.comments}</span><br>
                    </div>
                </li>
            `;

    return html;
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
        return htmlIndex;
    }
}


function colorStar(contact) {
    return contact.isFavorite ? 'star' : 'star_border';
}


function editColorStar(contact) {
    $('.favorito[data-id= ' + contact._id + ']').children('i').html(colorStar(contact));
}


function listCardContacts(contacts) {
    $('#list-cards').html('');
    ordernize(contacts);
    letters = [];
    if (contacts.length == 0) {
        $('#list-cards').append(noContacts('import_contacts', 'Você ainda não possui nenhum contato.'));
    } else {
        contacts.forEach((contact) => {
            $('#list-cards').append(insertInformationsCard(contact));
            let index = insertIndex(contact);
            if (!!index) {
                $('#list-cards>li[data-id= ' + contact._id + ']').before(index);
            }
        });
    }
}


function listAllFavorite(contacts) {
    let contactsFavorites;
    contactsFavorites = contacts.filter(function(item) {
        return item.isFavorite === true;
    });
    $('#list-cards-favorite').html('');
    ordernize(contactsFavorites);
    letters = [];
    if (contacts.length == 0) {
        $('#list-cards-favorite').append(noContacts('import_contacts', 'Você ainda não possui nenhum contato favorito.'));
    } else {
        contactsFavorites.forEach((contact) => {
            $('#list-cards-favorite').append(insertInformationsCard(contact));
            let index = insertIndex(contact);
            if (!!index) {
                $('#list-cards-favorite>li[data-id= ' + contact._id + ']').before(index);
            }
        });
    }
}

function listAllSearch(contacts) {
    let contactsSearch;
    contactsSearch = contacts.filter(function(item) {
        return item.isFavorite === true;
    });
    $('#list-cards-search').html('');
    ordernize(contactsSearch);
    letters = [];
    if (contacts.length == 0) {
        $('#list-cards-search').append(noContacts('person_pin', 'Nenhum contato encontrado na pesquisa.'));
    } else {
        contactsSearch.forEach((contact) => {
            $('#list-cards-search').append(insertInformationsCard(contact));
        });
    }
}


function noContacts(icon, message) {
    let html = `<div class="center-align blue-grey-text text-darken-2" style="margin: 200px 0;">
                    <i class="large material-icons" id="img-not-found">${icon}</i>
                    <h6>${message}</h6>
                </div>
                `;
    return html;
}