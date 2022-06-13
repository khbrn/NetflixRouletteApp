import './FilterGenreResult.css';
import { AppContext } from '../Context/AppContext';

import PropTypes from 'prop-types';
import { useContext } from 'react';

const FilterGenreResult = () => {
	const { moviesContext } = useContext(AppContext);

	return (
		<p className="filter-genre-result">
			<span>{moviesContext.moviesNumber}</span> movies found
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
