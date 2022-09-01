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
        const updatePeople = req.body;
        const { id } = req.params;
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
}

module.exports = PessoaController;