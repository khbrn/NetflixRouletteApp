import './MovieCard.css';
import Icon from '@mdi/react';
import { mdiDotsVerticalCircle } from '@mdi/js';

const MovieCard = (props) => {
	return (
		<div className="movie-card__container ">
			<div className="movie-card">
				<Icon path={mdiDotsVerticalCircle} size={'36px'} className="menu-icon" />
				<img src={props.moviePosterLink} alt="Movie Poster" className="movie-card__image" />
			</div>
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
