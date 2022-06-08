import './Main.css';
import MovieList from '../MovieList/MovieList';
import SortMovies from '../SortMovies/SortMovies';
import FilterGenre from '../FilterGenre/FilterGenre';
import FilterGenreResult from '../FilterGenreResult/FilterGenreResult';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Main = () => {
	const movieCounter = 39;
	return (
		<main>
			<ErrorBoundary>
				<div className="main__separator" />
				<div className="main__container">
					<div className="main__container__tools">
						<FilterGenre />
						<SortMovies />
					</div>
					<div className="progress-bar" />
					<ErrorBoundary>
						<FilterGenreResult movieCounter={movieCounter} />
						<MovieList />
					</ErrorBoundary>
				</div>
			</ErrorBoundary>
		</main>
	);
};

export default Main;
