const Services = require('./Services');
const database = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class TurmasServices extends Services {
    constructor() {
        super('Turmas')
    }

    async getAllTurmas(query = {}) {
        const where = {};
        query.data_inicial || query.data_final ? where.data_inicio = {} : null;
        query.data_inicial ? where.data_inicio[Op.gte] = query.data_inicial : null;
        query.data_final ? where.data_inicio[Op.lte] = query.data_final : null;

        return database[this.modelName].findAll({ where });
    }

}

module.exports = TurmasServices;