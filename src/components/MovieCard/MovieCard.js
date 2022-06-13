import './MovieCard.css';
import Icon from '@mdi/react';
import { mdiDotsVerticalCircle } from '@mdi/js';

import ContextMenu from '../ContextMenu/ContextMenu';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import MovieDialog from '../MovieDialog/MovieDialog';
import { AppContext } from '../Context/AppContext';

import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';


const MovieCard = ({movie}) => {
	const { navigationContext, movieContext } = useContext(AppContext);

	const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
	const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
	const [isDeleteMovieDialogVisible, setIsDeleteMovieDialogVisible] = useState(false);

	const movieReleaseYear = new Date(movie.release_date).getFullYear();

	const handleMovieDetails = () => {
		movieContext.setMovie(movie);
		navigationContext.setIsHeaderVisible(false);
	}

	return (
		<>
		{isMovieDialogVisible ? <MovieDialog setMovieDialogVisibility={setIsMovieDialogVisible} movie={movie}/> : <></>}
		{isDeleteMovieDialogVisible ? <DeleteMovie setDeleteDialogVisibility={setIsDeleteMovieDialogVisible} movie={movie}/> : <></>}
		<div className="movie-card__container ">
			<div className="movie-card">
				<Icon path={mdiDotsVerticalCircle} size={'36px'} className="menu-icon" onClick={() => setIsContextMenuVisible(true)}/>
				{isContextMenuVisible ?<ContextMenu setIsContextMenuVisible={setIsContextMenuVisible} setDeleteDialogVisibility={setIsDeleteMovieDialogVisible} setMovieDialogVisibility={setIsMovieDialogVisible}/> : <></>}
				<img src={movie.poster_path} alt="Movie Poster" className="movie-card__image" onClick={handleMovieDetails} />
			</div>
			<div className="movie-card__information">
				<div className="movie-card__information-title">{movie.title}</div>
				<div className="movie-card__information-year">
					<p>{movieReleaseYear}</p>
				</div>
			</div>
			<p className="movie-card__genre">{movie.genres.join(', ')}</p>
		</div>
		</>
	);
};

MovieCard.propTypes = {
	posterLink: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	releaseYear: PropTypes.string.isRequired,
	genre: PropTypes.string.isRequired
};

MovieCard.defaultProps = {
	posterLink: 'https://c.tenor.com/04sSYbNQATUAAAAC/sad-face.gif',
	title: 'Oops! Something went wrong',
	releaseYear: '1969-12-31',
	genre: ''
};

export default MovieCard;
