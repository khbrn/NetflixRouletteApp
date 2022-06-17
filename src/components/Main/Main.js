import './Main.css';
import MoviesList from '../MoviesList/MoviesList';
import MoviesSortDropdown from '../MoviesSortDropdown/MoviesSortDropdown';
import FilterGenreOptionsList from '../FilterGenreOptionsList/FilterGenreOptionsList';
import FilterGenreResult from '../FilterGenreResult/FilterGenreResult';

const Main = () => {
	return (
		<main>
			<div className="main__separator" />
			<div className="main__container">
				<div className="main__container__tools">
					<FilterGenreOptionsList />
					<MoviesSortDropdown />
				</div>
				<div className="progress-bar" />
				<FilterGenreResult />
				<MoviesList />
			</div>
		</main>
	);
};

export default Main;
