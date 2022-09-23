const { TurmasServices } = require('../services')
const turmasServices = new TurmasServices();

class TurmaController {

    static async findAllTurmas(req, res) {
        const query = req.query;
        try {
            const allTurmas = await turmasServices.getAllTurmas(query);
            return res.status(200).json(allTurmas);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async findTurmaById(req, res) {
        const { id } = req.params;
        try {
            const turma = await turmasServices.getOneRegister({ id });
            return res.status(200).json(turma)
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async createTurma(req, res) {
        const newTurmaReq = req.body;
        try {
            const create = await turmasServices.createRegister(newTurmaReq);
            return res.status(201).json(create);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async updateTurma(req, res) {
        const { id } = req.params;
        const updateReq = req.body;
        try {
            await turmasServices.updateRegister(updateReq, id);
            const newInfo = await turmasServices.getOneRegister({ id });
            return res.status(200).json(newInfo);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async destroyTurma(req, res) {
        const { id } = req.params;
        try {
            await turmasServices.destroyRegister({ id });
            return res.status(200).json({ message: 'Turma deletada com sucesso!' })
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async restoreTurma(req, res) {
        const { id } = req.params;
        try {
            await turmasServices.restoreRegister({ id });
            return res.status(200).json({ message: `id ${id} restaurado.` });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = TurmaController;
