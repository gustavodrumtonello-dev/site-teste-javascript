import { mostrarTelaLogin, inicializarMascaraSenhaLogin } from '../view/components/login_view.js';
import { mostrarTelaCadastro, inicializarMascaraSenhaCadastro } from '../view/components/cadastro_view.js';
import { fazerLogin } from './login.js';
import { fazerCadastro } from './cadastro.js';

// Colocando as funções no escopo global para o HTML ter acesso
window.mostrarTelaLogin = mostrarTelaLogin;
window.mostrarTelaCadastro = mostrarTelaCadastro;
window.fazerLogin = fazerLogin;
window.fazerCadastro = fazerCadastro;

// Rodamos apenas a configuração das máscaras de senha no carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    inicializarMascaraSenhaLogin();
    inicializarMascaraSenhaCadastro();
});
