import './MovieList.css';
import mockMovieData from '../../mockData/mockMovieData';
import MovieCard from '../MovieCard/MovieCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MovieList = () => {
	return (
		<ul className="movie-list">
			{mockMovieData.map((mockMovie) => (
				<li key={mockMovie.id}>
					<ErrorBoundary>
						<MovieCard
							moviePosterLink={mockMovie.posterLink}
							movieTitle={mockMovie.title}
							movieRelease={mockMovie.releaseYear}
							movieGenre={mockMovie.genre}
						/>
					</ErrorBoundary>
				</li>
			))}
		</ul>
	);
};

export default MovieList;
