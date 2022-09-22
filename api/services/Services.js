const database = require('../models');

class Services {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async findAllRegister(where = {}) {
        return database[this.modelName].findAll({ where: { ...where } });
    }

    async getOneRegister(where = {}) {
        return database[this.modelName].findOne({ where: { ...where } });
    }

    async createRegister(data) {
        return database[this.modelName].create(data);
    }

    async updateRegister(data, id = {}, transaction = {}) {
        return database[this.modelName].update(data, { where: { id: Number(id) } }, transaction);
    }

    async updateRegisters(data, where, transaction = {}) {
        return database[this.modelName].update(data, { where: { ...where } }, transaction);
    }

    async destroyRegister(where = {}) {
        return database[this.modelName].destroy({ where: { ...where } });
    }

    async restoreRegister(where = {}) {
        return database[this.modelName].restore({ where: { ...where } });
    }
}

module.exports = Services;
