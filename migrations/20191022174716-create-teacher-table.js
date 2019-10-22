'use strict';
const constants = require('../constants/migration')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teachers', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ...constants.TIMESTAMPS
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('teachers')
  }
};
