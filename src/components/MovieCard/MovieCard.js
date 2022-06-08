import ContextMenu from '../ContextMenu/ContextMenu';

import PropTypes from 'prop-types';
import './MovieCard.css';
import { useState } from 'react'; 

import Icon from '@mdi/react';
import { mdiDotsVerticalCircle } from '@mdi/js';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import MovieDialog from '../MovieDialog/MovieDialog';
import MovieDetails from '../MovieDetails/MovieDetails';

const MovieCard = ({movie, setIsHeaderVisible}) => {
	const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
	const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
	const [isDeleteMovieDialogVisible, setIsDeleteMovieDialogVisible] = useState(false);
	const [isMovieDetailsVisible, setIsMovieDetailsVisible] = useState(false);

	const movieReleaseYear = new Date(movie.release_date).getFullYear();

	const handleMovieDetails = () => {
		setIsMovieDetailsVisible(true);
	}


	return (
		<>
		{isMovieDetailsVisible? <MovieDetails movie={movie} setIsMovieDetailsVisible={setIsMovieDetailsVisible} />: <></>}
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
