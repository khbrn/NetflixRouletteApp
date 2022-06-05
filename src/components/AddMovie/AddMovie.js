import './AddMovie.css';

const AddMovie = (props) => {
	return (
		<button className="button--transparent" onClick={props.addMovieHandler}>
			+ add movie
		</button>
	);
};

export default AddMovie;
