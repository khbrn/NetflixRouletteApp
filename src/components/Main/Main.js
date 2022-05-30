import './Main.css';
import MovieList from '../MovieList/MovieList';

const Main = () => {
	return (
		<main>
			<div className="main__separator" />
			<div className="main__container">
				<MovieList />
			</div>
		</main>
	);
};

export default Main;
