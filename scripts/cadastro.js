$(document).ready( () => {

    // Evento para o botão "Cadastrar"
    $('#btn-cadastrar').on('click', cadastrar);

    /**
     * Classes Veículo e Carro
     */
    class Veiculo {
        constructor(marca, modelo, anoFabricacao, cor, tipo, kilometragem, numeroPortas, preco) {
            this.marca = marca;
            this.modelo = modelo;
            this.anoFabricacao = anoFabricacao;
            this.cor = cor;
            this.tipo = tipo;
            this.kilometragem = kilometragem;
            this.numeroPortas = numeroPortas;
            this.preco = preco;    
        }
    }

    class Carro extends Veiculo {
        constructor(marca, modelo, anoFabricacao, cor, tipo, kilometragem, numeroPortas, preco) {
            super(marca, modelo, anoFabricacao, cor, tipo, kilometragem, numeroPortas, preco);             
        }
    }

    /**
     * Função cadastrar veículos
     */
    function cadastrar () {

        // obtém valores do fomrulário
        var marca = $('#marca').val();
        var modelo = $('#modelo').val();
        var anoFabricacao = $('#ano').val();
        var cor = $('#cor').val();
        var tipo = $('#tipo').val();
        var kilometragem = $('#kilometragem').val();
        var numeroPortas = $('#portas').val();
        var preco = $('#preco').val();

        // Alerta se algum campo estiver vazio
        if (marca == '' || modelo == '' || anoFabricacao == '' || cor == '' || tipo == '' || kilometragem == '' || numeroPortas == '' || preco == '') {
            alert("Preencha todos os campos do formulário!");
            return;
        }

        // Cria um objeto veículo
        const novoVeiculo = new Carro(marca, modelo, anoFabricacao, cor, tipo, kilometragem, numeroPortas, preco);

        // Obtém veículos existentes do localStorage (se houver)
        const veiculosExistentes = JSON.parse(localStorage.getItem('veiculos') || '[]');

        // Adiciona o novo veículo ao vetor de veículos
        veiculosExistentes.push(novoVeiculo);

        // Salva o vetor atualizado no localStorage
        localStorage.setItem('veiculos', JSON.stringify(veiculosExistentes));

        // Teste: Recuperar a String JSON do Local Storage
        // const meuVetor = JSON.parse(localStorage.getItem('veiculos'));
        // console.log('Teste vetorStorage: ' + meuVetor[0].marca);
        
        // Teste: Cadastra veículos
        console.log('Teste: Função cadastrar ok!');

        // Teste:
        testePrintVeiculos(veiculosExistentes);

        alert('Veículo cadastrado com sucesso!');
        
        // Limpa campos de entrada do formulário
        $('#form-cadastro')[0].reset();

    }
    
    // Teste: print vetor
    function testePrintVeiculos (veiculosExistentes) {
        console.log("Teste: vetor veículos: ");
        for (let index = 0; index < veiculosExistentes.length; index++) {
            console.log(veiculosExistentes[index].marca);
            console.log(veiculosExistentes[index].modelo);
            console.log(veiculosExistentes[index].anoFabricacao);
            console.log(veiculosExistentes[index].cor);
            console.log(veiculosExistentes[index].tipo);
            console.log(veiculosExistentes[index].kilometragem);
            console.log(veiculosExistentes[index].numeroPortas);
            console.log(veiculosExistentes[index].preco);
        }
    }

});
