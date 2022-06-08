import './MovieDetails.css';

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const MovieDetails = ({ movie, setIsMovieDetailsVisible }) => {
	const releaseYear = new Date(movie.release_date).getFullYear();

	const timeConversion = (timeInMinutes) => {
		let hours = Math.floor(timeInMinutes / 60);
		let minutes = timeInMinutes % 60;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		return `${hours}h ${minutes}min`;
	};

	return (
		<div className="movie-details">
			<div className="movie-details__nav">
				<Icon
					path={mdiMagnify}
					size={'28px'}
					color="#F65261"
					rotate={90}
					onClick={() => setIsMovieDetailsVisible(false)}
				/>
			</div>
			<div className="movie-details__main">
				<img src={movie.poster_path} alt="poster" />
				<div className="movie-details__data">
					<div className="movie-details__data__first-row">
						<div className="movie-details__data-title">{movie.title}</div>
						<div className="movie-details__data-rate">
							<p>{movie.vote_average}</p>
						</div>
					</div>
					<div className="movie-details__data-genre">{movie.genres.join(',')}</div>
					<div className="movie-details__data__second-row">
						<div className="movie-details__data-release-year">{releaseYear}</div>
						<div className="movie-details__data-duration">{timeConversion(movie.runtime)}</div>
					</div>
					<div className="movie-details__data-overview">{movie.overview}</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
