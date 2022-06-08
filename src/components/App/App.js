import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

const App = () => {
	return (
		<div className="app">
			<ErrorBoundary>
				<Header />
			</ErrorBoundary>
			<ErrorBoundary>
				<Main />
			</ErrorBoundary>
			<ErrorBoundary>
				<Footer />
			</ErrorBoundary>
		</div>
	);
};

export default App;
