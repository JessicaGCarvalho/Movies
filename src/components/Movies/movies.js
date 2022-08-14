import { MovieItem } from "../MovieItem";
import "./styles.css";
import { colors } from "../../assets/colors";
import { Searchbar } from "../Searchbar";
import { discoverMockData, newReleasesMockData, favoritesMockData } from "../../helpers";
import { useState } from "react"

const WONDER_WOMAN_POSTER_URL =
  "https://i.ebayimg.com/images/g/k70AAOSwRYpZij1X/s-l500.jpg";

export function Movies({ activeTab }) {
  const [movies, setMovies] = useState(discoverMockData);

  return (
    <div
      style={{ backgroundColor: colors.background }}
      className="movie-container"
    >
      <div className="body-container">
        <Searchbar />
        <div className="title-and-movies">
          <div
            className="discover-title"
            style={{ color: colors.textColor }}
          >
            {activeTab}
          </div>

          <div className="movie-items-container">
            {
              movies.map(movie => (
                <MovieItem
                  title={movie.title}
                  rating={movie.rating}
                  posterUrl={movie.posterUrl}
                  movieLength={movie.movieLength}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
