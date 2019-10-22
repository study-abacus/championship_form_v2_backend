'use strict';

const constants = require('../constants/migration')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('participants', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      studentId: {
        type: Sequelize.INTEGER,
      },
      tShirtSize: {
        type: Sequelize.ENUM,
        values: ['26', '28', '30', '32', '34', '36', '38', '40']
      },
      teacherId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'teachers',
          key: 'id'
        },
        allowNull: false
      },
      ...constants.TIMESTAMPS
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('participants')
  }
};
