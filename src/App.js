// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import VideoBackground from './components/VideoBackground';
import ProgramsComponent from './components/ProgramsComponent';
import InformationComponent from './components/InformationComponent';
import About from "./pages/About";
import CoursesOffered from "./components/CoursesOffered";
import JoinShortCourses from "./components/JoinShortCourses";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // You can also update a global state or local storage to persist the theme choice
    };

    return (
        <Router>
            <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                
                <div className="pageContent">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        {/* <Route path="/resources" element={<Resources />} /> */}
                        {/* Add more routes for other pages */}
                        <Route path="/" element={
                            <>
                                <VideoBackground />
                                <ProgramsComponent />
                                <InformationComponent />
                                <CoursesOffered />
                                <JoinShortCourses.js />
                            </>
                        } />
                    </Routes>
                </div>
                
                {/* <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> footer runs here for later*/}
            </div>
        </Router>
    );
}

export default App;
