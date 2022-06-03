import './ContextMenu.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const ContextMenu = (props) => {
	const deleteMovie = () => {
		props.setIsContextMenuVisible(false);
		props.setIsDeleteMovieDialogVisible(true);
	};
	return (
		<div className="context-menu">
			<button className="close-icon" onClick={() => props.setIsContextMenuVisible(false)}>
				<Icon path={mdiClose} size={'18px'} color="white" />
			</button>
			<ul className="context-menu__list">
				<li className="context-menu__list__edit">Edit</li>
				<li className="context-menu__list__delete" onClick={deleteMovie}>
					Delete
				</li>
			</ul>
		</div>
	);
};

export default ContextMenu;
