'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
*/
      return queryInterface.bulkInsert('Person', [{
        menu_title: 'cjdbcjskdc',
        title: 'cdcndccdkcnc',
        media_1: 'cdscnskdjncsc',
        body: 'csdcndkscnksdjnc',
        media_2: 'cndksnckdnscsc'
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

    */
      return queryInterface.bulkDelete('Person', null, {});
  }
};
