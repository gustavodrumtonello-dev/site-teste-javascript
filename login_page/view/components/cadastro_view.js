const secaoLogin = document.querySelector('.div_Login');
const secaoCadastro = document.querySelector('.div_Cadastro');

// Função para mostrar a tela de cadastro e ocultar o login
export function mostrarTelaCadastro() {
    secaoLogin.style.display = 'none';
    secaoCadastro.style.display = 'flex';
}

// Limpa todos os inputs e restaura os olhinhos de senha para o padrão oculto
export function limparEResetarCadastro() {
    document.getElementById('cadNome').value = '';
    document.getElementById('cadEmail').value = '';
    document.getElementById('cadSenha').value = '';
    document.getElementById('cadConfirmarSenha').value = '';

    const camposSenha = secaoCadastro.querySelectorAll('.password-wrapper input');
    camposSenha.forEach(input => input.type = 'password');

    const icones = secaoCadastro.querySelectorAll('.toggle-password i');
    icones.forEach(icon => {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    });
}

// Inicializa a máscara de senha para todos os campos de senha dentro do cadastro
export function inicializarMascaraSenhaCadastro() {
    const togglePasswordButtons = secaoCadastro.querySelectorAll('.toggle-password');

    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function () {
            const passwordInput = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
}
