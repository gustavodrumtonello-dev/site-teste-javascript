const secaoLogin = document.querySelector('.div_Login');
const secaoCadastro = document.querySelector('.div_Cadastro');

// Função para mostrar a tela de login e ocultar o cadastro
export function mostrarTelaLogin() {
    secaoLogin.style.display = 'flex';
    secaoCadastro.style.display = 'none';
}

// Inicializa a máscara da senha apenas para os campos dentro do login
export function inicializarMascaraSenhaLogin() {
    const togglePasswordButton = secaoLogin.querySelector('.toggle-password');

    if (togglePasswordButton) {
        togglePasswordButton.addEventListener('click', function () {
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
    }
}
