import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MovieList = (props) => {
	return (
		<ul className="movie-list">
			{props.moviesData.map((movie, index) => (
				<li key={index}>
					<MovieCard movie={movie} />
				</li>
			))}
		</ul>
	);
};

export default MovieList;
