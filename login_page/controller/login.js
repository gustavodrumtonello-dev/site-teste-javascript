function inicializarLogin(secaoLogin, secaoCadastro) {
    const inputEmail = document.getElementById('loginEmail');
    const inputSenha = document.getElementById('loginPassword');
    const buttonLogin = document.getElementById('btnLogin');
    const linkCadastro = document.getElementById('linkCadastro');

    // Navegação: Ir para o cadastro
    linkCadastro.addEventListener('click', (e) => {
        e.preventDefault();
        secaoLogin.style.display = 'none';
        secaoCadastro.style.display = 'flex';
    });

    // Validação do Login (Sua lógica original)
    buttonLogin.addEventListener('click', () => {
        if (inputEmail.value === '' && inputSenha.value === '') {
            alert('Preencha o email e a senha!');
            return;
        }
        
        if (inputEmail.value === '') {
            alert('Preencha o email!');
            return;
        }
        
        if (inputSenha.value === '') {
            alert('Preencha a senha!');
            return;
        }
        
        if (inputEmail.value === 'exemplo@email.com') {
            if (inputSenha.value === '12345678') {
                window.location.href = './home_page/view/home_page.html'; // Redireciona para a home
            } else {
                alert('Senha incorreta!');
            }
        } else {
            alert('Email incorreto!');
        }
    });
}