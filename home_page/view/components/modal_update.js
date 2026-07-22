import { update_usuario } from "../../service/usuarios_service.js";

const modalOverlay = document.getElementById('modal-editar');

export function abrirModal(dadosUsuario) {
    document.getElementById('input-id-usuario').value = dadosUsuario.id_usuario;
    document.getElementById('input-nome').value = dadosUsuario.nome_usuario;
    document.getElementById('input-profissao').value = dadosUsuario.profissao;
    document.getElementById('input-img').value = dadosUsuario.img_profile;
    document.getElementById('input-twitter').value = dadosUsuario.link_twitter;
    document.getElementById('input-github').value = dadosUsuario.link_github;
    document.getElementById('input-cidade').value = dadosUsuario.cidade;
    document.getElementById('input-bio').value = dadosUsuario.bio;

    modalOverlay.classList.add('ativo');
}

// 1. Fechar o modal (Agora exportada!)
export function fecharModal() {
    modalOverlay.classList.remove('ativo');
}

// 2. Salvar Edição (Exportada para o HTML via window)
export async function salvarEdicao() {
    const id = document.getElementById('input-id-usuario').value;
    const dadosEditados = {
        nome_usuario: document.getElementById('input-nome').value,
        profissao: document.getElementById('input-profissao').value,
        img_profile: document.getElementById('input-img').value,
        link_twitter: document.getElementById('input-twitter').value,
        link_github: document.getElementById('input-github').value,
        cidade: document.getElementById('input-cidade').value,
        bio: document.getElementById('input-bio').value,
    };

    const resultado = await update_usuario(id, dadosEditados);

    if (resultado) {
        alert('Usuário atualizado com sucesso!');
        fecharModal();
        window.location.reload(); // Recarrega a página para atualizar o card editado
    } else {
        alert('Erro ao atualizar. Verifique o console.');
    }
}
