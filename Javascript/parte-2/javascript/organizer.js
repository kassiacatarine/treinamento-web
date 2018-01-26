let letters = [];

function checkNewLetter(contact) {

    let letter = contact.firstName.charAt(0).toUpperCase();
    if (letters.indexOf(letter) === -1) {
        letters.push(letter);
        return false;
    }
    return true;
}