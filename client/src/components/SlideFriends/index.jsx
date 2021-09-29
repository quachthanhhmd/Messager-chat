import React, { useState } from 'react';
import PropTypes from 'prop-types';


import "./index.scss";

SlideFriends.propTypes = {

};

function SlideFriends(props) {

    const [idHover, setIdHover] = useState(-1);

    return (
        <div className="slider-main">
            <div className="slider-main___header">
                <div className="slider-main___header-infor">
                    <div className="slider-main___header-infor___title">
                        Chats
                    </div>
                    <div className="slider-main___header-infor___addmore">

                    </div>
                </div>
                <div className="slider-main___header-search">
                    <input
                        type="search"
                        className="slider-main___header-search___input"
                        placeholder="Search Messages"
                    />
                </div>
            </div>

            <div className="slider-main___conversation">
                {
                    [...Array(15)].map((_, i) => (
                        <div
                            onMouseEnter={() => setIdHover(i)}
                            onMouseLeave={() => setIdHover(-1)}
                            
                            id={i} className={`slider-main___conversation-user${idHover === i? ` user-hover`: ""}`}>
                            <div className="slider-main___conversation-user___avatar">
                                <img src={`${process.env.PUBLIC_URL}/avatar.png`} alt="avatar" />
                                <div className="slider-main___conversation-user___avatar-online"></div>
                            </div>
                            <div className="slider-main___conversation-user___messages">
                                <div className="slider-main___conversation-user___messages-username">
                                    Quách Hải Thanh
                                </div>
                                <div className="slider-main___conversation-user___messages-last-messages">
                                    You: Hello, my name is thanh dep trai haha
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SlideFriends;