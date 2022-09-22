const Services = require('./Services');
const database = require('../models');
const Sequelize = require('sequelize');

class MatriculasServices extends Services {
    constructor() {
        super('Matriculas');
    }

    async getOneMatricula(query = {}) {
        return database[this.modelName].findOne({
            where: {
                id: Number(query.matriculaId),
                estudante_id: Number(query.estudanteId)
            }
        });
    }

    async updadeMatricula(data, query) {
        return database[this.modelName].update(data, {
            where: {
                id: Number(query.matriculaId),
                estudante_id: Number(query.estudanteId)
            }
        });
    }

    async restoreMatricula(query) {
        return database[this.modelName].restore({
            where: {
                id: Number(query.matriculaId),
                estudante_id: Number(query.estudanteId),
            }
        });
    }

    async getMatriculasByTurmas(turmaId) {
        return database[this.modelName].findAndCountAll({
            where: {
                turma_id: Number(turmaId),
                status: 'confirmado'
            },
            limit: 2,
            order: [['estudante_id', 'DESC']]
        });
    }

    async getTurmasFull(lotacao) {
        return database[this.modelName].findAndCountAll({
            where: {
                status: 'confirmado',
            },
            attributes: ['turma_id'],
            group: ['turma_id'],
            having: Sequelize.literal(`count(turma_id) >= ${lotacao}`),
        });
    }
}

module.exports = MatriculasServices;
