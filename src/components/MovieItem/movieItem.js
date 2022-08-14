import "./styles.css";

export function MovieItem(props) {
  return (
    <div className="movie-item-container">
      <img className="poster" src={props.posterUrl} alt="Wonder Woman poster" />
      <div className="title"> {props.title} </div>
      <div className="rating-time-container">
        <span>{props.rating} stars</span>
        <span>{props.movieLength} min</span>
      </div>
    </div>
  );
}
