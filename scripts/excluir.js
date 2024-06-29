$(document).ready(() => {

    // Evento para o botão excluir veículos
    $('#btn-excluir').on('click', excluir);

    // Recuperar a String JSON do Local Storage e converter de volta para um vetor
    const veiculos = JSON.parse(localStorage.getItem('veiculos'));

    /**
     * Chama a função para exibir os veículos
     */ 
    exibirVeiculos();

    /**
     * Função os veículos
     */
    function exibirVeiculos() {
        const tabelaBody = $("#codes-table tbody");
        tabelaBody.empty(); // Limpa a tabela antes de inserir os dados

        if (veiculos && veiculos.length > 0) {
            veiculos.forEach((veiculo, index) => {
                tabelaBody.append(`
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${veiculo.marca}</td>
                        <td>${veiculo.modelo}</td>
                        <td>${veiculo.anoFabricacao}</td>
                        <td>${veiculo.cor}</td>
                        <td>${veiculo.tipo}</td>
                        <td>${veiculo.kilometragem}</td>
                        <td>${veiculo.numeroPortas}</td>
                        <td>${veiculo.preco}</td>
                        <td>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault"></label>
                            </div>
                        </td>
                    </tr>
                `);
            });
        } else {
            // Caso não haja veículos cadastrados
            //$("#card-veiculos").html("");       // limpa o card de veículo selecionado
            
            // Ocultar o card
            $("#card-veiculos").hide();
            $("#mensagem-veiculos").text("Nenhum veículo cadastrado!");
        }
    }

    /**
     * Filtrar/exibir as linhas da tabela por string digitada
     */
    $("#input-form").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#codes-table tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    /**
     * Código para permitir apenas um 'form-check' selecionado de cada vez
     */
    $(".form-check-input").on('change', function () {
        if ($(this).prop('checked')) {
            $(".form-check-input").not(this).prop('checked', false);
            const index = $(this).closest('tr').index();
            const veiculoSelecionado = veiculos[index];
            $("#marca-card").text(veiculoSelecionado.marca);
            $("#modelo-card").text(veiculoSelecionado.modelo);
            $("#ano-card").text(veiculoSelecionado.anoFabricacao);
            $("#cor-card").text(veiculoSelecionado.cor);
            $("#tipo-card").text(veiculoSelecionado.tipo);
            $("#km-card").text(veiculoSelecionado.kilometragem);
            $("#portas-card").text(veiculoSelecionado.numeroPortas);
            $("#preco-card").text(veiculoSelecionado.preco);            
        }
    });

    /**
     * Função excluir veículo selecionado no checkbox
     */
    $('#btn-excluir').click()
    
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