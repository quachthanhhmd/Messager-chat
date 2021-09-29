import React from 'react';
import PropTypes from 'prop-types';

import "./index.scss";

MessageManage.propTypes = {
    
};

function MessageManage(props) {
    return (
        <div className="manage-main">
            <div className="manage-main___header">
                <div className="manage-main___header--avatar" >
                    <img src="/avatar.png" alt="avatar"/>
                    <div className="manage-main___header--avatar___active-in">
                    </div>
                </div>
                <div className="manage-main___header--username">
                    Quách Hải Thanh
                </div>
                <div className="manage-main___header--active">
                    Active Now
                </div>

            </div>
        </div>
    );
}

export default MessageManage;