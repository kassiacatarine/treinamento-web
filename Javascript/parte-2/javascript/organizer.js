let letters = [];


function alertMessage(message) {
    Materialize.toast(message, 5000);
}


function checkNewLetter(contact) {

    let letter = contact.firstName.charAt(0).toUpperCase();
    if (letters.indexOf(letter) === -1) {
        letters.push(letter);
        return false;
    }
    return true;
}

function upperCase(atributo) {
    if (!!atributo) {
        return atributo.replace(/(^|\s|$)(?!de|do|d$)(.)/g, (geral, match1, match2) => match1 + match2.toUpperCase());
    }
    return '';
}


function sanitizer(c) {
    let contact = new Object();
    contact.info = new Object();

    contact.info.avatar = c.info.avatar;
    contact.info.company = valideAtributo(c.info.company);
    contact.info.address = valideAtributo(c.info.address);
    contact.info.phone = valideAtributo(c.info.phone);
    contact.info.comments = valideAtributo(c.info.comments);
    contact._id = c._id;
    contact.firstName = valideAtributo(c.firstName);
    contact.lastName = valideAtributo(c.lastName);
    contact.email = valideAtributo(c.email);
    contact.gender = valideAtributo(c.gender);
    contact.isFavorite = c.isFavorite === false || c.isFavorite === 'false' ? false : true;

    return contact;
}


function valideAtributo(atributo) {
    if (!!atributo) {
        return atributo.toLowerCase();
    } else {
        return '';
    }
}