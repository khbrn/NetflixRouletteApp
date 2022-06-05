import ContextMenu from '../ContextMenu/ContextMenu';

import PropTypes from 'prop-types';
import './MovieCard.css';
import { useState } from 'react'; 

import Icon from '@mdi/react';
import { mdiDotsVerticalCircle } from '@mdi/js';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import MovieDialog from '../MovieDialog/MovieDialog';

const MovieCard = ({movie}) => {
	const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
	const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
	const [isDeleteMovieDialogVisible, setIsDeleteMovieDialogVisible] = useState(false);


	return (
		<>
		{isMovieDialogVisible ? <MovieDialog setMovieDialogVisibility={setIsMovieDialogVisible} movie={movie}/> : <></>}
		{isDeleteMovieDialogVisible ? <DeleteMovie setDeleteDialogVisibility={setIsDeleteMovieDialogVisible}/> : <></>}
		<div className="movie-card__container ">
			<div className="movie-card">
				<Icon path={mdiDotsVerticalCircle} size={'36px'} className="menu-icon" onClick={() => setIsContextMenuVisible(true)}/>
				{isContextMenuVisible ?<ContextMenu setIsContextMenuVisible={setIsContextMenuVisible} setDeleteDialogVisibility={setIsDeleteMovieDialogVisible} setMovieDialogVisibility={setIsMovieDialogVisible}/> : <></>}
				<img src={movie.posterLink} alt="Movie Poster" className="movie-card__image" />
			</div>
			<div className="movie-card__information">
				<div className="movie-card__information-title">{movie.title}</div>
				<div className="movie-card__information-year">
					<p>{movie.releaseYear}</p>
				</div>
			</div>
			<p className="movie-card__genre">{movie.genre}</p>
		</div>
		</>
	);
};

MovieCard.propTypes = {
	posterLink: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	releaseYear: PropTypes.number.isRequired,
	genre: PropTypes.string.isRequired
};

MovieCard.defaultProps = {
	posterLink: 'https://c.tenor.com/04sSYbNQATUAAAAC/sad-face.gif',
	title: 'Oops! Something went wrong',
	genre: ''
};

export default MovieCard;
