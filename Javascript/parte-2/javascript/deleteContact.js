function deleteContact() {
    $.ajax({
        method: 'DELETE',
        url: `${baseUrl}/contacts/${id}`,
        success: success('Contato excluído com sucesso!'),
        error: erro('Erro ao excluir contato.'),
    })
}

$(document).ready(() => function() {
    $('#btn-delete').click(function() {

    });
});