$(document).ready(function() {
    // Captura o formulário de login quando for submetido
    $('#btn-login').click(function(event) {
        event.preventDefault();     //Impede o envio padrão do formulário
        
        // Obtém os valores do usuário e senha
        var username = $('#email').val();
        var password = $('#inputPassword').val();

        // teste
        console.log("username: " + username);
        console.log("password: " + password);
        
        // Verifica se o usuário e a senha são válidos
        if (username === 'admin' && password === 'admin') {
            // Redireciona para a página de menus.html
            window.location.href = '/menus.html'
        } else {
            // Exibe um alerta se as credenciais estiverem incorretas
            alert('Credenciais inválidas. Tente novamente!');
        }       
    });
});