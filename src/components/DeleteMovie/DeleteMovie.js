import './DeleteMovie.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const DeleteMovie = (props) => {
	const closeDialog = () => {
		props.setDeleteDialogVisibility(false);
	};

	return (
		<div className="delete-movie__container">
			<div className="delete-movie">
				<button className="close-button" onClick={closeDialog}>
					<Icon path={mdiClose} size={'28px'} color="white" />
				</button>
				<h2>Delete movie</h2>
				<p>Are you sure you want to delete this movie?</p>
				<div className="delete-movie__button">
					<button className="button__confirm">Confirm</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteMovie;
