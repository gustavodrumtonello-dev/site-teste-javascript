import {moverBanner} from "./banner.js";

window.moverBanner = moverBanner; // Expõe a função para o escopo global, permitindo que seja chamada diretamente do HTML

// Este arquivo roda após o DOM carregar e orquestra a inicialização dos outros arquivos
document.addEventListener('DOMContentLoaded', () => {
});