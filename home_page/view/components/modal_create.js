import { create_usuario } from "../../../api/usuarios_service.js";

const modalCriarOverlay = document.getElementById('modal-criar');

// 1. Função de abrir o modal
export function abrirModalCriar() {
    document.getElementById('input-nome-criar').value = '';
    document.getElementById('input-profissao-criar').value = '';
    document.getElementById('input-img-criar').value = '';
    document.getElementById('input-twitter-criar').value = '';
    document.getElementById('input-github-criar').value = '';
    document.getElementById('input-cidade-criar').value = '';
    document.getElementById('input-bio-criar').value = '';
    modalCriarOverlay.classList.add('ativo');
}

// 2. Fechar o Modal
export function fecharModalCriar() {
    modalCriarOverlay.classList.remove('ativo');
}

// 3. Salvar o novo Usuário (Exportada para o HTML via window)
export async function salvarNovoUsuario() {
    const novoUsuario = {
        nome_usuario: document.getElementById('input-nome-criar').value,
        profissao: document.getElementById('input-profissao-criar').value,
        img_profile: document.getElementById('input-img-criar').value,
        link_twitter: document.getElementById('input-twitter-criar').value,
        link_github: document.getElementById('input-github-criar').value,
        cidade: document.getElementById('input-cidade-criar').value,
        bio: document.getElementById('input-bio-criar').value,
    };

    const resultado = await create_usuario(novoUsuario);
    if (resultado) {
        alert('Usuário criado com sucesso!');
        fecharModalCriar();
        window.location.reload();
    } else {
        alert('Erro ao criar usuário. Verifique o console.');
    }
}
