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
import Footer from "./components/Footer";
import Resources from "./pages/Resources";
import Lab from "./components/Lab";

import hardwareLabImage from "./assets/hardwareLab.jpeg";
import roboticsLabImage from "./assets/roboticsLab.jpeg";
import dataScienceImage from "./assets/dataScienceHub.jpeg";
import softwareLabImage from "./assets/softwareLab.jpeg";
import networkingLabImage from "./assets/networkingLab.jpeg";
import computerLabImage from "./assets/computerLab.jpeg";
import researchLabImage from "./assets/researchLab.jpeg";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Router>
            <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

                <div className="pageContent">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={
                            <>
                                <VideoBackground />
                                <ProgramsComponent />
                                <InformationComponent />
                                <CoursesOffered />
                                <JoinShortCourses />
                            </>
                        } />
                        <Route path="/resources" element={<Resources />} />
                        
                        <Route path="/courses" element={
                            <>
                                <CoursesOffered />
                                <div style={{ height: 80 }}></div>
                                <ProgramsComponent />
                                <div style={{ height: 60 }}></div>
                                <JoinShortCourses />
                            </>
                        } />

                        <Route path="/labs" element={
                            <>
                                <h2>Our Labs</h2>
                                <Lab
                                    image={roboticsLabImage}
                                    title="Advanced Robotics Lab"
                                    description="Explore the latest advancements in robotics and automation. Join us in building the future of intelligent machines."
                                />
                                <Lab
                                    image={dataScienceImage}
                                    title="Data Science Hub"
                                    description="Dive into the world of data analytics and machine learning. Uncover insights from vast datasets and make data-driven decisions."
                                />
                                <Lab
                                    image={hardwareLabImage}
                                    title="Hardware Lab"
                                    description="Experience hands-on learning with state-of-the-art hardware. Learn about the components that power modern computing devices."
                                />
                                <Lab
                                    image={softwareLabImage}
                                    title="Software Lab"
                                    description="Explore the world of software development. Code, test, and deploy applications using cutting-edge development tools and technologies."
                                />
                                <Lab
                                    image={networkingLabImage}
                                    title="Networking Lab"
                                    description="Dive into the realm of networking. Build, configure, and troubleshoot network infrastructure. Gain hands-on experience with routers and switches."
                                />
                                <Lab
                                    image={computerLabImage}
                                    title="Computer Lab"
                                    description="Access a fully-equipped computer lab for your daily computing needs. Whether it's research, study, or project work, our computer lab has you covered."
                                />
                                <Lab
                                    image={researchLabImage}
                                    title="Research Lab"
                                    description="Join our cutting-edge research initiatives. Contribute to projects at the forefront of technological advancements. Unlock the potential of innovation."
                                />
                            </>
                        } />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
