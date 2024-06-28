$(document).ready( () => {
    // Recuperar a String JSON do Local Storage e converter de volta para um vetor
    const veiculos = JSON.parse(localStorage.getItem('veiculos'));

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
    
})