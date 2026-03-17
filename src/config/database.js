require('dotenv').config();

module.exports = {
  dialect: process.env.DB_DIALECT || 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME,
  port: 3306, // Porta padrão do MySQL
  logging: false, 
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};