function deleteContact(id) {
    debugger
    $.ajax({
        method: 'DELETE',
        url: `${baseUrl}/contacts/${id}`,
    }).done(function() {
        removeContact(id);
        alertMessage('Contato excluído com successo!');
        listCardContacts(contacts);
        listAllFavorite(contacts);
        atualiza();
    }).fail(function() {
        alertMessage('Erro ao excluir contato.');
    }).always(function() {
        $('#confirm-delete').data('id', '');
    });
}

$(document).on('click', '.btn-delete', function() {
    $('#comfirm-delete').data('id', $(this).data('id'));
});

$(document).ready(() => {
    $('#comfirm-delete').on('click', function() {
        deleteContact($(this).data('id'));
    });
});