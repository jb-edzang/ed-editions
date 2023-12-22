import React, { useEffect, useState } from "react";
import { getAllThemes } from "../services/api/themesApi";

const ThemesPage = () => {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    async function fetchThemes() {
      try {
        const themesData = await getAllThemes();
        setThemes(themesData);
      } catch (error) {
        console.error("Failed to fetch themes:", error);
      }
    }
    fetchThemes();
  }, []);

  return (
    <div>
      <h1>Themes</h1>
      <ul>
        {themes.map((theme) => (
          <li key={theme.id}>{theme.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThemesPage;
