const Services = require('./Services');
const database = require('../models');

class PessoasServices extends Services {
    constructor() {
        super('Pessoas');
        this.matriculas = new Services('Matriculas');
    }

    async findAllPeoples(where = {}) {
        return database[this.modelName].scope('todos').findAll({ where: { ...where } });
    }

    async cancelPeopleAndMatriculas(estudanteId) {
        return database.sequelize.transaction(async transaction => {
            await super.updateRegister({ ativo: false }, estudanteId, { transaction: transaction });
            await this.matriculas.updateRegisters({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transaction });
        });
    }
}

module.exports = PessoasServices;
