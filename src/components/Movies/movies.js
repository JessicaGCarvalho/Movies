import { MovieItem } from "../MovieItem";
import "./styles.css";
import { colors } from "../../assets/colors";
import { Searchbar } from "../Searchbar";

const WONDER_WOMAN_POSTER_URL =
  "https://i.ebayimg.com/images/g/k70AAOSwRYpZij1X/s-l500.jpg";

export function Movies({ activeTab }) {
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
            <MovieItem
              title="Wonder Woman"
              rating={4}
              posterUrl={WONDER_WOMAN_POSTER_URL}
              movieLength={92}
            />

            <MovieItem
              title="Wonder Woman"
              rating={4}
              posterUrl={WONDER_WOMAN_POSTER_URL}
              movieLength={92}
            />

            <MovieItem
              title="Wonder Woman"
              rating={4}
              posterUrl={WONDER_WOMAN_POSTER_URL}
              movieLength={92}
            />

            <MovieItem
              title="Wonder Woman"
              rating={4}
              posterUrl={WONDER_WOMAN_POSTER_URL}
              movieLength={92}
            />

            <MovieItem
              title="Wonder Woman"
              rating={4}
              posterUrl={WONDER_WOMAN_POSTER_URL}
              movieLength={92}
            />

            <MovieItem
              title="Wonder Woman"
              rating={4}
              posterUrl={WONDER_WOMAN_POSTER_URL}
              movieLength={92}
            />

            <MovieItem
              title="Wonder Woman"
              rating={4}
              posterUrl={WONDER_WOMAN_POSTER_URL}
              movieLength={92}
            />

            <MovieItem
              title="Wonder Woman"
              rating={4}
              posterUrl={WONDER_WOMAN_POSTER_URL}
              movieLength={92}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
