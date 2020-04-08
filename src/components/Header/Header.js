import React from 'react';
import Logo from '../../logo.svg'
import './Header.css';


const Header = () => {
    const [isOpenMenu, setMenuState] = React.useState(false);
    const toggleMenu = () => {
        setMenuState(!isOpenMenu);
    };

    return (
        <header className='Header'>
            <div className="logo">
                <a href="#">
                    <img src={Logo} alt="logo" className="logo__img"/>
                </a>
            </div>
            <nav className={`nav desktop-visible ${isOpenMenu ? "nav--active" : ""}`}>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#">Sign In</a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
            </nav>
            <div className="menu mobile-visible">
                <button className="menu__button" onClick={toggleMenu}>
                    <span className="menu__button-item"></span>
                    <span className="menu__button-item"></span>
                    <span className="menu__button-item"></span>
                </button>
            </div>
        </header>
    )
};

export default Header;
