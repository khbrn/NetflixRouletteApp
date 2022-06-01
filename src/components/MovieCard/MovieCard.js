import PropTypes from 'prop-types';
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

MovieCard.propTypes = {
	moviePosterLink: PropTypes.string.isRequired,
	movieTitle: PropTypes.string.isRequired,
	movieRelease: PropTypes.number.isRequired,
	movieGenre: PropTypes.string.isRequired
};

MovieCard.defaultProps = {
	moviePosterLink: 'https://c.tenor.com/04sSYbNQATUAAAAC/sad-face.gif',
	movieTitle: 'Oops! Something went wrong',
	movieGenre: ''
};

export default MovieCard;
