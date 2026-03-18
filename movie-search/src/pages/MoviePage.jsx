import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function MoviePage() {

  const { title } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  const API_KEY = "a3f722d5";

  useEffect(() => {

    fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}&plot=full`)
      .then(res => res.json())
      .then(data => setMovie(data));

  }, [title]);

  const addFavorite = (movie) => {

    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push(movie);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    alert("Added to favorites ⭐");
  };

  if (!movie) return <h2 className="center">Loading...</h2>;

  return (
    <div className="center">

      <button className="backBtn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <MovieCard movie={movie} addFavorite={addFavorite} />

    </div>
  );
}

export default MoviePage;