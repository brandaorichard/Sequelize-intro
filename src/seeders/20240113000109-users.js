'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
  [
    {
      fullName: 'Richard',
      email: 'richard@test.com',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      fullName: 'Shinka',
      email: 'shinka@test.com',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};