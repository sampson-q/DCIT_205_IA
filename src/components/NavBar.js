// NavBar.js

import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { FiSun, FiMoon } from "react-icons/fi";
import "../styles/NavBar.css"; // Import your CSS file

function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // You can also update a global state or local storage to persist the theme choice
    };

    return (
        <div className={`nav-bar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <img src={logoImg} alt="logo" className="logo" />

            <div className="nav-options">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/Resources" className="nav-link">Resources</a>
                <a href="/Courses" className="nav-link">Courses</a>
                <a href="/Labs" className="nav-link">Labs</a>
                <a href="/PersonalityProfile" className="nav-link">Personality Profile</a>
                <a href="/Contacts" className="nav-link">Contacts</a>
                <a href="/COMPSSA" className="nav-link">COMPSSA</a>
                <a href="/FAQs" className="nav-link">FAQs</a>
                <a href="/Donate" className="nav-link">Donate</a>



                <div className="darkmode-toggle">
                    <button onClick={toggleTheme} className="darkmode-button">
                        {isDarkMode ? <FiSun size={20} color="#fff" /> : <FiMoon size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
