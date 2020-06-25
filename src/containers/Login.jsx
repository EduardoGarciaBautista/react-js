import React, {useState} from 'react';
import {connect} from 'react-redux'
import google from '../assets/static/google-icon.png';
import twitter from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss'
import {Link} from "react-router-dom";
import {loginRequest} from "../Actions";

const Login = (props) => {
    const [form, setForm] = useState({
        mail: '',
        password: null
    });
    const handleInput = (e) => {
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
        console.log(form);
    }
    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        placeholder="Correo"
                        name="mail"
                        onChange={handleInput}
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleInput}
                    />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={google} alt="icon"/> Inicia sesión con Google</div>
                    <div><img src={twitter} alt="icon2"/> Inicia sesión con Twitter</div>
                </section>

                <p className="login__container--register">No tienes ninguna cuenta
                    <Link to="/register">
                        Regístrate
                    </Link>
                </p>
            </section>
        </section>
    )
}
const mapDispatchToProps = {
    loginRequest
}

export default connect(null, mapDispatchToProps)(Login);
