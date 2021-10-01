import React from 'react';
import PropTypes from 'prop-types';

import Login from "../../components/Login";

import "./index.scss";
import Register from '../../components/Register';
import { useLocation } from 'react-router-dom';

Authenticate.propTypes = {
    
};

function Authenticate(props) {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="login-main">
        <div className="d-flex justify-content-center">
            <div className="card">
                <div className="card-header">
                    <h3>Sign In</h3>
                    <div className="d-flex justify-content-end social-icon">
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                {/* <Login/> */}
                {location.pathname === "register"? <Register/> : <Login/>}
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        Don't have an account?<a href="#">Sign Up</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Authenticate;