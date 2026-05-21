function inicializarCadastro(secaoLogin, secaoCadastro) {
    const inputNome = document.getElementById('cadNome');
    const inputEmailCadastro = document.getElementById('cadEmail');
    const inputSenhaCadastro = document.getElementById('cadSenha');
    const inputConfirmarSenha = document.getElementById('cadConfirmarSenha');
    const buttonCadastrar = document.getElementById('btnCadastrar');
    const linkVoltar = document.getElementById('linkVoltar');

    // Navegação: Voltar para o login
    linkVoltar.addEventListener('click', (e) => {
        e.preventDefault();
        secaoCadastro.style.display = 'none';
        secaoLogin.style.display = 'flex';
    });

    // Validação de Cadastro (Sua lógica original)
    buttonCadastrar.addEventListener('click', () => {
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
        
        window.location.href = './home_page/view/home_page.html';
        secaoCadastro.style.display = 'none';
        secaoLogin.style.display = 'flex';
        
        // Limpeza dos campos
        inputNome.value = '';
        inputEmailCadastro.value = '';
        inputSenhaCadastro.value = '';
        inputConfirmarSenha.value = '';
        
        // Reseta os olhos das senhas para o padrão oculto (password) ao finalizar
        const camposSenha = secaoCadastro.querySelectorAll('.password-wrapper input');
        camposSenha.forEach(input => input.type = 'password');
        
        const icones = secaoCadastro.querySelectorAll('.toggle-password i');
        icones.forEach(icon => {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        });
    });
}