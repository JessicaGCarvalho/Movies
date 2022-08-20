import { MovieItem } from "../MovieItem";
import "./styles.css";
import { Searchbar } from "../Searchbar";
import { favoritesMockData, tabs, getMovieData, getNewReleasesDate, today } from "../../helpers";
import { useState, useEffect } from "react"

const WONDER_WOMAN_POSTER_URL =
  "https://i.ebayimg.com/images/g/k70AAOSwRYpZij1X/s-l500.jpg";

export function Movies({ activeTab }) {
  const [movies, setMovies] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");

  useEffect(() => {
    const getMoviesForTab = async (tabReq) => {
      const response = await getMovieData(tabReq);
      const movies = response.results.map(movie => (
        {
          title: movie.title,
          rating: movie.vote_average,
          posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          releaseDate: movie.release_date
        }
      ));
      setMovies(movies);
    }
    if (activeTab === tabs.DISCOVER) getMoviesForTab();
    if (activeTab === tabs.NEW_RELEASES) getMoviesForTab(getNewReleasesDate());
    if (activeTab === tabs.UPCOMING) getMoviesForTab(today);
    if (activeTab === tabs.FAVORITES) setMovies(favoritesMockData);
  }, [activeTab])

  return (
    <div
      className="movie-container"
    >
      <div className="body-container">
        <Searchbar setCurrentSearch={setCurrentSearch} />
        <div className="title-and-movies">
          <div
            className="page-title"
          >
            {activeTab}
          </div>

          <div className="movie-items-container">
            {
              movies.filter(movie => movie.title.toLowerCase().includes(currentSearch.toLowerCase())).map(movie => (
                <MovieItem
                  title={movie.title}
                  rating={movie.rating}
                  posterUrl={movie.posterUrl}
                  releaseDate={movie.releaseDate}
                  displayRating={activeTab !== tabs.UPCOMING}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
