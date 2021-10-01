import React from 'react';
import PropTypes from 'prop-types';

import "./index.scss";

Register.propTypes = {

};

function Register(props) {

    function onChange(value) {
        console.log(value)
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

                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="far fa-address-card"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="fas fa-venus-mars"></i></span>
                    </div>
                    <div className="radio-form">
                        <div className="radio-form___button">
                            <input className="radio-form___button--input" type="radio" name="gender" value="male" />
                            <span>Male</span>
                        </div>
                        <div className="radio-form___button">
                            <input className="radio-form___button--input" type="radio" name="gender" value="female" />
                            <span>Female</span>
                        </div>
                        <div className="radio-form___button">
                            <input className="radio-form___button--input" type="radio" name="gender" value="other" />
                            <span>Other</span>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Sign Up" className="btn float-right login_btn" />
                </div>
            </form>
        </div>
    );
}

export default Register;