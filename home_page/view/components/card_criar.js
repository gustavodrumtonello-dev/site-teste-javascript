export function renderCardCriar(abrirModalCriar) {
    const div_card_create = document.createElement('div');
    div_card_create.className = 'card';

    const div_card_client_create = document.createElement('div');
    div_card_client_create.className = 'card-client';
    div_card_client_create.style.justifyContent = 'center';
    div_card_client_create.style.cursor = 'pointer';
    div_card_client_create.style.height = '100%';

    const iconCreate = document.createElement('i');
    iconCreate.className = 'fa-solid fa-plus';
    iconCreate.style.fontSize = '4rem';
    iconCreate.style.color = 'var(--primary)';
    iconCreate.style.marginBottom = '1rem';
    iconCreate.style.transition = 'transform 0.3s ease';

    const textCreate = document.createElement('h2');
    textCreate.textContent = 'Novo Perfil';
    textCreate.style.color = 'var(--text-main)';

    div_card_client_create.addEventListener('mouseenter', () => {
        iconCreate.style.transform = 'scale(1.2) rotate(90deg)';
    });
    div_card_client_create.addEventListener('mouseleave', () => {
        iconCreate.style.transform = 'scale(1) rotate(0deg)';
    });

    div_card_client_create.appendChild(iconCreate);
    div_card_client_create.appendChild(textCreate);

    div_card_client_create.addEventListener('click', () => {
        abrirModalCriar();
    });

    div_card_create.appendChild(div_card_client_create);

    return div_card_create;
}
