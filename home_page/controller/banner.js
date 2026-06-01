let posicaoAtual = 0;
let larguraBanner = 80;
let qntBanners = 5;

export function moverBanner(direcao){
    const navBanner = document.getElementById("navegacao-banner");

    if(direcao === "E") {
        if(posicaoAtual >= 0) {
            posicaoAtual = -(larguraBanner * (qntBanners - 1))
        } else {
            posicaoAtual += larguraBanner;
        }   
        
    } else {
        if(posicaoAtual <= -(larguraBanner * (qntBanners - 1))) {
            posicaoAtual = 0;
        } else {
            posicaoAtual -= larguraBanner;
        }
    }
    navBanner.style.left = `${posicaoAtual}vw`;
}