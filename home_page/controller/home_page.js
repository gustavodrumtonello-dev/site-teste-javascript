import { moverBanner } from "./banner.js";
import { createCards } from "./cards.js";

const cards_sec = document.getElementById('cards_sec');

window.moverBanner = moverBanner; // Expõe a função para o escopo global, permitindo que seja chamada diretamente do HTML

// Este arquivo roda após o DOM carregar e orquestra a inicialização dos outros arquivos
document.addEventListener('DOMContentLoaded', () => {
    createCards(cards_sec);
});