const { PessoasServices } = require('../services');
const peopleServices = new PessoasServices();

class PessoaController {
    static async findAllPeople(req, res) {
        try {
            const allPeople = await peopleServices.findAllPeoples();
            return res.status(200).json(allPeople);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async findActivePeople(req, res) {
        try {
            const activePeoples = await peopleServices.findAllRegister();
            return res.status(200).json(activePeoples);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async findPeopleById(req, res) {
        const { id } = req.params;
        try {
            const people = await peopleServices.getOneRegister({ id });
            return res.status(200).json(people);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async createPeople(req, res) {
        const newPeople = req.body;
        try {
            const create = await peopleServices.createRegister(newPeople);
            return res.status(200).json(create);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async updatePeople(req, res) {
        const { id } = req.params;
        const updatePeople = req.body;
        try {
            await peopleServices.updateRegister(updatePeople, id);
            const updatedPeople = await peopleServices.getOneRegister(id);
            return res.status(200).json(updatedPeople);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async destroyPeople(req, res) {
        const { id } = req.params;
        try {
            await peopleServices.destroyRegister({ id });
            return res.status(200).json({ message: 'usuário deletado com sucesso!' });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async restorePeople(req, res) {
        const { id } = req.params;
        try {
            await peopleServices.restoreRegister({ id });
            return res.status(200).json({ message: `id ${id} restaurado` });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async cancelPeople(req, res) {
        const { estudanteId } = req.params;
        try {
            await peopleServices.cancelPeopleAndMatriculas(Number(estudanteId));
            return res.status(200).json({ message: 'Usuario cancelado com sucesso!' });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async getConfirmedMatriculas(req, res) {
        const { estudanteId } = req.params;
        try {
            const people = await peopleServices.getOneRegister(Number(estudanteId));
            const matriculas = await people.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = PessoaController;
