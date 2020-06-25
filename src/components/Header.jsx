import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/user-icon.png';
import logo2 from '../assets/static/logo-platzi-video-BW2.png';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import gravatar from "../Utils/gravatar";
import {logOutRequest} from "../Actions";

const Header = (props) => {
    const {user} = props;
    console.log(user);
    const hasUser = !!user;
    const hanldeLogOut = (e) => {
        e.preventDefault();
        props.logOutRequest({})
    }

    return <header className="header">
        <Link to="/">
            <img className="header__img" src={logo2} alt=""/>
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                {hasUser ?
                    <img src={gravatar(user.mail)} alt={user.mail}/>
                    : <img src={logo} alt="User"/>
                }
                <p>Perfil</p>
                <ul>
                    {hasUser ?
                        <li>
                            <a href="#">{user.name}</a>
                        </li> :
                        null

                    }
                    {hasUser ?
                        <li>
                            <a href="#" onClick={hanldeLogOut}>Cerrar sesion</a>
                        </li> :
                        <li>
                            <Link to="/login">Inicial sesion</Link>

                        </li>
                    }

                    <li>
                        <a href="#">Cuenta</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}
const mapDispatchToProps = {
    logOutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
