'use strict';

const constants = require('../constants/migration')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('participations', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      accepted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      participantId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'participants',
          key: 'id'
        }
      },
      examId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'exams',
          key: 'id'
        }
      },
      ...constants.TIMESTAMPS
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('participations')
  }
};
