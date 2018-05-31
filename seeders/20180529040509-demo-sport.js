'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Sports', [
        {teamName: 'Buffalo Bills', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Miami Dolphins', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'New England Patriots', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'New York Jets', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Baltimore Ravens', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Cincinnati Bengals', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Cleveland Browns', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Pittsburgh Steelers', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Houston Texans', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Indianapolis Colts', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Jacksonville Jaguars', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Tennessee Titans', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Denver Broncos', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Kansas City Chiefs', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Los Angeles Chargers', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Oakland Raiders', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Dallas Cowboys', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'New York Giants', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Philadelphia Eagles', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Washington Redskins', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Chicago Bears', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Detroit Lions', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Green Bay Packers', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Minnesota Vikings', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Atlanta Falcons', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Carolina Panthers', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'New Orleans Saints', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Tampa Bay Buccaneers', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Arizona Cardinals', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Los Angeles Rams', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'San Francisco 49ers', league: 'NFL', createdAt: new Date(), updatedAt: new Date()},
        {teamName: 'Seattle Seahawks', league: 'NFL', createdAt: new Date(), updatedAt: new Date()} 
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Sports', null, {});
  }
};
