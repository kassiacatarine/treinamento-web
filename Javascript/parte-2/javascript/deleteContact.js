function deleteContact() {
    $.ajax({
        method: 'DELETE',
        url: `${baseUrl}/contacts/${id_contact}`,
        success: function() {
            alertMessage('Excluído com successo!');
            getContacts();
        },
        erro: function() { alertMessage('Erro ao excluir contato.') },
    });
    // }).done(function() {

    //     getContacts();
    // }).fail(function() {
    //     alertMessage('Erro ao excluir contato.');
    // });
}

// function addEventDelete() {
//     console.log(this);
//     $('#comfirm-delete').click(function(e) {
//         // console.log(id_contact);
//         deleteContact(id_contact);
//         console.log(e);
//     });
// }