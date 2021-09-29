import React, { useState, useEffect } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";

import "./index.scss";


const ThemeMode = () => {

    const getTheme = localStorage.getItem('Theme') || 'light';
    if (getTheme === 'dark'){

        document.body.classList.add('dark-mode');
    }

    const [themeState, setThemeState] = useState(getTheme === 'dark' ? true: false);

    const handleChange = () => {
        setThemeState(!themeState);

        if (!themeState) {
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }


    return (
        <DarkModeToggle
            className = "mode-main"
            onChange={handleChange}
            checked={themeState}
            size={80}
        />
    )
}

export default ThemeMode;