import './Main.css';
import MovieList from '../MovieList/MovieList';
import SortMovies from '../SortMovies/SortMovies';
import FilterGenre from '../FilterGenre/FilterGenre';
import FilterGenreResult from '../FilterGenreResult/FilterGenreResult';
import mockMovieData from '../../mockData/mockMovieData';
import { useState, useEffect } from 'react';

const Main = () => {
	const [ movieCounter, setMovieCounter ] = useState(0);
	const [ moviesData, setMoviesData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	const getMovieData = () => {
		return new Promise((resolve) => {
			setTimeout(()=> {
				resolve(mockMovieData);
			}, 1500);
		});
	};

	useEffect(() => {
		setIsLoading(true);
		getMovieData().then((fetchedData) => {
			setMoviesData(fetchedData);
			setMovieCounter(fetchedData.length);
			setIsLoading(false);
		});
	}, []);

	let fetchedMovieContent = <h2 className="loading-message">Loading...</h2>;

	if (!isLoading) {
		fetchedMovieContent = (
			<>
				<FilterGenreResult movieCounter={movieCounter} />
				<MovieList moviesData={moviesData} setMoviesData={setMoviesData} /> 
			</>
		)
	}

	return (
		<main>
			<div className="main__separator" />
			<div className="main__container">
				<div className="main__container__tools">
					<FilterGenre />
					<SortMovies />
				</div>
				<div className="progress-bar" />
				{fetchedMovieContent}
			</div>
		</main>
	);
};

export default Main;
