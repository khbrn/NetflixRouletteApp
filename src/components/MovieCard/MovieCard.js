import ContextMenu from '../ContextMenu/ContextMenu';

import PropTypes from 'prop-types';
import './MovieCard.css';
import { useState } from 'react'; 

import Icon from '@mdi/react';
import { mdiDotsVerticalCircle } from '@mdi/js';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import MovieDialog from '../MovieDialog/MovieDialog';

const MovieCard = (props) => {
	const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
	const [isMovieDialogVisible, setIsMovieDialogVisible] = useState(false);
	const [isDeleteMovieDialogVisible, setIsDeleteMovieDialogVisible] = useState(false);


	return (
		<>
		{isMovieDialogVisible ? <MovieDialog setMovieDialogVisibility={setIsMovieDialogVisible}/> : <></>}
		{isDeleteMovieDialogVisible ? <DeleteMovie setDeleteDialogVisibility={setIsDeleteMovieDialogVisible}/> : <></>}
		<div className="movie-card__container ">
			<div className="movie-card">
				<Icon path={mdiDotsVerticalCircle} size={'36px'} className="menu-icon" onClick={() => setIsContextMenuVisible(true)}/>
				{isContextMenuVisible ?<ContextMenu setIsContextMenuVisible={setIsContextMenuVisible} setDeleteDialogVisibility={setIsDeleteMovieDialogVisible} setMovieDialogVisibility={setIsMovieDialogVisible}/> : <></>}
				<img src={props.moviePosterLink} alt="Movie Poster" className="movie-card__image" />
			</div>
			<div className="movie-card__information">
				<div className="movie-card__information-title">{props.movieTitle}</div>
				<div className="movie-card__information-year">
					<p>{props.movieRelease}</p>
				</div>
			</div>
			<p className="movie-card__genre">{props.movieGenre}</p>
		</div>
		</>
	);
};

MovieCard.propTypes = {
	moviePosterLink: PropTypes.string.isRequired,
	movieTitle: PropTypes.string.isRequired,
	movieRelease: PropTypes.number.isRequired,
	movieGenre: PropTypes.string.isRequired
};

MovieCard.defaultProps = {
	moviePosterLink: 'https://c.tenor.com/04sSYbNQATUAAAAC/sad-face.gif',
	movieTitle: 'Oops! Something went wrong',
	movieGenre: ''
};

export default MovieCard;
