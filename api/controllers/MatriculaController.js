const database = require('../models');

class MatriculaController {

    static async findAllMatriculas(req, res) {
        try {
            const allMatriculas = await database.Matriculas.findAll();
            return res.status(200).json(allMatriculas);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async findMatriculaById(req, res) {
        const { id } = req.params;
        try {
            const matricula = await database.Matriculas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(matricula);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async createMatricula(req, res) {
        const newMatriculaReq = req.body;

        try {
            const create = await database.Matriculas.create(newMatriculaReq);
            return res.status(201).json(create);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

}

module.exports = MatriculaController;