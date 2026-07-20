import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://bpzkdtuobxffrebwuqae.supabase.co'
const supabaseKey = 'sb_publishable_7Nez-PbHuKi4lv7vpzJAhQ_as_fwZes'

const supabase = createClient(supabaseUrl, supabaseKey)

export async function get_publicacoes() {
    const { data: publicacao, error } = await supabase
        .from('publicacao')
        .select('*');

    return publicacao;
}
