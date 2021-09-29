import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss";


MessageBox.propTypes = {

};

function MessageBox(props) {
    return (
        <div className="message-box">
            <div className="message-box___header">
                <div className="message-box___header___information">
                    <div className="message-box___header___information--image">
                        <img src="/avatar.png" alt="avatar" />
                        <div className="message-box___header___information--image___active">

                        </div>
                    </div>
                    <div className="message-box___header___information--summary">
                        <div className="message-box___header___information--summary___name">
                            Quách Hải Thanh
                        </div>
                        <div className="message-box___header___information--summary___active">
                            Active Now
                        </div>
                    </div>
                </div>
            </div>
            <div className="message-box___box">
                {
                    [...Array(15)].map((_, id) => (
                        <div className="message-box___box--sender">
                            Hello, my name is Thanh  asda asdasd asda sda sd a sdasd as da sd asd  asd as d
                        </div>

                    ))
                }

            </div>

            <div className="message-box___chat-box">
                <div className="message-box___chat-box___icon-list">
                    <img className="message-box___chat-box___icon-list--icon" src="/plus.svg" alt="plus" />
                    <img className="message-box___chat-box___icon-list--icon" src="/more-image.png" alt="images" />
                </div>
                <div className="message-box___chat-box___search">
                    <input className="message-box___chat-box___search--input" placeHolder="Aa" />
                </div>
                <div className="message-box___chat-box___submit">
                    <img className="message-box___chat-box___submit--image" src="/submit.png" alt="submit"/>
                </div>
            </div>
        </div>
    );
}

export default MessageBox;