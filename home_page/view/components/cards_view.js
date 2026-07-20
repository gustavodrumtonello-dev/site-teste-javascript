export function renderCard(dado_cartao, abrirModal, abrirModalExcluir) {
    const div_card = document.createElement('div');
    div_card.className = 'card';

    const div_card_client = document.createElement('div');
    div_card_client.className = 'card-client';

    const userPicture = document.createElement('div');
    userPicture.className = 'user-picture';

    const img = document.createElement('img');
    img.src = dado_cartao.img_profile;
    userPicture.appendChild(img);

    const profClient = document.createElement('p');
    profClient.className = 'prof-client';
    profClient.textContent = dado_cartao.profissao;

    const nameClient = document.createElement('p');
    nameClient.className = 'name-client';
    nameClient.textContent = dado_cartao.nome_usuario;

    const socialMedia = document.createElement('div');
    socialMedia.className = 'social-media';

    const twitterLink = document.createElement('a');
    twitterLink.href = dado_cartao.link_twitter;
    const twitterIcon = document.createElement('i');
    twitterIcon.className = 'fa-brands fa-twitter';
    twitterLink.appendChild(twitterIcon);

    const githubLink = document.createElement('a');
    githubLink.href = dado_cartao.link_github;
    const githubIcon = document.createElement('i');
    githubIcon.className = 'fa-brands fa-github';
    githubLink.appendChild(githubIcon);

    socialMedia.appendChild(twitterLink);
    socialMedia.appendChild(githubLink);

    const btnPerfil = document.createElement('button');
    btnPerfil.className = 'btn-perfil';
    btnPerfil.textContent = 'Ver Perfil';

    btnPerfil.addEventListener('click', () => {
        window.location.href = `../../perfil_usuarios_page/perfil_usuarios.html?id=${dado_cartao.id_usuario}`;
    });

    const btnEditar = document.createElement('button');
    btnEditar.className = 'btn-editar';
    btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Editar';

    btnEditar.addEventListener('click', () => {
        abrirModal(dado_cartao);
    });

    const btnDeletar = document.createElement('button');
    btnDeletar.className = 'btn-editar';
    btnDeletar.style.marginTop = '0.5rem';
    btnDeletar.style.borderColor = 'var(--primary)';
    btnDeletar.style.color = 'var(--primary)';
    btnDeletar.innerHTML = '<i class="fa-solid fa-trash"></i> Excluir';

    btnDeletar.addEventListener('click', () => {
        abrirModalExcluir(dado_cartao.id_usuario, dado_cartao.nome_usuario);
    });

    // Adiciona os elementos de forma organizada sem duplicidades
    div_card_client.appendChild(userPicture);
    div_card_client.appendChild(nameClient);
    div_card_client.appendChild(profClient);
    div_card_client.appendChild(socialMedia);
    div_card_client.appendChild(btnPerfil);
    div_card_client.appendChild(btnEditar);
    div_card_client.appendChild(btnDeletar);

    div_card.appendChild(div_card_client);

    return div_card;
}
