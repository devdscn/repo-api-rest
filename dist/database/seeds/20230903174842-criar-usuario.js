"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: ' Seed 1',
      email: 'seed1@email.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      nome: ' Seed 2',
      email: 'seed2@email.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },

    {
      nome: ' Seed 3',
      email: 'seed3@email.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },

    ], {});
  },

  async down() {
    console.log('');
  },
};
