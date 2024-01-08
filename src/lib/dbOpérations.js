const knex = require("./dbConfig"); // Import de la connexion à la base de données

// Fonction pour créer une table "users"
const createUsersTable = async () => {
  try {
    await knex.schema.createTable("users", function (table) {
      table.increments("id");
      table.string("username");
      table.string("email");
    });
    console.log('Table "users" créée avec succès.');
  } catch (error) {
    console.error('Erreur lors de la création de la table "users":', error);
  }
};

// Fonction pour insérer des données dans la table "users"
const insertUsersData = async () => {
  try {
    await knex("users").insert([
      { username: "JohnDoe", email: "john@example.com" },
      { username: "JaneDoe", email: "jane@example.com" },
    ]);
    console.log("Données insérées avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'insertion des données:", error);
  }
};

// Fonction pour récupérer toutes les données de la table "users"
const getAllUsers = async () => {
  try {
    const users = await knex.select().from("users");
    return users;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    throw error;
  }
};

module.exports = {
  createUsersTable,
  insertUsersData,
  getAllUsers,
};
