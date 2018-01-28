let input = $('#input-search'),
    saida = $('#list-cards-search');

let DURACAO_DIGITACAO = 400,
    digitando = false,
    tempoUltimaDigitacao;


function atualiza() {

    if (!digitando) {
        digitando = true;
        saida.html('procurando...');
    }

    tempoUltimaDigitacao = (new Date()).getTime();

    setTimeout(function() {

        var digitacaoTempo = (new Date()).getTime();
        var diferencaTempo = digitacaoTempo - tempoUltimaDigitacao;

        if (diferencaTempo >= DURACAO_DIGITACAO && digitando) {
            digitando = false;
            saida.html('exibe resultado...');
            let contactsSearch = searchContact(input.val());
            listAllSearch(contactsSearch);
        }

    }, DURACAO_DIGITACAO);

}


function searchContact(word) {
    if (word !== '') {
        return contacts.filter(function(item) {
            return item.firstName.indexOf(word) !== -1 || item.lastName.indexOf(word) !== -1 || item.email.indexOf(word) !== -1;
        });
    }
}


$(document).ready(() => {
    // Evento para o search
    $('.options').click(function() {
        $('#search-field').slideUp("slow");
    });

    // Evento para o search
    $('#search').click(function() {
        $('#search-field').slideDown("slow");
        $('#search-field').removeClass("hide");
    });

    input.on('input', function() {
        atualiza();
    });
});