import mockGenres from "../../mockData/mockGenres";
import "./FilterGenreOptionsList.css";

const FilterGenreOptionsList = () => {
  return (
    <ul className="filter-genre">
      {mockGenres.map((genre, index) => (
        <li key={index}>{genre}</li>
      ))}
    </ul>
  );
};

export default FilterGenreOptionsList;
