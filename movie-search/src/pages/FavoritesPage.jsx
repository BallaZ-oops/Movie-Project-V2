import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FavoritesPage() {

  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);

  }, []);

  const removeFavorite = (index) => {

    const updatedFavorites = favorites.filter((_, i) => i !== index);

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

  };

  return (

    <div className="center">

      <h1>⭐ Favorite Movies</h1>

      <button className="backBtn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="grid">

        {favorites.map((movie, index) => (

          <div className="card" key={index}>

            <img src={movie.Poster} alt="poster" />

            <h3>{movie.Title}</h3>

            <p>{movie.Year}</p>

            <button
              className="removeBtn"
              onClick={() => removeFavorite(index)}
            >
              ❌ Remove
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FavoritesPage;