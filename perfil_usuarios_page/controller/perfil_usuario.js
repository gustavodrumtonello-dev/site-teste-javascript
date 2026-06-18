import { bd } from "../../home_page/model/bd.js";

export function createProfilePage() {
    const profile_sec = document.getElementById('profile-sec');
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    const usuario = bd[userId];

    if (!usuario) {
        profile_sec.innerHTML = '<h1 class="error-msg">Usuário não encontrado</h1><button class="btn-voltar-home" onclick="window.location.href=\'../home_page/view/home_page.html\'">Voltar</button>';
        return;
    }

    profile_sec.innerHTML = '';

    // ==========================================
    // 1. HEADER GLOBAL
    // ==========================================
    const header = document.createElement('header');
    header.className = 'perfil-header';

    const logo = document.createElement('div');
    logo.className = 'perfil-logo';
    logo.innerHTML = '<i class="fa-solid fa-earth-europe"></i> RedeTech'; // Um logo legal

    const btnHome = document.createElement('button');
    btnHome.className = 'btn-voltar-home';
    btnHome.textContent = 'Voltar para Home';
    btnHome.onclick = () => { window.location.href = '../home_page/view/home_page.html'; };

    header.appendChild(logo);
    header.appendChild(btnHome);
    document.body.insertBefore(header, profile_sec);

    // ==========================================
    // 2. ESTRUTURA DO PERFIL (ESTILO FACEBOOK)
    // ==========================================
    const container = document.createElement('div');
    container.className = 'fb-perfil-container';

    // A) Foto de Capa (Colocamos uma imagem genérica bonita de tecnologia)
    const cover = document.createElement('div');
    cover.className = 'fb-cover-photo';
    cover.style.backgroundImage = "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80')";

    // B) Caixa de Informações Branca/Escura (Fica embaixo da capa)
    const infoSection = document.createElement('div');
    infoSection.className = 'fb-info-section';

    // C) O invólucro da Foto (para fazê-la sobrepor a capa)
    const avatarWrapper = document.createElement('div');
    avatarWrapper.className = 'fb-avatar-wrapper';

    const avatar = document.createElement('img');
    avatar.className = 'fb-avatar';
    avatar.src = usuario.img_profile;
    avatarWrapper.appendChild(avatar);

    // D) Textos (Nome, Profissão e Bio)
    const textWrapper = document.createElement('div');
    textWrapper.className = 'fb-text-wrapper';

    const nome = document.createElement('h1');
    nome.className = 'fb-nome';
    nome.textContent = usuario.nome;

    const profissao = document.createElement('p');
    profissao.className = 'fb-profissao';
    profissao.textContent = usuario.profissao;

    textWrapper.appendChild(nome);
    textWrapper.appendChild(profissao);

    if (usuario.bio) {
        const bio = document.createElement('p');
        bio.className = 'fb-bio';
        bio.textContent = usuario.bio;
        textWrapper.appendChild(bio);
    }

    // E) Botões Sociais
    const actionsWrapper = document.createElement('div');
    actionsWrapper.className = 'fb-actions-wrapper';

    if (usuario.link_twitter) {
        const twitter = document.createElement('a');
        twitter.className = 'fb-btn twitter';
        twitter.href = usuario.link_twitter;
        twitter.target = '_blank';
        twitter.innerHTML = '<i class="fa-brands fa-twitter"></i> Twitter';
        actionsWrapper.appendChild(twitter);
    }

    if (usuario.link_github) {
        const github = document.createElement('a');
        github.className = 'fb-btn github';
        github.href = usuario.link_github;
        github.target = '_blank';
        github.innerHTML = '<i class="fa-brands fa-github"></i> GitHub';
        actionsWrapper.appendChild(github);
    }

    // ==========================================
    // 3. MONTANDO AS PEÇAS
    // ==========================================
    infoSection.appendChild(avatarWrapper);
    infoSection.appendChild(textWrapper);
    infoSection.appendChild(actionsWrapper);

    container.appendChild(cover);
    container.appendChild(infoSection);

    profile_sec.appendChild(container);
}

document.addEventListener('DOMContentLoaded', () => {
    createProfilePage();
});
