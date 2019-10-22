const Sequelize = require('sequelize');

module.exports = {
  define(db) {
    return db.define('sessions', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      clientId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      refreshToken: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  associate({ sessions, users }) {
    sessions.belongsTo(users)
  }
}
