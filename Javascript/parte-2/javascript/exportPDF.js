function generatePDF() {
    let doc = jsPDF();
    // doc.setFontSize(30);
    // doc.setFont("times");
    // doc.text(105, 30, 'Lista de Contatos', null, null, 'center');

    // doc.setFontSize(16);
    // printContacts(doc);
    // doc.autoPrint();
    // doc.save('contact.pdf');

    // let example = function() {
    //     var doc = new jsPDF();
    //     doc.autoTable(getColumns(), getData(), {
    //         tableWidth: 'wrap',
    //         styles: { cellPadding: 0.5, fontSize: 8 }
    //     });
    //     return doc;
    // };

    var getColumns = function() {
        return [
            { title: "ID", dataKey: "id" },
            { title: "Name", dataKey: "name" },
            { title: "Email", dataKey: "email" },
            { title: "City", dataKey: "city" },
            { title: "Expenses", dataKey: "expenses" }
        ];
    };


    function getData(rowCount) {
        rowCount = rowCount || 4;
        //var sentence = "Minima quis totam nobis nihil et molestiae architecto accusantium qui necessitatibus sit ducimus cupiditate qui ullam et aspernatur esse et dolores ut voluptatem odit quasi ea sit ad sint voluptatem est dignissimos voluptatem vel adipisci facere consequuntur et reprehenderit cum unde debitis ab cumque sint quo ut officiis rerum aut quia quia expedita ut consectetur animiqui voluptas suscipit Monsequatur";
        var sentence = "Shaw";
        var data = [];
        for (var j = 1; j <= rowCount; j++) {
            data.push({
                id: j,
                name: "Shaw",
                email: "Shaw",
                country: "Shaw",
                city: "Shaw",
                expenses: "Shaw",
                text: "Shaw",
                text2: "Shaw"
            });
        }
        return data;
    }

    var columns = ['Nome', 'Sobrenome', 'Email', 'Telefone', 'Endereço', 'Empresa', 'Favorito'];
    var rows = [
        [1, "Shaw", "Tanzania", 1, "Shaw", "Tanzania", 1],
        [2, "Nelson", "Kazakhstan", 1, "Shaw", "Tanzania", 1],
        [3, "Garcia", "Madagascar", 1, "Shaw", "Tanzania", 1],
    ];

    // // Only pt supported (not mm or in)
    // var doc = new jsPDF('p', 'pt');
    // doc.autoTable(getColumns(), getData());
    // doc.save('table.pdf');

    jsPDF.autoTableSetDefaults({
        columnStyles: { id: { fontStyle: 'bold' } },
        headerStyles: { fillColor: 0 },
    });

    // Document defaults
    doc.autoTableSetDefaults({
        headerStyles: { fillColor: [155, 89, 182] }, // Purple
        margin: { top: 25 },
        addPageContent: function(data) {
            doc.setFontSize(20);
            doc.text('Document specific header', data.settings.margin.left, 20);
        }
    });

    doc.autoTable(getColumns(), getData());

    doc.addPage();

    doc.autoTable(getColumns(), getData(), {
        // Will override document and global headerStyles
        tableWidth: 'wrap',
        styles: { cellPadding: 0.5, fontSize: 8 },
        headerStyles: { fillColor: [231, 76, 60] } // Red
    });

    // Reset defaults
    doc.autoTableSetDefaults(null);
    jsPDF.autoTableSetDefaults(null);

    doc.save('table.pdf');
}

// function printContacts(doc) {
//     let line = 50;
//     doc.text(30, line + 10, 'Nome: ' + upperCase(contacts[0].firstName));
//     doc.text(30, line + 20, 'Sobrenome: ' + upperCase(contacts[0].lastName));
// }