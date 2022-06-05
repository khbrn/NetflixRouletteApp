import './MovieDialog.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const MovieDialog = (props) => {
	const closeDialog = () => {
		props.setMovieDialogVisibility(false);
	};

	return (
		<div className="movie-dialog__container">
			<div className="movie-dialog">
				<button className="close-button" onClick={closeDialog}>
					<Icon path={mdiClose} size={'28px'} color="white" />
				</button>
				<h2>{props.movie ? 'Edit Movie' : 'Add Movie'}</h2>
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
								value={props.movie ? props.movie.title : undefined}
							/>
						</div>
						<div className="movie-dialog__form__container">
							<label htmlFor="release">Release date</label>
							<input
								type="date"
								id="release"
								name="release"
								className="movie-dialog__form-elems-right"
								value={props.movie ? props.movie.releaseYear : undefined}
								placeholder="Select date"
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
								value={props.movie ? props.movie.posterLink : undefined}
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
								value={props.movie ? props.movie.rating : undefined}
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
								value={props.movie ? props.movie.genre : undefined}
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
								value={props.movie ? props.movie.duration : undefined}
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
								value={props.movie ? props.movie.description : undefined}
							/>
						</div>
					</div>
				</form>
				<div className="movie-dialog__buttons">
					<button className="button__reset">Reset</button>
					<button className="button__confirm">Submit</button>
				</div>
			</div>
		</div>
	);
};

export default MovieDialog;
