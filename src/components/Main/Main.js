import './Main.css';
import MovieList from '../MovieList/MovieList';
import SortMovies from '../SortMovies/SortMovies';
import FilterGenre from '../FilterGenre/FilterGenre';

const Main = () => {
	return (
		<main>
			<div className="main__separator" />
			<div className="main__container">
				<div className="main__container__tools">
					<FilterGenre />
					<SortMovies />
				</div>
				<MovieList />
			</div>
		</main>
	);
};

export default Main;
