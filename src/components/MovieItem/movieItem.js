import "./styles.css";
// import { HiHeart, HiOutlineHeart } from 'react-icons/bs';
import { Rating } from 'react-simple-star-rating';

export function MovieItem(props) {
  return (
    <div className="movie-item-container">
      <img className="poster" src={props.posterUrl} alt="Wonder Woman poster" />
      <div className="title"> {props.title} </div>
      <div className="rating-time-container">
        <Rating
          initialValue={props.rating / 2}
          readonly
          size={12}
          fullClassName="rating-full-stars"
          emptyClassName="rating-empty-stars"
        />
        <span>{props.releaseDate}</span>
      </div>
    </div>
  );
}
