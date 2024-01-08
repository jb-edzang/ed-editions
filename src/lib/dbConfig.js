require("dotenv").config();
const { knexSnakeCaseMappers } = require("objection");

const config = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER || "username",
      password: process.env.DATABASE_URI || "pwdHash",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations",
    },
  },
  // ... Autres configurations pour les environnements (production, test, etc.) ...
};

const knex = require("knex")(config.development); // Utilisation de la configuration de développement par défaut

module.exports = {
  knex,
  config,
};
