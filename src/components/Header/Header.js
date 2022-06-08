import AppLogo from '../AppLogo/AppLogo';
import AddMovie from '../AddMovie/AddMovie';

import './Header.css';
import SearchMovie from '../SearchMovie/SearchMovie';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Header = () => {
	return (
		<header>
			<div className="header__background" />
			<div className="header__elements">
				<div className="header__first-elements">
					<ErrorBoundary>
						<AppLogo />
						<AddMovie />
					</ErrorBoundary>
				</div>
				<ErrorBoundary>
					<SearchMovie />
				</ErrorBoundary>
			</div>
		</header>
	);
};

export default Header;
