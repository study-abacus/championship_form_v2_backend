const Sequelize = require('sequelize');

module.exports = {
  define(db) {
    return db.define('participations', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      accepted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    }, { paranoid: true })
  },

  associate({ participants, exams, participations }) {
    participations.belongsTo(participants)
    participations.belongsTo(exams)
    
    exams.hasMany(participations)
    participants.hasMany(participations)
  }
}
