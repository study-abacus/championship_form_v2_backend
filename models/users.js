const Sequelize = require('sequelize');

module.exports = {
  define(db) {
    return db.define('users', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM,
        values: ['user', 'moderator', 'admin'],
        defaultValue: 'user'
      }
    }, { paranoid: true })
  },

  associate() {}
}
