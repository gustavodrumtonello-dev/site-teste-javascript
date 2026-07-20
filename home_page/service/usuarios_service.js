import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://bpzkdtuobxffrebwuqae.supabase.co'
const supabaseKey = 'sb_publishable_7Nez-PbHuKi4lv7vpzJAhQ_as_fwZes'

const supabase = createClient(supabaseUrl, supabaseKey)

export async function get_usuarios() {
    const { data: usuarios, error } = await supabase
        .from('usuarios')
        .select('*');

    return usuarios;
}

export async function get_usuario(idUsuario) {
    const { data: usuario, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('id_usuario', idUsuario)
        .single();

    return usuario;
}

export async function update_usuario(idUsuario, dadosEditados) {
    const { data, error } = await supabase
        .from('usuarios')
        .update(dadosEditados)
        .eq('id_usuario', idUsuario)
        .select();
    return data;
}

export async function create_usuario(novoUsuario) {
    const { data, error } = await supabase
        .from('usuarios')
        .insert([novoUsuario]) // O Supabase espera um array para inserções
        .select();

    return data;
}

export async function delete_usuario(idUsuario) {
    const { error } = await supabase
        .from('usuarios')
        .delete()
        .eq('id_usuario', idUsuario);

    return true;
}