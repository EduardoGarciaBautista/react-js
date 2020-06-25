import React, {useState} from 'react';
import '../assets/styles/components/Register.scss'
import {connect} from 'react-redux';
import {registerRequest} from '../Actions/'

const Register = (props) => {
    const [form, setForm] = useState({
        name: '',
        mail: '',
        password: ''
    });
    const handleInput = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.registerRequest(form
        );
        props.history.push('/');
    }
    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input name="name" className="input" type="text" placeholder="Nombre" onChange={handleInput}/>
                    <input name="mail" className="input" type="text" placeholder="Correo" onChange={handleInput}/>
                    <input name="password" className="input" type="password" placeholder="Contraseña" onChange={handleInput}/>
                    <button className="button">Registrarme</button>
                </form>
            </section>
        </section>
    )
}

const mapDispatchToProps = {
    registerRequest
}

export default connect(null, mapDispatchToProps)(Register);
