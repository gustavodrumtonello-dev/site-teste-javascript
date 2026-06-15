import { bd } from "../../home_page/model/bd.js";

export function createProfilePage() {
    // PEGA A SEÇÃO ONDE O PERFIL SERÁ DESENHADO
    const profile_sec = document.getElementById('profile-sec');

    // PEGA O ID DA URL
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    // BUSCA O USUÁRIO CERTO NO BANCO
    const usuario = bd[userId];

    if (!usuario) {
        profile_sec.innerHTML = '<h1 class="error-msg">Usuário não encontrado</h1><a class="btn-voltar-erro" href="../home_page/view/home_page.html">Voltar</a>';
        return;
    }

    // LIMPA A SEÇÃO PARA GARANTIR QUE ESTÁ VAZIA
    profile_sec.innerHTML = '';

    // Header
    const header = document.createElement('header');
    header.className = 'perfil-header';

    const logo = document.createElement('div');
    logo.className = 'perfil-logo';
    logo.textContent = 'Perfil';

    const btnHome = document.createElement('button');
    btnHome.className = 'btn-voltar-home';
    btnHome.textContent = 'Voltar para Home';
    btnHome.onclick = () => {
        window.location.href = '../home_page/view/home_page.html';
    };

    header.appendChild(logo);
    header.appendChild(btnHome);

    // Adicionamos o header antes da seção do perfil, direto no body
    document.body.insertBefore(header, profile_sec);

    // Container do perfil
    const container = document.createElement('div');
    container.className = 'perfil-container';

    // Avatar
    const avatar = document.createElement('img');
    avatar.className = 'perfil-avatar';
    avatar.src = usuario.img_profile;

    // Nome
    const nome = document.createElement('h1');
    nome.className = 'perfil-nome';
    nome.textContent = usuario.nome;

    // Profissão
    const profissao = document.createElement('p');
    profissao.className = 'perfil-profissao';
    profissao.textContent = usuario.profissao;

    // Container de Links
    const linksDiv = document.createElement('div');
    linksDiv.className = 'perfil-links';

    if (usuario.link_twitter) {
        const twitter = document.createElement('a');
        twitter.className = 'btn-social twitter';
        twitter.href = usuario.link_twitter;
        twitter.target = '_blank';
        twitter.innerHTML = '<i class="fa-brands fa-twitter"></i> Twitter';
        linksDiv.appendChild(twitter);
    }

    if (usuario.link_github) {
        const github = document.createElement('a');
        github.className = 'btn-social github';
        github.href = usuario.link_github;
        github.target = '_blank';
        github.innerHTML = '<i class="fa-brands fa-github"></i> GitHub';
        linksDiv.appendChild(github);
    }

    // Adiciona tudo no container
    container.appendChild(avatar);
    container.appendChild(nome);
    container.appendChild(profissao);
    container.appendChild(linksDiv);

    // Adiciona o container na seção principal
    profile_sec.appendChild(container);
}

document.addEventListener('DOMContentLoaded', () => {
    createProfilePage();
});
