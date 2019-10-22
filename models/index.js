'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config')[env];
const db = {};
const dbModel = {}

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    const model = require(path.join(__dirname, file)).define(sequelize);
    dbModel[model.name] = require(path.join(__dirname, file))
    db[model.name] = model;
  });

Object.keys(dbModel).forEach(function(modelName) {
  if(dbModel[modelName].associate){
    dbModel[modelName].associate(db)
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
