const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

async function get_usuarios() {
    const { data: usuarios, error } = await supabase
        .from('usuarios')
        .select('*');

    return usuarios;
}

async function get_usuario(idUsuario) {
    const { data: usuario, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('id_usuario', idUsuario)
        .single();

    return usuario;
}

async function update_usuario(idUsuario, dadosEditados) {
    const { data, error } = await supabase
        .from('usuarios')
        .update(dadosEditados)
        .eq('id_usuario', idUsuario)
        .select();
    return data;
}

async function create_usuario(novoUsuario) {
    const { data, error } = await supabase
        .from('usuarios')
        .insert([novoUsuario]) // O Supabase espera um array para inserções
        .select();

    if (error) console.error('Supabase error:', error);

    return data;
}

async function delete_usuario(idUsuario) {
    const { error } = await supabase
        .from('usuarios')
        .delete()
        .eq('id_usuario', idUsuario);

    return true;
}

module.exports = {
    get_usuarios,
    get_usuario,
    update_usuario,
    create_usuario,
    delete_usuario
};