const Sequelize = require('sequelize')

module.exports = {
  TIMESTAMPS: {
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  }
}