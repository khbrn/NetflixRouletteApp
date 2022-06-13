import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import { AppContext } from '../Context/AppContext';

import { useContext} from 'react';

const MovieList = () => {
	const { moviesContext } = useContext(AppContext);
	
	return (
		<>
			<ul className="movie-list">
				{moviesContext.movies.map((movie, index) => 
					(
					<li key={index}>
						<MovieCard movie={movie} />
					</li>
					)
				)}
			</ul>
		</>
	);
};

export default MovieList;
