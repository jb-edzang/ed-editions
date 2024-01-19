import knex from "knex";
import { useEffect, useState } from "react";

const useDatabase = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    // Initialisez la connexion à votre base de données
    const database = knex({
      development: {
        client: "pg",
        connection: {
          database: process.env.DB_NAME,
          user: process.env.DB_USER || "username",
          password: process.env.DATABASE_URI || "pwd",
        },
        useNullAsDefault: true,
        migrations: {
          directory: "./migrations",
        },
      },
    });

    setDb(database);

    return () => {
      // Fermez la connexion à la base de données si nécessaire
      database.destroy();
    };
  }, []);

  return db;
};

export default useDatabase;
