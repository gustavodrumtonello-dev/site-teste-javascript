import { delete_usuario } from "../../../api/usuarios_service.js";

const modalExcluirOverlay = document.getElementById('modal-excluir');

export function abrirModalExcluir(idUsuario, nomeUsuario) {
    document.getElementById('input-id-excluir').value = idUsuario;
    document.getElementById('nome-usuario-excluir').textContent = nomeUsuario;

    modalExcluirOverlay.classList.add('ativo');
}

// 1. Fechar o modal (Agora exportada!)
export function fecharModalExcluir() {
    modalExcluirOverlay.classList.remove('ativo');
}

// 2. Confirmar exclusão (Exportada para o HTML via window)
export async function confirmarExclusao() {
    const id = document.getElementById('input-id-excluir').value;
    const sucesso = await delete_usuario(id);

    if (sucesso) {
        alert('Usuário excluído com sucesso!');
        fecharModalExcluir();
        window.location.reload();
    } else {
        alert('Erro ao excluir usuário.');
    }
}
