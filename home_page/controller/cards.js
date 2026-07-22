import { get_usuarios } from "../service/usuarios_service.js";
import { renderCardCriar } from "../view/components/card_criar.js";
import { abrirModalCriar } from "../view/components/modal_create.js";

// arquivos dos modais
import { renderCard } from "../view/components/cards_view.js";
import { abrirModal } from "../view/components/modal_update.js";
import { abrirModalExcluir } from "../view/components/modal_delete.js";

export async function createCards(cards_sec) {
    cards_sec.innerHTML = '';

    const usuarios = await get_usuarios();

    usuarios.map((dado_cartao) => {
        const cardElement = renderCard(dado_cartao, abrirModal, abrirModalExcluir);
        cards_sec.appendChild(cardElement);
    });

    cards_sec.appendChild(renderCardCriar(abrirModalCriar));
}
