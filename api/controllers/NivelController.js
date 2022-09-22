const Services = require('../services/Services');
const niveisServices = new Services('Niveis');

class NivelController {

    static async findAllNiveis(req, res) {
        try {
            const allNiveis = await niveisServices.findAllRegister();
            return res.status(200).json(allNiveis);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async findNivelById(req, res) {
        const { id } = req.params;
        try {
            const nivel = await niveisServices.getOneRegister({ id });
            return res.status(200).json(nivel);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async createNivel(req, res) {
        const newNivelReq = req.body;
        try {
            const create = await niveisServices.createRegister(newNivelReq);
            return res.status(201).json(create);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async updateNivel(req, res) {
        const { id } = req.params;
        const updateReq = req.body;
        try {
            await niveisServices.updateRegister(updateReq, id);
            const newInfo = await niveisServices.getOneRegister(id);
            return res.status(200).json(newInfo);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async destroyNivel(req, res) {
        const { id } = req.params;
        try {
            await niveisServices.destroyRegister({ id });
            return res.status(200).json({ message: 'Nivel deletado com sucesso!' });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async restoreNivel(req, res) {
        const { id } = req.params;
        try {
            await niveisServices.restoreRegister({ id });
            return res.status(200).json({ message: `id ${id} resturado.` });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

}

module.exports = NivelController;
