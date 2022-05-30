import './Main.css';
import MovieList from '../MovieList/MovieList';
import SortMovies from '../SortMovies/SortMovies';
import FilterGenre from '../FilterGenre/FilterGenre';
import FilterGenreResult from '../FilterGenreResult/FilterGenreResult';

const Main = () => {
	return (
		<main>
			<div className="main__separator" />
			<div className="main__container">
				<div className="main__container__tools">
					<FilterGenre />
					<SortMovies />
				</div>
				<div className="progress-bar" />
				<FilterGenreResult movieCounter={39} />
				<MovieList />
			</div>
		</main>
	);
};

export default Main;
