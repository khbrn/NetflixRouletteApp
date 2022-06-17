import "./MoviesSearchBar.css";

const MoviesSearchBar = () => {
  return (
    <div className="search-movie">
      <h1 className="search-movie__header">Find your movie</h1>
      <form className="search-movie__form">
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="search-movie__bar"
        />
        <button type="submit" className="button__submit">
          <p>Search</p>
        </button>
      </form>
    </div>
  );
};

export default MoviesSearchBar;
