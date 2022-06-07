import './Main.css';
import MovieList from '../MovieList/MovieList';
import SortMovies from '../SortMovies/SortMovies';
import FilterGenre from '../FilterGenre/FilterGenre';
import FilterGenreResult from '../FilterGenreResult/FilterGenreResult';
import mockMovieData from '../../mockData/mockMovieData';
import { useState } from 'react';

const Main = () => {
	const [ movieCounter, setMovieCounter ] = useState(mockMovieData.length);
	const [ moviesData, setMoviesData ] = useState(mockMovieData);
	return (
		<main>
			<div className="main__separator" />
			<div className="main__container">
				<div className="main__container__tools">
					<FilterGenre />
					<SortMovies />
				</div>
				<div className="progress-bar" />
				<FilterGenreResult movieCounter={movieCounter} />
				<MovieList moviesData={moviesData} setMoviesData={setMoviesData} />
			</div>
		</main>
	);
};

export default Main;
