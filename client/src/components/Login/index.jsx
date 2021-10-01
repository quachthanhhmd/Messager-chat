import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import "./index.scss";

Login.propTypes = {

};

function Login(props) {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    //const location = useLocation();


    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            //const { from } = location.state || { from: { pathname: "/" } };

        }
    }

    return (
        <div className="card-body">
            <form>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="username" />

                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="password" />
                </div>
                <div className="row align-items-center remember">
                    <input type="checkbox" />Remember Me
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="btn float-right login_btn" />
                </div>
            </form>
        </div>
    );
}

export default Login;