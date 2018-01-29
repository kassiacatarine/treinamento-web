function generatePDF() {
    let doc = new jsPDF('p', 'pt');
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.setFontStyle('bold');
    let data = getData(100);
    let totalPagesExp = "{total_pages_count_string}";

    let pageContent = function(data) {
        // HEADER
        doc.setFontSize(20);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        doc.text(300, 50, 'Lista de Contatos', null, null, 'center');

        // FOOTER
        var str = "Página " + data.pageCount;
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === 'function') {
            str = str + " de " + totalPagesExp;
        }
        doc.setFontSize(10);
        doc.text(str, data.settings.margin.left, doc.internal.pageSize.height - 10);
    };




    let getColumns = function() {
        return [
            { title: "Nome", dataKey: "firstName" },
            { title: "Sobrenome", dataKey: "lastName" },
            { title: "Telefone", dataKey: "phone" },
            { title: "Email", dataKey: "email" },
            { title: "Endereço", dataKey: "address" },
        ];
    };


    doc.autoTable(getColumns(), data, {
        margin: { top: 80 },
        addPageContent: pageContent,
        theme: 'grid',
        startY: 80,
        drawRow: function(row, data) {
            // Colspan
            doc.setFontStyle('bold');
            doc.setFontSize(10);
        },
        styles: { overflow: 'linebreak', columnWidth: 'wrap' },
        columnStyles: { text: { columnWidth: 'auto' } }
    });

    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }

    doc.save('ListaDeContatos.pdf');
}

function getData(rowCount) {
    rowCount = rowCount || 4;
    var data = [];
    contacts.forEach(c => {
        data.push({
            firstName: upperCase(c.firstName),
            lastName: upperCase(c.lastName),
            phone: c.info.phone,
            email: upperCase(c.email),
            address: c.info.address,
            company: upperCase(c.info.company),
            isFavorite: c.isFavorite,
        });
    });

    return data;
}