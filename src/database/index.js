const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig);

/**
 * 
 * Alternative to mappings our models if our application is too big.
 * 
 * Use some of these packages through NPM as an alternative: 
 *
 *  consign - https://www.npmjs.com/package/consign
 * require-directory - https://www.npmjs.com/package/require-directory
 * 
 * */

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;