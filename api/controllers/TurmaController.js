const database = require('../models');

class TurmaController {

    static async findAllTurmas(req, res) {
        try {
            const allTurmas = await database.Turmas.findAll();
            return res.status(200).json(allTurmas);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async findTurmaById(req, res) {
        const { id } = req.params;
        try {
            const turma = await database.Turmas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(turma)
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async createTurma(req, res) {
        const newTurmaReq = req.body;
        try {
            const create = await database.Turmas.create(newTurmaReq);
            return res.status(201).json(create);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async updateTurma(req, res) {
        const { id } = req.params;
        const updateReq = req.body;
        try {
            await database.Turmas.update(updateReq, { where: { id: Number(id) } });
            const newInfo = await database.Turmas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(newInfo);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async destroyTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: 'Turma deletada com sucesso!' })
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async restoreTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.restore({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} restaurado.` });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = TurmaController;