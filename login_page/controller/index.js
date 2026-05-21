// Este arquivo roda após o DOM carregar e orquestra a inicialização dos outros arquivos
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura as seções principais da tela
    const secaoLogin = document.querySelector('.div_Login');
    const secaoCadastro = document.querySelector('.div_Cadastro');
    
    // Inicializa a função global/compartilhada do shared.js
    inicializarMascaraSenha();
    
    // Inicializa o módulo de login passando as dependências necessárias
    inicializarLogin(secaoLogin, secaoCadastro);
    
    // Inicializa o módulo de cadastro passando as dependências necessárias
    inicializarCadastro(secaoLogin, secaoCadastro);
});