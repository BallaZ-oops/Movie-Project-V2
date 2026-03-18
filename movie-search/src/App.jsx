import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SearchPage />} />

        <Route path="/movie/:title" element={<MoviePage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;