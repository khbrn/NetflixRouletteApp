import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

import { useState } from 'react';

const App = () => {
	const [ isHeaderVisible, setIsHeaderVisible ] = useState(true);

	return (
		<div className="app">
			{isHeaderVisible ? <Header /> : <></>}
			<Main setIsHeaderVisible={setIsHeaderVisible}/>
			<Footer />
		</div>
	);
};

export default App;
