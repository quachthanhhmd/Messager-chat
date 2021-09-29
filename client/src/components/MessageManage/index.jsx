import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";

import Collapsible from 'react-collapsible';




MessageManage.propTypes = {

};

function MessageManage(props) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="manage-main">
            <div className="manage-main___header">
                <div className="manage-main___header--avatar" >
                    <img src="/avatar.png" alt="avatar" />
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
            <div className="manage-main___slide-list">

                {/* <Collapsible classParentString="manage-main___slide-list___custom-chat" trigger="Customize Chat">
                        <p>
                            This is the collapsible content. It can be any element or React
                            component you like.
                        </p>
                        <p>
                            It can even be another Collapsible component. Check out the next
                            section!
                        </p>
                    </Collapsible> */}
                <div className="manage-main___slide-list___custom-chat">
                    <div className="manage-main___slide-list--collapsible"
                        onClick={() => { setIsActive(!isActive) }}>
                        Customize Chat
                    </div>
                    <div className={`manage-main___slide-list--content ${isActive ? " manage-main___slide-list--show" : " manage-main___slide-list--hidden"}`}>
                        <div className="manage-main___slide-list--content___item">
                            Change Theme
                        </div>
                        <div className="manage-main___slide-list--content___item">
                            Change Emoji
                        </div>
                        <div className="manage-main___slide-list--content___item">
                            <div className="manage-main___slide-list--content___item--icon">
                                <img src="/nick-name.png" alt="Edit nick name" />
                            </div>
                            <div className="manage-main___slide-list--content___item--name">
                                Edit Nicknames
                            </div>
                
                        </div>
                        <div className="manage-main___slide-list--content___item">
                            Search in Conversation
                        </div>
                    </div>
                </div>
                <div className="manage-main___slide-list___custom-chat">
                    <div className="manage-main___slide-list--collapsible"
                        onClick={() => { setIsActive(!isActive) }}>
                        Customize Chat
                    </div>
                    <div className={`manage-main___slide-list--content ${isActive ? " manage-main___slide-list--show" : " manage-main___slide-list--hidden"}`}>
                        <div className="manage-main___slide-list--content___item">
                            Change Theme
                        </div>
                        <div className="manage-main___slide-list--content___item">
                            Change Emoji
                        </div>
                        <div className="manage-main___slide-list--content___item">
                            <div className="manage-main___slide-list--content___item--icon">
                                <img src="/nick-name.png" alt="Edit nick name" />
                            </div>
                            <div className="manage-main___slide-list--content___item--name">
                                Edit Nicknames
                            </div>
                
                        </div>
                        <div className="manage-main___slide-list--content___item">
                            Search in Conversation
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MessageManage;