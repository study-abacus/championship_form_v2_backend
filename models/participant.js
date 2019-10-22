const Sequelize = require('sequelize');

module.exports = {
  define(db) {
    return db.define('participants', {
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
        values: [26, 28, 30, 32, 34, 36, 38, 40]
      }
    }, { paranoid: true })
  },

  associate({ participants, teachers }) {
    participants.belongsTo(teachers)
  }
}
