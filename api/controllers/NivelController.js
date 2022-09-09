const database = require('../models');

class NivelController {

    static async findAllNiveis(req, res) {
        try {
            const allNiveis = await database.Niveis.findAll();
            return res.status(200).json(allNiveis);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async findNivelById(req, res) {
        const { id } = req.params;
        try {
            const nivel = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(nivel);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async createNivel(req, res) {
        const newNivelReq = req.body;
        try {
            const create = await database.Niveis.create(newNivelReq);
            return res.status(201).json(create);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async updateNivel(req, res) {
        const { id } = req.params;
        const updateReq = req.body;
        try {
            await database.Niveis.update(updateReq, { where: { id: Number(id) } });
            const newInfo = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(newInfo);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async destroyNivel(req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: 'Nivel deletado com sucesso!' });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async restoreNivel(req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.restore({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} resturado.` });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

}

module.exports = NivelController;
