const Sequelize = require('sequelize');

module.exports = {
  define(db) {
    return db.define('exams', {
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
      }
    }, { paranoid: true })
  },

  associate() {}
}
