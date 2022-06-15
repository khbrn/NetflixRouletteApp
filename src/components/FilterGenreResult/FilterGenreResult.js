import './FilterGenreResult.css';
import PropTypes from 'prop-types';

const FilterGenreResult = (props) => {
	return (
		<p className="filter-genre-result">
			<span>{props.movieCounter}</span> movies found
		</p>
	);
};

FilterGenreResult.propTypes = {
	movieCounter: PropTypes.number.isRequired
};

FilterGenreResult.defaultProps = {
	movieCounter: 0
};

export default FilterGenreResult;
