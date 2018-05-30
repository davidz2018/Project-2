'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        homeTown: 'San Diego',
        currentCity: 'Los Angeles',
        favoriteTeam: 'Los Angeles Chargers',
        password: 'fuckLA',
        userName: 'fuckallofLA',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
