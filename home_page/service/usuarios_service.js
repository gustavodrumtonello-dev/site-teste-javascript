const API_URL = '/api';

export async function get_usuarios() {
    const resposta = await fetch(`${API_URL}/usuarios`);
    return await resposta.json();
}

export async function get_usuario(idUsuario) {
    const resposta = await fetch(`${API_URL}/usuarios/${idUsuario}`);
    return await resposta.json();
}

export async function create_usuario(novoUsuario) {
    const resposta = await fetch(`${API_URL}/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoUsuario)
    });
    return await resposta.json();
}

export async function update_usuario(idUsuario, dadosEditados) {
    const resposta = await fetch(`${API_URL}/usuarios/${idUsuario}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosEditados)
    });
    return await resposta.json();
}

export async function delete_usuario(idUsuario) {
    const resposta = await fetch(`${API_URL}/usuarios/${idUsuario}`, {
        method: 'DELETE'
    });
    return await resposta.json();
}
