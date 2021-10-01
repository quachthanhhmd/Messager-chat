import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";


MessageManage.propTypes = {

};


const listPeople = [
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
    ,
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
    ,
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
    ,
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
    ,
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
    ,
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
    ,
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
    ,
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
    ,
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
    ,
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    },
    {
        id: 123,
        displayName: "Quach Hai Thanh",
        avatar: "/avatar.png",
    }
];

const initIdActive = "slide-0";

function MessageManage(props) {

    const [IdActive, setIdActive] = useState(initIdActive);
    const [peopleList, setPeopleList] = useState(listPeople);

    function handleClick(e) {

        if (IdActive === e.target.id) {
            setIdActive(initIdActive);
            return;
        }

        setIdActive(e.target.id);

    }

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

                <div className="manage-main___slide-list___custom-chat">
                    <div id="slide-1" className="manage-main___slide-list--collapsible"
                        onClick={handleClick}>

                        People
                    </div>
                    <div className={`manage-main___slide-list--content ${IdActive === "slide-1" ? " manage-main___slide-list--show" : " manage-main___slide-list--hidden"}`}>
                        <div className="manage-main___slide-list--content___people-list">
                            {
                                peopleList.map(people => (
                                    <div className="manage-main___slide-list--content___people-list--user" id={people.id} >

                                        <div className="manage-main___slide-list--content___people-list--user___avatar">
                                            <img src={people.avatar} alt="avatar" />
                                            <div className="manage-main___slide-list--content___people-list--user___avatar--active"></div>

                                        </div>
                                        <div className="manage-main___slide-list--content___people-list--user___name">
                                            {people.displayName}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>


                        <div className="manage-main___slide-list--content___search">
                            <input name="add-more-people" placeHolder="Add People" className="manage-main___slide-list--content___search--input" />
                        </div>

                    </div>
                </div>
                <div className="manage-main___slide-list___custom-chat">
                    <div id="slide-2" className="manage-main___slide-list--collapsible"
                        onClick={handleClick}>
                        Customize Chat
                    </div>
                    <div className={`manage-main___slide-list--content ${IdActive === "slide-2" ? " manage-main___slide-list--show" : " manage-main___slide-list--hidden"}`}>
                        <div className="manage-main___slide-list--content___item">


                            <div className=" manage-main___slide-list--content___item--icon">
                                <span className="material-icons">
                                    tips_and_updates
                                </span>
                            </div>
                            <div className="manage-main___slide-list--content___item--name">
                                Change Theme
                            </div>

                        </div>
                        <div className="manage-main___slide-list--content___item">
                            <div className=" manage-main___slide-list--content___item--icon">
                                <span className="material-icons">
                                    thumb_up
                                </span>
                            </div>
                            <div className="manage-main___slide-list--content___item--name">
                                Change Emoji
                            </div>

                        </div>
                        <div className="manage-main___slide-list--content___item">
                            <div className=" manage-main___slide-list--content___item--icon">
                                <span className="material-icons">
                                    edit
                                </span>
                            </div>
                            <div className="manage-main___slide-list--content___item--name">
                                Edit Nicknames
                            </div>

                        </div>
                        <div className="manage-main___slide-list--content___item">


                            <div className=" manage-main___slide-list--content___item--icon">
                                <span className="material-icons">
                                    search
                                </span>
                            </div>
                            <div className="manage-main___slide-list--content___item--name">
                                Search in Conversation
                            </div>
                        </div>
                    </div>
                </div>
                <div className="manage-main___slide-list___custom-chat">
                    <div id="slide-3" className="manage-main___slide-list--collapsible"
                        onClick={handleClick}>
                        Photos
                    </div>
                    <div className={`manage-main___slide-list--content ${IdActive === "slide-3" ? " manage-main___slide-list--show" : " manage-main___slide-list--hidden"}`}>
                            <div className="manage-main___slide-list--content___photo-list">
                            {
                                peopleList.map(people => (
                                    <div className="manage-main___slide-list--content___photo-list--image">
                                        <img src="/logo192.png" alt="history"/>
                                    </div>
                                ))
                            }
                            </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default MessageManage;