'use strict';

const constants = require('../constants/migration')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('exams', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      subject: {
        type: Sequelize.STRING,
        allowNull: false
      },
      level: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ...constants.TIMESTAMPS
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('exams')
  }
};
