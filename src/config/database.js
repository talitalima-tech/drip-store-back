const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carrega as senhas do arquivo .env

const sequelize = new Sequelize(
    process.env.DB_NAME, // Ex: store_api
    process.env.DB_USER, // Geralmente 'root'
    process.env.DB_PASS, // Sua senha do MySQL
    {
        host: process.env.DB_HOST, // 'localhost'
        dialect: 'mysql',
        logging: false, // Para não encher o terminal de textos 
        define: {
            timestamps: true, // Cria o created_at e updated_at automaticamente
            underscored: true // Transforma createdAt em created_at
        }
    }
);

module.exports = sequelize;