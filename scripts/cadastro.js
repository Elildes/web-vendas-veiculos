$(document).ready( () => {

    /**
     * Função cadastrar veículos
     */
    function cadastrar() {

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

        // ...
    };
});
