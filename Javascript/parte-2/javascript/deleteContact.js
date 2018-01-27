function addEventDelete() {
    $('.btn-delete').on('click', function() {
        $('#comfirm-delete').data('id', $(this).data('id'));
    });
}


function deleteContact(id) {
    $.ajax({
        method: 'DELETE',
        url: `${baseUrl}/contacts/${id}`,
    }).done(function() {
        removeContact(id);
        alertMessage('Contato excluído com successo!');
        listContacts(contacts);
    }).fail(function() {
        alertMessage('Erro ao excluir contato.');
    }).always(function() {
        $('#confirm-delete').data('id', '');
    });
}