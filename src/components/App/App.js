import { useState, useEffect } from 'react';
import "./App.css";

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import MovieDetails from '../MovieDetails/MovieDetails';

import { AppContext } from '../../hooks/AppContext';
import { useDummyHttp } from '../../hooks/DummyHttp';

const App = () => {
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);
	const [movie, setMovie] = useState({});
	const [isLoading,movies,setMovies, moviesNumber, setMoviesNumber ] = useDummyHttp();

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

	let fetchedMovieContent =<div className='loading-message__container '><h2 className="loading-message">Loading...</h2></div> ;

	if (!isLoading) {
		fetchedMovieContent = (
			<>
				<Main /> 
			</>
		)
	}
	return (
		<ErrorBoundary>
		<AppContext.Provider value={appContext}>
			{isHeaderVisible? <Header/> : <header><MovieDetails/></header>}
			{fetchedMovieContent}
			<Footer />
		</AppContext.Provider>
		</ErrorBoundary>
	);
};

export default App;
