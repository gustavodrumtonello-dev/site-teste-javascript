import { moverBanner } from "./banner.js";
import { createCards } from "./cards.js";

// importando os modais
import { fecharModalCriar, salvarNovoUsuario } from "../view/components/modal_create.js";
import { abrirModal, fecharModal, salvarEdicao } from "../view/components/modal_update.js";
import { abrirModalExcluir, fecharModalExcluir, confirmarExclusao } from "../view/components/modal_delete.js";

const cards_sec = document.getElementById('cards_sec');

// Disponibilizando no objeto global window para o HTML ter acesso
window.moverBanner = moverBanner;

window.fecharModalCriar = fecharModalCriar;
window.salvarNovoUsuario = salvarNovoUsuario;

window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.salvarEdicao = salvarEdicao;

window.abrirModalExcluir = abrirModalExcluir;
window.fecharModalExcluir = fecharModalExcluir;
window.confirmarExclusao = confirmarExclusao;

document.addEventListener('DOMContentLoaded', () => {
    createCards(cards_sec);
});
