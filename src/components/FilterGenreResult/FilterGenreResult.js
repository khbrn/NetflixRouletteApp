import './FilterGenreResult.css';

const FilterGenreResult = (props) => {
	return (
		<p className="filter-genre-result">
			<span>{props.movieCounter}</span> movies found
		</p>
	);
};

export default FilterGenreResult;
