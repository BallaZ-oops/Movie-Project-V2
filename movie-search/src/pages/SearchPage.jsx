import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {

  const [movie, setMovie] = useState("");
  const navigate = useNavigate();

  const searchMovie = () => {
    if (!movie.trim()) return;
    navigate("/movie/" + encodeURIComponent(movie));
  };

  return (
    <div className="center">

      <h1>🎬 Movie Search</h1>

      <input
        type="text"
        placeholder="Enter movie name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />

      <button onClick={searchMovie}>Search</button>

      <button
        className="favBtn"
        onClick={() => navigate("/favorites")}
      >
        ⭐ Favorites
      </button>

    </div>
  );
}

export default SearchPage;