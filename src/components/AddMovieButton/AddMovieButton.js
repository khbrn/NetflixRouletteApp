import "./AddMovieButton.css";

const AddMovieButton = (props) => {
  return (
    <button className="button--transparent" onClick={props.addMovieHandler}>
      + add movie
    </button>
  );
};

export default AddMovieButton;
