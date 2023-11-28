// Courses.js
import React from "react";
import Accordion from "../components/Accordion";
import "../styles/Courses.css";

function Courses() {
    return (
        <>
            <div class="courses">
                <div class="textoverlay">
                    <div class="textcontent">
                        <h1>Courses</h1>
                        <p><a href="/">Home</a></p>
                    </div>
                </div>
            </div>

            <div className="courses-container">
                <div className="courses-column">
                    <h2>COMPUTER SCIENCE</h2>
                    <Accordion title="Level 100" content={[
                        '----------------------------------------------------------',
                        'FIRST SEMESTER',
                        '----------------------------------------------------------',
                        'UGRC 150	Critical Thinking and Practical Reasoning',
                        'MATH 121	Algebra and Trigonometry',
                        'MATH 123	Vectors and Geometry',
                        'DCIT 101	Introduction to Computer Science',
                        'DCIT 103	Office Productivity Tools',
                        'STAT 111	Introduction to Statistics and Probability I',
                        '----------------------------------------------------------',
                        'SECOND SEMESTER',
                        '----------------------------------------------------------',
                        'UGRC 110	    Academic Writing I',
                        'UGRC 131-136	Understanding Human Society',
                        'MATH 122	    Calculus I',
                        'MATH 126	    Algebra and Geometry',
                        'STAT 112	    Introduction to Statistics and Probability II',
                        'DCIT 104	    Programming',
                        'DCIT 102	    Computer Hardware Fund. and Circuits'
                    ]} />

                    <Accordion title="Level 200" content={[
                    '----------------------------------------------------------',
                    'FIRST SEMESTER',
                    '----------------------------------------------------------',
                    'UGRC 210	Academic Writing II',
                    'DCIT 201	Programming I',
                    'DCIT 203	Digital and Logic Systems Design',
                    'DCIT 205	Multi Media and Web Design',
                    'DCIT 207	Computer Architecture & Organisation',
                    'MATH 223	Calculus II',
                    '----------------------------------------------------------',
                    'SECOND SEMESTER',
                    '----------------------------------------------------------',
                    'UGRC 220	Introduction to African Studies',
                    'DCIT 202	Mobile Application Development',
                    'DCIT 204	Data Structures & Algorithm I',
                    'DCIT206	Systems Administration',
                    'DCIT208	Software Engineering',
                    'DCIT 212	Numerical and Computational Methods',
                        
                    ]} />

                    <Accordion title="Level 300" content={[
                        '----------------------------------------------------------',
                        'FIRST SEMESTER',
                        '----------------------------------------------------------',
                        'DCIT 301	Operating Systems',
                        'DCIT 303	Computer Networks',
                        'DCIT 305	Database Fundamentals',
                        'DCIT 313	Introduction to Artificial Intelligence',
                        'MATH 359	Discrete Mathematics',
                        'ELECTIVES:',
                        'DCIT 307	Mini-Project',
                        'DCIT 309	Embedded Systems and IoT',
                        'DCIT 311	Machine Learning',

                        '----------------------------------------------------------',
                        'SECOND SEMESTER',
                        '----------------------------------------------------------',
                        'ELECTIVES:',
                        'DCIT 400	Project',
                        'DCIT 401	Social, Legal, Ethical and Professional Issues',
                        'DCIT 407	Image Processing',
                        'DCIT 306	Cloud Computing Numerical and Computational Methods',
                        'DCIT 316	Computational models for',
                        'Social Media Mining',
                    ]} />
                    
                    <Accordion title="Level 400" content={[
                        '----------------------------------------------------------',
                        'FIRST SEMESTER',
                        '----------------------------------------------------------',
                        'DCIT 400 Project',
                        'DCIT 401 Social, Legal, Ethical and Professional Issues',
                        'DCIT 407 Image Processing',
                        'ELECTIVES:',
                        'DCIT 403 Designing Intelligent Agents',
                        'DCIT 405 Statistical Models and Methods for Data Science',
                        'DCIT 411 Bioinformatics',
                        'DCIT 417 Network Performance Analysis and Modeling',
                        'DCIT 423 Network Servers and Infrastructure',
                        
                        '----------------------------------------------------------',
                        'SECOND SEMESTER',
                        '----------------------------------------------------------',
                        'DCIT 400 Project',
                        'DCIT 402 Management Principles in Computing',
                        'DCIT 418 Systems and Network Security',
                        'DCIT 428 Wireless Systems and Networks',
                        'ELECTIVES:',
                        'DCIT 404 Advanced Databases',
                        'DCIT 406 Advanced Computer Networks',
                        'DCIT 408 Compilers',
                        'DCIT 426 Telecommunication Systems',
                        'DCIT 412 Computer Vision',
                        'DCIT 414 Data Mining and Warehousing',
                        'DCIT 416 Digital Signal Processing',
                        'DCIT 422 Information Visualization',
                    ]} />
                </div>
                <div className="courses-column">
                    <h2>INFORMATION TECHNOLOGY</h2>
                    <Accordion title="Level 100" content={[
                        '----------------------------------------------------------',
                        'FIRST SEMESTER',
                        '----------------------------------------------------------',
                        'UGRC 150 Critical Thinking and Practical Reasoning',
                        'DCIT 101 Introduction to Computer Science',
                        'DCIT 103 Office Productivity Tools',
                        'DCIT 105 Mathematics for IT Professionals',
                        'STAT 111 Introduction to Statistics and Probability I',
                        'ELECTIVES:',
                        'MATH 121 Algebra and Trigonometry',
                        'MATH 123 Vectors and Geometry',
                        'ECON 101 Introduction to Economics I',
                        
                        '----------------------------------------------------------',
                        'SECOND SEMESTER',
                        '----------------------------------------------------------',
                        'UGRC 110 Academic Writing I',
                        'UGRC 131-136 Understanding Human Society',
                        'MATH 122 Calculus I',
                        'MATH 126 Algebra and Geometry',
                        'STAT 112 Introduction to Statistics and Probability II',
                        'DCIT 104 Programming',
                        'DCIT 102 Computer Hardware Fund. and Circuits',
                    ]} />

                    <Accordion title="Level 200" content={[
                        '----------------------------------------------------------',
                        'FIRST SEMESTER',
                        '----------------------------------------------------------',
                        'UGRC 210 Academic Writing II',
                        'DCIT 201 Programming I',
                        'DCIT 203 Digital and Logic Systems Design',
                        'DCIT 205 Multi Media and Web Design',
                        'DCIT 207 Computer Architecture & Organisation',
                        'DCIT 209 E-Business Architectures',
                        
                        '----------------------------------------------------------',
                        'SECOND SEMESTER',
                        '----------------------------------------------------------',
                        'UGRC 220 Introduction to African Studies',
                        'DCIT 202 Mobile Application Development',
                        'DCIT 204 Data Structures & Algorithm I',
                        'DCIT 206 Systems Administration',
                        'DCIT 208 Software Engineering',
                        'ELECTIVES:',
                        'DCIT 200 Internship',
                        'DCIT 212 Numerical and Computational Methods',
                        'DCIT 214 Information Modeling and Specification',
                    ]} />

                    <Accordion title="Level 300" content={[
                        '----------------------------------------------------------',
                        'FIRST SEMESTER',
                        '----------------------------------------------------------',
                        'DCIT 301 Operating Systems',
                        'DCIT 303 Computer Networks',
                        'DCIT 305 Database Fundamentals',
                        'DCIT 313 Introduction to Artificial Intelligence',
                        'DCIT 317 IT Project Management',
                        'ELECTIVES:',
                        'DCIT 307 Mini-Project',
                        'DCIT 315 Principles of 3D Environment',
                        'DCIT 321 Software Evolution',
                        
                        '----------------------------------------------------------',
                        'SECOND SEMESTER',
                        '----------------------------------------------------------',
                        'DCIT 302 Human Computer Interaction',
                        'DCIT 304 Research Methods',
                        'DCIT 308 Data Structures and Algorithms II',
                        'DCIT 312 Information Security Management',
                        'DCIT 318 Programming II',
                        'ELECTIVES:',
                        'DCIT 314 Game Engine Architecture',
                        'DCIT 322 Database Management Administration',
                    ]} />

                    <Accordion title="Level 400" content={[
                        '----------------------------------------------------------',
                        'FIRST SEMESTER',
                        '----------------------------------------------------------',
                        'DCIT 400 Project',
                        'DCIT 401 Social, Legal, Ethical and Professional Issues',
                        'DCIT 409 Digital Forensics',
                        'ELECTIVES:',
                        'DCIT 413 Play and Games',
                        'DCIT 415 Advanced Software Engineering',
                        'DCIT 419 Agile Methods',
                        'DCIT 421 Persuasive Systems Development',

                        '----------------------------------------------------------',
                        'SECOND SEMESTER',
                        '----------------------------------------------------------',
                        'DCIT 400 Project',
                        'DCIT 402 Management Principles in Computing',
                        'DCIT 418 Systems and Network Security',
                        'DCIT 428 Wireless Systems and Networks',
                        'DCIT 318 Programming II',
                        'ELECTIVES:',
                        'DCIT 404 Advanced Databases',
                        'DCIT 406 Advanced Computer Networks',
                        'DCIT 408 Compilers',
                        'DCIT 426 Telecommunication Systems',
                        'DCIT 412 Computer Vision',
                        'DCIT 414 Data Mining and Warehousing',
                        'DCIT 416 Digital Signal Processing',
                        'DCIT 422 Information Visualization',
                    ]} />


                </div>
            </div>
        </>
    );
}

export default Courses;