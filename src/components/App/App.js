import { useState, useEffect } from 'react';

import "./App.css";

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import MovieDetails from '../MovieDetails/MovieDetails';

import mockMovieData from '../../mockData/mockMovieData';
import { AppContext } from '../Context/AppContext';

const App = () => {
	const [ movies, setMovies] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ moviesNumber, setMoviesNumber ] = useState(0);
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);
	const [movie, setMovie] = useState({});

	const appContext = {
		moviesContext: {
			movies,
			setMovies,
			moviesNumber,
			setMoviesNumber
		},
		movieContext: {
			movie,
			setMovie
		},
		navigationContext: {
			isHeaderVisible,
			setIsHeaderVisible
		}
	};

	const getMovieData = () => {
		return new Promise((resolve) => {
			setTimeout(()=> {
				resolve(mockMovieData);
			}, 2500);
		});
	};

	useEffect(() => {
		console.log("Fetching data");
		setIsLoading(true);
		getMovieData().then((fetchedData) => {
			setMovies(fetchedData);
			setMoviesNumber(fetchedData.length)
			setIsLoading(false);
		});
	}, []);

	let fetchedMovieContent =<div className='loading-message__container '><h2 className="loading-message">Loading...</h2></div> ;

	if (!isLoading) {
		fetchedMovieContent = (
			<>
				<Main /> 
			</>
		)
	}
	return (
		<AppContext.Provider value={appContext}>
			{isHeaderVisible? <Header/> : <header><MovieDetails/></header>}
			{fetchedMovieContent}
			<Footer />
		</AppContext.Provider>
	);
};

export default App;
