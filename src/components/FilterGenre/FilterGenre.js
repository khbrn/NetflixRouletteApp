import mockGenres from '../../mockData/mockGenres';
import './FilterGenre.css';

const FilterGenre = () => {
	return <ul className="filter-genre">{mockGenres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>;
};

export default FilterGenre;
