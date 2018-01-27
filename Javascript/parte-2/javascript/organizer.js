let letters = [];

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

    contact._id = c._id;
    contact.firstName = valideAtributo(c.firstName);
    contact.lastName = valideAtributo(c.lastName);
    contact.email = valideAtributo(c.email);
    contact.gender = valideAtributo(c.gender);

    if (!!c.isFavorite) contact.isFavorite = c.isFavorite === false || c.isFavorite === 'false' ? false : true;

    contact.info.avatar = valideAtributo(c.info.avatar);
    contact.info.company = valideAtributo(c.info.company);
    contact.info.address = valideAtributo(contact.info.address);
    contact.info.phone = valideAtributo(c.info.phone);
    contact.info.comments = valideAtributo(c.info.comments);

    return contact;
}

function valideAtributo(atributo) {
    if (!!atributo) {
        return atributo.toLowerCase();
    } else {
        return '';
    }
}