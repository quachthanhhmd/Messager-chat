import React, { useState, useEffect } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";

import "./index.scss";


const ThemeMode = () => {

    const getTheme = localStorage.getItem('Theme') || 'light';
    if (getTheme === 'dark') {

        document.documentElement.setAttribute('data-theme', "dark");
    }
    else
        document.documentElement.setAttribute('data-theme', "light");

    const [themeState, setThemeState] = useState(getTheme === 'dark' ? true : false);

    const handleChange = () => {
        setThemeState(!themeState);

        if (!themeState) {
            localStorage.setItem('Theme', 'dark');
            document.documentElement.setAttribute('data-theme', "dark");
        } else {
            localStorage.setItem('Theme', 'light');
            document.documentElement.setAttribute('data-theme', "light");
        }
    }


    return (
        <DarkModeToggle
            className="mode-main"
            onChange={handleChange}
            checked={themeState}
            size={80}
        />
    )
}

export default ThemeMode;