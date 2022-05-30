import './Main.css';
import MovieList from '../MovieList/MovieList';
import SortMovies from '../SortMovies/SortMovies';

const Main = () => {
	return (
		<main>
			<div className="main__separator" />
			<div className="main__container">
				<SortMovies />
				<MovieList />
			</div>
		</main>
	);
};

export default Main;
