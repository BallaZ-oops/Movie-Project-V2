function MovieCard({ movie, addFavorite }) {

  const youtubeSearch =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(movie.Title + " trailer");

  return (
    <div className="card">

      <img src={movie.Poster} alt="poster" />

      <h2>{movie.Title}</h2>

      <p>⭐ IMDb: {movie.imdbRating}</p>

      <p>{movie.Year}</p>

      <p className="plot">{movie.Plot}</p>

      <div className="buttons">

        <a href={youtubeSearch} target="_blank">
          <button>Trailer</button>
        </a>

        <button onClick={() => addFavorite(movie)}>
          ❤️ Favorite
        </button>

      </div>

    </div>
  );
}

export default MovieCard;