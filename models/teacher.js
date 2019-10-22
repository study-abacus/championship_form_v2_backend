const Sequelize = require('sequelize');

module.exports = {
  define(db) {
    return db.define('teachers', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, { paranoid: true })
  },

  associate() {}
}
