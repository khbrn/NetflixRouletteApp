import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

const App = () => {
	return (
		<ErrorBoundary>
			<div className="app">
				<Header />
				<Main />
				<Footer />
			</div>
		</ErrorBoundary>
	);
};

export default App;
