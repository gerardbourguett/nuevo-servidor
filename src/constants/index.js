const {config} = require('dotenv');
config();

module.exports = {
    PORT: process.env.DB_PORT,
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_NAME,
}