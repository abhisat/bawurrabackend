'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('languagesMenus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      media: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      body_1: {
        type: Sequelize.STRING
      },
      body_2: {
        type: Sequelize.STRING
      },
      body_3: {
        type: Sequelize.STRING
      },
      body_4: {
        type: Sequelize.STRING
      },
      body_5: {
        type: Sequelize.STRING
      },
      body_6: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('languagesMenus');
  }
};