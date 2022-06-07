import './MovieDialog.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { useState } from 'react';

const MovieDialog = (props) => {
	const dialogInfo = {
		dialogTitle: props.movie ? 'Edit Movie' : 'Add Movie',
		movieTitle: props.movie ? props.movie.title : '',
		releaseYear: props.movie ? props.movie.release_date : '',
		posterLink: props.movie ? props.movie.poster_path : '',
		rating: props.movie ? props.movie.vote_average : '',
		genre: props.movie ? props.movie.genres : '',
		duration: props.movie ? props.movie.runtime : '',
		description: props.movie ? props.movie.overview : ''
	};
	const [ dialogData, setDialogData ] = useState(dialogInfo);

	const closeDialog = () => {
		props.setMovieDialogVisibility(false);
	};

	const resetDataDialog = () => {
		setDialogData(dialogInfo);
	};

	return (
		<div className="movie-dialog__container">
			<div className="movie-dialog">
				<button className="close-button" onClick={closeDialog}>
					<Icon path={mdiClose} size={'28px'} color="white" />
				</button>
				<h2>{dialogData.dialogTitle}</h2>
				<form>
					<div className="movie-dialog__form-row">
						<div className="movie-dialog__form__container">
							<label htmlFor="title">Title</label>
							<input
								type="text"
								id="title"
								name="title"
								className="movie-dialog__form-elems-left"
								placeholder="Add Title"
								onChange={(event) => {
									setDialogData({ ...dialogData, movieTitle: event.target.value });
								}}
								value={dialogData.movieTitle}
							/>
						</div>
						<div className="movie-dialog__form__container">
							<label htmlFor="release">Release date</label>
							<input
								type="date"
								id="release"
								name="release"
								className="movie-dialog__form-elems-right"
								placeholder="Select date"
								onChange={(event) => {
									setDialogData({ ...dialogData, releaseYear: event.target.value });
								}}
								value={dialogData.releaseYear}
							/>
						</div>
					</div>
					<div className="movie-dialog__form-row">
						<div className="movie-dialog__form__container">
							<label htmlFor="url">Movie url</label>
							<input
								type="text"
								id="url"
								name="url"
								className="movie-dialog__form-elems-left"
								placeholder="https://"
								onChange={(event) => {
									setDialogData({ ...dialogData, posterLink: event.target.value });
								}}
								value={dialogData.posterLink}
							/>
						</div>
						<div className="movie-dialog__form__container">
							<label htmlFor="rating">Rating</label>
							<input
								type="text"
								id="rating"
								name="rating"
								className="movie-dialog__form-elems-right"
								placeholder="7.8"
								onChange={(event) => {
									setDialogData({ ...dialogData, rating: event.target.value });
								}}
								value={dialogData.rating}
							/>
						</div>
					</div>
					<div className="movie-dialog__form-row">
						<div className="movie-dialog__form__container">
							<label htmlFor="url">Genre</label>
							<input
								type="text"
								id="url"
								name="url"
								className="movie-dialog__form-elems-right"
								placeholder="Select Genre"
								onChange={(event) => {
									setDialogData({ ...dialogData, genre: event.target.value });
								}}
								value={dialogData.genre}
							/>
						</div>
						<div className="movie-dialog__form__container">
							<label htmlFor="rating">Runtime</label>
							<input
								type="text"
								id="runtime"
								name="runtime"
								className="movie-dialog__form-elems-left"
								placeholder="minutes"
								onChange={(event) => {
									setDialogData({ ...dialogData, duration: event.target.value });
								}}
								value={dialogData.duration}
							/>
						</div>
					</div>
					<div className="movie-dialog__form-row">
						<div className="movie-dialog__form__container">
							<label htmlFor="url">Overview</label>
							<textarea
								type="text"
								id="overview"
								name="overview"
								className="movie-dialog__form-elem"
								placeholder="Movie description"
								onChange={(event) => {
									setDialogData({ ...dialogData, description: event.target.value });
								}}
								value={dialogData.description}
							/>
						</div>
					</div>
				</form>
				<div className="movie-dialog__buttons">
					<button className="button__reset" onClick={resetDataDialog}>
						Reset
					</button>
					<button className="button__confirm">Submit</button>
				</div>
			</div>
		</div>
	);
};

export default MovieDialog;
