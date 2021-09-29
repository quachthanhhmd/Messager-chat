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
                        <img src="/avatar.png" alt="avatar"/>
                    </div>
                    <div className="message-box___header___information--summary">
                        <div>
                            Quách Hải Thanh
                        </div>
                        <div className="message-box___header___information--summary___active">
                            Active Now
                        </div>
                    </div>
              </div>
            </div>
        </div>
    );
}

export default MessageBox;