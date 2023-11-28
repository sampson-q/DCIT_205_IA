// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import logoImg from "../assets/logo.png";
import "../styles/NavBar.css";

function NavBar({ toggleTheme, isDarkMode }) {
    return (
        <div className={`nav-bar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <img src={logoImg} alt="logo" className="logo" />

            <div className="nav-options">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/resources" className="nav-link">Resources</Link>
                <Link to="/courses" className="nav-link">Courses</Link>
                <Link to="/labs" className="nav-link">Labs</Link>
                <Link to="/personalityprofile" className="nav-link">Personality Profile</Link>
                <Link to="/contacts" className="nav-link">Contacts</Link>
                <Link to="/entryrequirements" className="nav-link">Entry Requirements</Link>
                <Link to="/faqs" className="nav-link">FAQs</Link>
                <Link to="/donate" className="nav-link">Donate</Link>
                {/* Add more links for other pages */}

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
