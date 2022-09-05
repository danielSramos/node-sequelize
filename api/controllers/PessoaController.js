const database = require('../models');

class PessoaController {
    static async findAllPeople(req, res) {
        try {
            const allPeople = await database.Pessoas.findAll();
            return res.status(200).json(allPeople);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async findPeopleById(req, res) {
        const { id } = req.params;
        try {
            const people = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(people);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async createPeople(req, res) {
        const newPeople = req.body;
        try {
            const create = await database.Pessoas.create(newPeople);
            return res.status(200).json(create);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async updatePeople(req, res) {
        const { id } = req.params;
        const updatePeople = req.body;
        try {
            await database.Pessoas.update(updatePeople, { where: { id: Number(id) } });
            const updatedPeople = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedPeople);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async destroyPeople(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: 'usuário deletado com sucesso!' });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //MATRICULAS

    static async findMatriculaById(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(matricula);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async createMatricula(req, res) {
        const { estudanteId } = req.params;
        const newMatriculaReq = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const create = await database.Matriculas.create(newMatriculaReq);
            return res.status(200).json(create);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async updateMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const updateMatricula = req.body;
        try {
            await database.Matriculas.update(updateMatricula, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            const updatedMatricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId) } });
            return res.status(200).json(updatedMatricula);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async destroyMatricula(req, res) {
        const { matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId) } });
            return res.status(200).json({ message: 'Matricula deletada com sucesso!' });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = PessoaController;