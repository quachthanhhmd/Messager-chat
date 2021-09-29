import React from 'react';

import PropTypes from 'prop-types';
import SlideFriends from '../../components/SlideFriends';
import MessageBox from '../../components/MessageBox';

import "./index.scss";
import MessageManage from '../../components/MessageManage';

Messager.propTypes = {
    
};

function Messager(props) {
    return (
        <div className="message-screen">
            <SlideFriends/>     
            <MessageBox/>     
            <MessageManage/>  
        </div>
    );
}

export default Messager;