import mockSortOptions from '../../mockData/mockSortOptions';
import './SortMovies.css';

const SortMovies = () => {
	return (
		<div className="sort-movie">
			<label htmlFor="sort-movie" className="sort-movie__label">
				Sort by:
			</label>
			<select name="sort-movie" id="sort-movie" className="sort-movie__dropdown">
				{mockSortOptions.map((sortOption) => <option value={sortOption}>{sortOption}</option>)}
			</select>
		</div>
	);
};

export default SortMovies;
