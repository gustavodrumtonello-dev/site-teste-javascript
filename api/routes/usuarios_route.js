const express = require('express');
const cors = require('cors');
const {
    get_usuarios,
    get_usuario,
    create_usuario,
    update_usuario,
    delete_usuario
} = require('../usuarios_service');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await get_usuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await get_usuario(req.params.id);
        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.post('/usuarios', async (req, res) => {
    try {
        const novoUsuario = await create_usuario(req.body);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.put('/usuarios/:id', async (req, res) => {
    try {
        const usuarioAtualizado = await update_usuario(req.params.id, req.body);
        res.status(200).json(usuarioAtualizado);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.delete('/usuarios/:id', async (req, res) => {
    try {
        await delete_usuario(req.params.id);
        res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

module.exports = router;
