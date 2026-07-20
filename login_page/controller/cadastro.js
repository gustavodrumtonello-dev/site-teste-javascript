import { mostrarTelaLogin } from "../view/components/login_view.js";
import { limparEResetarCadastro } from "../view/components/cadastro_view.js";

export function fazerCadastro() {
    const inputNome = document.getElementById('cadNome');
    const inputEmailCadastro = document.getElementById('cadEmail');
    const inputSenhaCadastro = document.getElementById('cadSenha');
    const inputConfirmarSenha = document.getElementById('cadConfirmarSenha');

    if (!inputNome.value || !inputEmailCadastro.value || !inputSenhaCadastro.value || !inputConfirmarSenha.value) {
        alert('Preencha todos os campos!');
        return;
    }

    if (inputSenhaCadastro.value !== inputConfirmarSenha.value) {
        alert('As senhas não coincidem!');
        return;
    }

    if (inputSenhaCadastro.value.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres!');
        return;
    }

    // Cadastro simulado com sucesso
    window.location.href = './home_page/view/home_page.html';

    limparEResetarCadastro();
    mostrarTelaLogin();
}
