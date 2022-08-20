import "./styles.css";
import { Rating } from 'react-simple-star-rating';
import { favoritesIcons } from "../../icons";
// const [isLiked, setIsLiked] = useState(true);

export function MovieItem(props) {
  return (
    <div className="movie-item-container">
      <img className="poster" src={props.posterUrl} alt="Wonder Woman poster" />
      <div className="poster stack-top">
        <div className="favorites-icon">{favoritesIcons.UNLIKED}</div>
      </div>
      <div className="title"> {props.title} </div>
      <div className="rating-time-container">
        <span>{props.releaseDate}</span>
        {
          props.displayRating &&
          <Rating
            initialValue={props.rating / 2}
            readonly
            size={12}
            fullClassName="rating-full-stars"
            emptyClassName="rating-empty-stars"
          />
        }
      </div>
    </div>
  );
}
