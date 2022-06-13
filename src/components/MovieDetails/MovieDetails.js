import './MovieDetails.css';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

import { AppContext } from '../Context/AppContext';

import { useContext } from 'react';
import AppLogo from '../AppLogo/AppLogo';

const MovieDetails = () => {
	const { navigationContext, movieContext } = useContext(AppContext);
	const releaseYear = new Date(movieContext.movie.release_date).getFullYear();

	const timeConversion = (timeInMinutes) => {
		let hours = Math.floor(timeInMinutes / 60);
		let minutes = timeInMinutes % 60;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		return `${hours}h ${minutes}min`;
	};

	const handleSearchMovie = () => {
		navigationContext.setIsHeaderVisible(true);
	};

	return (
		<div className="movie-details">
			<div className="movie-details__nav">
				<AppLogo />
				<Icon path={mdiMagnify} size={'28px'} color="#F65261" rotate={90} onClick={handleSearchMovie} />
			</div>
			<div className="movie-details__main">
				<img src={movieContext.movie.poster_path} alt="poster" />
				<div className="movie-details__data">
					<div className="movie-details__data__first-row">
						<div className="movie-details__data-title">{movieContext.movie.title}</div>
						<div className="movie-details__data-rate">
							<p>{movieContext.movie.vote_average}</p>
						</div>
					</div>
					<div className="movie-details__data-genre">{movieContext.movie.genres.join(',')}</div>
					<div className="movie-details__data__second-row">
						<div className="movie-details__data-release-year">{releaseYear}</div>
						<div className="movie-details__data-duration">{timeConversion(movieContext.movie.runtime)}</div>
					</div>
					<div className="movie-details__data-overview">{movieContext.movie.overview}</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
