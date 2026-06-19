import { bd } from "../../home_page/model/bd.js";

export function createProfilePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    const usuario = bd[userId];

    if (!usuario) {
        document.body.innerHTML = '<h1 style="text-align:center; padding:60px; color:#dc2626;">Usuário não encontrado</h1>';
        return;
    }

    // 1. Capa e Header (Apenas preenchendo os dados)
    document.getElementById('cover-photo').style.backgroundImage = `url('${usuario.img_cover}')`;
    document.getElementById('cover-avatar').src = usuario.img_profile;
    document.getElementById('cover-user-name').textContent = usuario.nome;

    document.getElementById('stat-amigos').textContent = `Amigos (${usuario.amigos_count})`;
    document.getElementById('stat-seguindo').textContent = `Seguindo (${usuario.seguindo_count})`;
    document.getElementById('stat-fotos').textContent = `Fotos (${usuario.fotos_count})`;

    // 2. Sobre Mim
    document.getElementById('sobre-bio').textContent = usuario.bio;
    document.getElementById('sobre-prof').textContent = usuario.profissao;
    document.getElementById('sobre-cidade').textContent = usuario.cidade;

    const sobreLinks = document.getElementById('sobre-links');
    if (usuario.link_github) {
        const githubLink = document.createElement('a');
        githubLink.className = 'sobre-link';
        githubLink.href = usuario.link_github;
        githubLink.target = '_blank';
        githubLink.innerHTML = '<i class="fa-brands fa-github"></i> GitHub';
        sobreLinks.appendChild(githubLink);
    }
    if (usuario.link_twitter) {
        const twitterLink = document.createElement('a');
        twitterLink.className = 'sobre-link';
        twitterLink.href = usuario.link_twitter;
        twitterLink.target = '_blank';
        twitterLink.innerHTML = '<i class="fa-brands fa-twitter"></i> Twitter';
        sobreLinks.appendChild(twitterLink);
    }

    // 3. Fotos Grid (Loop dinâmico)
    const fotosGrid = document.getElementById('fotos-grid');
    for (let i = 1; i <= 9; i++) {
        const seed = parseInt(userId) * 10 + i;
        const fotoImg = document.createElement('img');
        fotoImg.className = 'foto-thumb';
        fotoImg.src = `https://picsum.photos/seed/${seed}/200/200`;
        fotoImg.alt = `Foto ${i}`;
        fotosGrid.appendChild(fotoImg);
    }

    // 4. Amigos Grid (Loop dinâmico)
    const amigosGrid = document.getElementById('amigos-grid');
    let count = 0;
    for (let i = 0; i < bd.length && count < 6; i++) {
        if (i !== parseInt(userId)) {
            const amigo = bd[i];

            const amigoItem = document.createElement('div');
            amigoItem.className = 'amigo-item';

            const amigoImg = document.createElement('img');
            amigoImg.src = amigo.img_profile;
            amigoImg.alt = amigo.nome;

            const amigoNome = document.createElement('span');
            amigoNome.textContent = amigo.nome.split(' ')[0];

            amigoItem.appendChild(amigoImg);
            amigoItem.appendChild(amigoNome);
            amigosGrid.appendChild(amigoItem);

            count++;
        }
    }

    // 5. Post Fictício
    document.getElementById('post-avatar').src = usuario.img_profile;
    document.getElementById('post-author').textContent = usuario.nome;
    document.getElementById('post-image').src = usuario.img_cover;

    // 6. Aniversário
    const amigoAniver = bd[(parseInt(userId) + 3) % bd.length];
    const aniverContainer = document.getElementById('aniversario-container');

    const aniverItem = document.createElement('div');
    aniverItem.className = 'aniversario-item';

    const aniverAvatar = document.createElement('img');
    aniverAvatar.className = 'aniversario-avatar';
    aniverAvatar.src = amigoAniver.img_profile;
    aniverAvatar.alt = amigoAniver.nome;

    const aniverText = document.createElement('div');
    aniverText.className = 'aniversario-text';
    aniverText.innerHTML = `<strong>${amigoAniver.nome}</strong> faz aniversário hoje! 🎉`;

    aniverItem.appendChild(aniverAvatar);
    aniverItem.appendChild(aniverText);
    aniverContainer.appendChild(aniverItem);
}

document.addEventListener('DOMContentLoaded', () => {
    createProfilePage();
});
