'use strict';

const { NOW } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'John Doe',
        ativo: true,
        email: 'daniel@daniel.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Juão Paulo',
        ativo: true,
        email: 'jotaP@vende.com',
        role: 'Vendedor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Edson gomes',
        ativo: true,
        email: 'edson@gomes.com',
        role: 'cantor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Dell',
        ativo: true,
        email: 'dell@dell.com',
        role: 'empresa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Valdenia',
        ativo: true,
        email: 'val@flores.com',
        role: 'artesã',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Desinha',
        ativo: true,
        email: 'minha@veia.com',
        role: 'aposentada',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};

//npx sequelize-cli model:create
//npx sequelize-cli 