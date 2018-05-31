<<<<<<< HEAD

=======
>>>>>>> 886afc09258a91a37d64a8c85d6dfe2ec5f1e7c0
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
<<<<<<< HEAD
};
=======
};
>>>>>>> 886afc09258a91a37d64a8c85d6dfe2ec5f1e7c0
