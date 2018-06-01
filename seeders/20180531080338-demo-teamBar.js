'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('teamBars', [
        {teamName: 'Buffalo Bills', barName: 'The Local (Pacific Beach)', createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Miami Dolphins', barName: 'San Diego Brewing Company (Mission Valley)', createdAt: new Date(), updatedAt: new Date},
        {teamName: 'New England Patriots', barName: "Mother's Saloon (Ocean Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'New York Jets', barName: "Henry's Pub (Gaslamp)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Baltimore Ravens', barName: 'Dirty Birds (Pacific Beach)', createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Cincinnati Bengals', barName: 'The Local Eatery & Drinking Hole (Gaslamp)', createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Cleveland Browns', barName: 'Sycamore Den (Normal Heights)', createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Pittsburgh Steelers', barName: "Bub's Dive Bar (Pacific Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Houston Texans', barName: "True North Tavern (North Park)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Indianapolis Colts', barName: "Miss B's Coconut Club (Mission Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Jacksonville Jaguars', barName: "Rookies (Oceanside)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Tennessee Titans', barName: "Yard House (Carlsbad)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Denver Broncos', barName: "Truckstop (Pacific Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Kansas City Chiefs', barName: "Kansas City Barbeque (Downtown)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Los Angeles Chargers', barName: "High Dive Bar & Grill (Baypark)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Oakland Raiders', barName: "Cheers Bar & Grill (Carmel Valley)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Dallas Cowboys', barName: "Johnny V (Pacific Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'New York Giants', barName: "Knotty Barrel (East Village)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Philadelphia Eagles', barName: "Avenue (Pacific Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Washington Redskins', barName: "Winston's Beach Club (Ocean Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Chicago Bears', barName: "710 Beach Club (Pacific Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Detroit Lions', barName: "The Dog (Pacific Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Green Bay Packers', barName: "El Prez/Red's Saloon (Pacific Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Minnesota Vikings', barName: "Guava Beach (Mission Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Atlanta Falcons', barName: "Yard House (Downtown)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Carolina Panthers', barName: "Legendary McDini's (National City)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'New Orleans Saints', barName: "Dave & Buster's (Mission Valley)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Tampa Bay Buccaneers', barName: "PCH Sports Bar & Grill (Oceanside)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Arizona Cardinals', barName: "Coaster Saloon (Mission Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Los Angeles Rams', barName: "The Silver Fox (Pacific Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'San Francisco 49ers', barName: "Cerveza Jack's (Pacific Beach)", createdAt: new Date(), updatedAt: new Date},
        {teamName: 'Seattle Seahawks', barName: "Thruster's Lounge (Pacific Beach)", createdAt: new Date(), updatedAt: new Date}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('teamBars', null, {});
  }
};
