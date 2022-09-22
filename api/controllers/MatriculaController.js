const { MatriculasServices } = require('../services');
const matriculasServices = new MatriculasServices();

class MatriculaController {

    static async findMatriculaById(req, res) {
        const query = req.params;
        try {
            const matricula = await matriculasServices.getOneMatricula(query);
            return res.status(200).json(matricula);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async createMatricula(req, res) {
        const { estudanteId } = req.params;
        const newMatriculaReq = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const create = await matriculasServices.createRegister(newMatriculaReq);
            return res.status(200).json(create);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async updateMatricula(req, res) {
        const query = req.params;
        const updateMatricula = req.body;
        try {
            await matriculasServices.updadeMatricula(updateMatricula, query);
            const updatedMatricula = await matriculasServices.getOneRegister(query.matriculaId);
            return res.status(200).json(updatedMatricula);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async destroyMatricula(req, res) {
        const { matriculaId } = req.params;
        try {
            await matriculasServices.destroyRegister(matriculaId);
            return res.status(200).json({ message: 'Matricula deletada com sucesso!' });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async restoreMatricula(req, res) {
        const query = req.params;
        try {
            await matriculasServices.restoreMatricula(query);
            return res.status(200).json({ message: `id ${query.matriculaId} restaurado` });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async getMatriculasByTurmas(req, res) {
        const { turmaId } = req.params;
        try {
            const allMatriculas = await matriculasServices.getMatriculasByTurmas(turmaId);
            return res.status(200).json(allMatriculas);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async getTurmasFull(req, res) {
        const lotacao = 2;
        try {
            const turmasFull = await matriculasServices.getTurmasFull(lotacao);
            return res.status(200).json(turmasFull.count);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }


    
}

module.exports = MatriculaController;