import AppLogo from '../AppLogo/AppLogo';
import AddMovie from '../AddMovie/AddMovie';

import './Header.css';
import SearchMovie from '../SearchMovie/SearchMovie';

const Header = () => {
	return (
		<header>
			<div className="header__background" />
			<div className="header__elements">
				<div className="header__first-elements">
					<AppLogo />
					<AddMovie />
				</div>
				<SearchMovie />
			</div>
		</header>
	);
};

export default Header;
