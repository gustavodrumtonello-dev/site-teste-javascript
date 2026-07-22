import { get_usuario, update_usuario } from "../../home_page/service/usuarios_service.js";


export async function createProfilePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    const usuario = await get_usuario(userId);

    if (!usuario) {
        document.body.innerHTML = '<h1 style="text-align:center; padding:60px; color:#dc2626;">Usuário não encontrado</h1>';
        return;
    }

    // 1. Capa e Header (Apenas preenchendo os dados)
    document.getElementById('cover-photo').style.backgroundImage = `url('${usuario.img_cover}')`;
    document.getElementById('cover-avatar').src = usuario.img_profile;
    document.getElementById('cover-user-name').textContent = usuario.nome_usuario;

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
    // for (let i = 0; i < usuario.seguidores.length && count < 6; i++) {
    //     if (i !== parseInt(userId)) {
    //         const amigo = bd[i];

    //         const amigoItem = document.createElement('div');
    //         amigoItem.className = 'amigo-item';

    //         const amigoImg = document.createElement('img');
    //         amigoImg.src = amigo.img_profile;
    //         amigoImg.alt = amigo.nome;

    //         const amigoNome = document.createElement('span');
    //         amigoNome.textContent = amigo.nome.split(' ')[0];

    //         amigoItem.appendChild(amigoImg);
    //         amigoItem.appendChild(amigoNome);
    //         amigosGrid.appendChild(amigoItem);

    //         count++;
    //     }
    // }

    // 5. Post Fictício
    document.getElementById('post-avatar').src = usuario.img_profile;
    document.getElementById('post-author').textContent = usuario.nome_usuario;
    document.getElementById('post-image').src = usuario.img_cover;

    // // 6. Aniversário
    // const amigoAniver = bd[(parseInt(userId) + 3) % bd.length];
    // const aniverContainer = document.getElementById('aniversario-container');

    // const aniverItem = document.createElement('div');
    // aniverItem.className = 'aniversario-item';

    // const aniverAvatar = document.createElement('img');
    // aniverAvatar.className = 'aniversario-avatar';
    // aniverAvatar.src = amigoAniver.img_profile;
    // aniverAvatar.alt = amigoAniver.nome;

    // const aniverText = document.createElement('div');
    // aniverText.className = 'aniversario-text';
    // aniverText.innerHTML = `<strong>${amigoAniver.nome}</strong> faz aniversário hoje! 🎉`;

    // aniverItem.appendChild(aniverAvatar);
    // aniverItem.appendChild(aniverText);
    // aniverContainer.appendChild(aniverItem);
}

document.addEventListener('DOMContentLoaded', () => {
    createProfilePage();
});

// =============================================
// LÓGICA DO MODAL DE EDIÇÃO DO PERFIL
// =============================================

const modalPerfil = document.getElementById('modal-editar-perfil');
const btnAbrirModal = document.getElementById('btn-editar-perfil');
const btnFecharModal = document.getElementById('btn-fechar-modal-perfil');
const btnSalvarModal = document.getElementById('btn-salvar-modal-perfil');

function abrirModalPerfil(usuario) {
    document.getElementById('perfil-input-id').value = usuario.id_usuario;
    document.getElementById('perfil-input-nome').value = usuario.nome_usuario;
    document.getElementById('perfil-input-profissao').value = usuario.profissao;
    document.getElementById('perfil-input-cidade').value = usuario.cidade;
    document.getElementById('perfil-input-bio').value = usuario.bio;
    document.getElementById('perfil-input-img').value = usuario.img_profile;
    document.getElementById('perfil-input-twitter').value = usuario.link_twitter;
    document.getElementById('perfil-input-github').value = usuario.link_github;

    modalPerfil.classList.add('ativo');
}

function fecharModalPerfil() {
    modalPerfil.classList.remove('ativo');
}

// Espera o DOM carregar para registrar os eventos
document.addEventListener('DOMContentLoaded', async () => {

    // Busca o usuário da URL (mesmo que o createProfilePage faz)
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    const usuario = await get_usuario(userId);

    // Abre o modal ao clicar no botão Editar Perfil
    btnAbrirModal.addEventListener('click', () => {
        abrirModalPerfil(usuario);
    });

    // Fecha ao clicar em Cancelar
    btnFecharModal.addEventListener('click', fecharModalPerfil);

    // Fecha ao clicar fora do modal
    modalPerfil.addEventListener('click', (event) => {
        if (event.target === modalPerfil) fecharModalPerfil();
    });

    // Salva no Supabase ao clicar em Salvar
    btnSalvarModal.addEventListener('click', async () => {
        const id = document.getElementById('perfil-input-id').value;

        const dadosEditados = {
            nome_usuario: document.getElementById('perfil-input-nome').value,
            profissao: document.getElementById('perfil-input-profissao').value,
            cidade: document.getElementById('perfil-input-cidade').value,
            bio: document.getElementById('perfil-input-bio').value,
            img_profile: document.getElementById('perfil-input-img').value,
            link_twitter: document.getElementById('perfil-input-twitter').value,
            link_github: document.getElementById('perfil-input-github').value,
        };

        const resultado = await update_usuario(id, dadosEditados);

        if (resultado) {
            alert('Perfil atualizado com sucesso!');
            fecharModalPerfil();
        } else {
            alert('Erro ao atualizar. Verifique o console.');
        }
    });
});
