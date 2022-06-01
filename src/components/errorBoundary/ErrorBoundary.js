import "./ErrorBoundary.css"

const ErrorBoundary = (props) => {
	const OopsText = () => <h2 className="error-boundary">Oops, something went wrong... We are doing our best to fix the issue</h2>;

    let isMovieDataOk = props.movieData.length;
    return <>{ isMovieDataOk ? props.children : <OopsText />}</>
};


export default ErrorBoundary;