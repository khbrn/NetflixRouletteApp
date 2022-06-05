import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MovieList = (props) => {
	return (
		<ErrorBoundary movieData={props.moviesData}>
			<ul className="movie-list">
				{props.moviesData.map((movie) => (
					<li key={movie.id}>
						<MovieCard movie={movie} />
					</li>
				))}
			</ul>
		</ErrorBoundary>
	);
};

export default MovieList;
