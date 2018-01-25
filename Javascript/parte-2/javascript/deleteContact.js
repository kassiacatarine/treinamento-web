function deleteContact() {
    $.ajax({
        method: 'DELETE',
        url: `${baseUrl}/contacts/${id_contact}`,
    }).done(function() {
        alertMessage('Excluído com successo!');
    }).fail(function() {
        alertMessage('Erro ao excluir contato.');
    }).always(function() {
        getContacts();
    });
}

function addEventDelete() {
    $('.btn-delete').on('click', function() {
        $('#comfirm-delete').click(function() {
            deleteContact();
            getContacts();
        });
    });
}