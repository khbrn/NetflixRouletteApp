import MovieCard from '../MovieCard/MovieCard';
import mockMovieData from '../../mockData/mockMovieData';

import './Main.css';

const Main = () => {
	const moviePosterLink = mockMovieData.posterLink;
	const movieTitle = mockMovieData.title;
	const movieRelease = mockMovieData.releaseYear;
	const movieGenre = mockMovieData.genre;

	return (
		<main>
			<div className="main__separator" />
			<div className="main__container">
				<MovieCard
					movieTitle={movieTitle}
					moviePosterLink={moviePosterLink}
					movieRelease={movieRelease}
					movieGenre={movieGenre}
				/>
			</div>
		</main>
	);
};

export default Main;
