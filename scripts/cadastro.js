$(document).ready( () => {
    // vetor de veículos
    const veiculos = [];

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

        // Armazena veículo no vetor
        veiculos.push(new Carro(marca, modelo, anoFabricacao, cor, tipo, kilometragem, numeroPortas, preco));

        // Enviar dados cadastrados para a página buscar.html
        //... codigo aqui ?? ...
        
        // Teste: Cadastra veículos
        console.log('Teste: Função cadastrar ok!');

        // Limpa campos de entrada do formulário
        $('#form-cadastro')[0].reset();

        // Teste:
        testePrintVeiculos();

        alert('Veículo cadastrado com sucesso!');        

    }
    
    // Teste: print vetor
    function testePrintVeiculos () {
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

});
