import { bd } from "../model/bd.js";


export function createCards(cards_sec) {
    bd.map((dado_cartao) => {
        const div_card = document.createElement('div');
        div_card.className = 'card'

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
        nameClient.textContent = dado_cartao.nome;

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

        div_card_client.appendChild(userPicture);
        div_card_client.appendChild(nameClient);
        div_card_client.appendChild(profClient);
        div_card_client.appendChild(socialMedia);

        div_card.appendChild(div_card_client);

        cards_sec.appendChild(div_card);
    });
}