import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/user-icon.png';
import logo2 from '../assets/static/logo-platzi-video-BW2.png';

const Header = () => {
    return <header className="header">
        <img className="header__img" src={logo2} alt=""/>

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={logo} alt="User"/>
                <p>Perfil</p>
                <ul>
                    <li>
                        <a href="#">Cuenta</a>
                    </li>
                    <li>
                        <a href="#">Cerrar Sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}
export default Header;
