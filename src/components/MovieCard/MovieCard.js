import './MovieCard.css';

const MovieCard = (props) => {
	return (
		<div className="movie-card ">
			<img src={props.moviePosterLink} alt="Movie Poster" />
			<div className="movie-card__information">
				<div className="movie-card__information-title">{props.movieTitle}</div>
				<div className="movie-card__information-year">
					<p>{props.movieRelease}</p>
				</div>
			</div>
			<p className="movie-card__genre">{props.movieGenre}</p>
		</div>
	);
};

export default MovieCard;
