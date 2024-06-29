$(document).ready(() => {
    // Recuperar a String JSON do Local Storage e converter de volta para um vetor
    const veiculos = JSON.parse(localStorage.getItem('veiculos'));

    // Inserir dados dos veículos na tabela
    $("#dados-veiculos").text(veiculos[0].marca);    

    // Código para filtrar/exibir as linhas da tabela por string digitada
    $("#input-form").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#codes-table tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // Código para permitir apenas um 'form-check' selecionado de cada vez
    $(".form-check-input").on('change', function () {
        $(".form-check-input").not(this).prop('checked', false);
    });

    // Teste: print vetor
    testePrintVeiculos(veiculos);
    function testePrintVeiculos(veiculos) {
        console.log("Teste: vetor veículos: ");
        for (let index = 0; index < veiculos.length; index++) {
            console.log(veiculos[index].marca);
            console.log(veiculos[index].modelo);
            console.log(veiculos[index].anoFabricacao);
            console.log(veiculos[index].cor);
            console.log(veiculos[index].tipo);
            console.log(veiculos[index].kilometragem);
            console.log(veiculos[index].numeroPortas);
            console.log(veiculos[index].preco);
        }
    }

})