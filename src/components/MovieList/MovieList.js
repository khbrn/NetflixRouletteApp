import './MovieList.css';
import mockMovieData from '../../mockData/mockMovieData';
import MovieCard from '../MovieCard/MovieCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MovieList = () => {
	return (
		<ErrorBoundary movieData={mockMovieData}>
			<ul className="movie-list">
				{mockMovieData.map((mockMovie) => (
					<li key={mockMovie.id}>
						<MovieCard
							moviePosterLink={mockMovie.posterLink}
							movieTitle={mockMovie.title}
							movieRelease={mockMovie.releaseYear}
							movieGenre={mockMovie.genre}
						/>
					</li>
				))}
			</ul>
		</ErrorBoundary>
	);
};

export default MovieList;
