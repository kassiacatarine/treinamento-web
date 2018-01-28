function getContactById(id) {
    for (const c of contacts) {
        if (c._id !== id) continue;
        return c;
    }
}

function editContact(contact) {

    contact.firstName = $("#first_name").val();
    contact.lastName = $("#last_name").val();
    contact.email = $("#email").val();
    contact.gender = $("input[name='sexo']:checked").val();
    contact.info.avatar = contact.info.avatar === '' || contact.info.avatar == undefined ? "https://api.adorable.io/avatars/285/abott@adorable.png" : contact.info.avatar;
    contact.info.company = $("#empresa").val();
    contact.info.address = $("#endereco").val();
    contact.info.phone = $("#telefone").val();
    contact.info.comments = $("#comments").val();
    contact.isFavorite = contact.isFavorite === '' || contact.isFavorite == undefined ? false : contact.isFavorite;
    contact.info.avatar = contact.info.avatar === '' || contact.isFavorite === undefined ? "https://api.adorable.io/avatars/285/abott@adorable.png" : $('#image').val();

    return contact;
}

function ordernize(contacts) {
    contacts = contacts.sort(function(a, b) {
        return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0);
    });
}

function removeContact(id) {
    contacts = contacts.filter(function(item) {
        return item._id !== id;
    });
}