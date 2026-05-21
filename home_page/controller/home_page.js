// Header
const header = document.querySelector('.header');

const link_home = document.querySelector('.link-home');
const link_profile = document.querySelector('.link-profile');

// Mostrar header na home
function mostrarHeader() {
    header.style.display = 'flex';
}

function esconderHeader() {
    header.style.display = 'none';
}

// Navegação do header
link_home.addEventListener('click', (e) => {
    e.preventDefault();
    secao_cadastro.style.display = 'none';
    secao_login.style.display = 'none';
    secao_home.style.display = 'flex';
});

link_profile.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Página de perfil em construção!');
});

// Mostrar header quando estiver na home
// Adicione isso no login bem-sucedido:
if (input_senha.value === '12345678') {
    secao_login.style.display = 'none';
    secao_home.style.display = 'flex';
    mostrarHeader();
}

