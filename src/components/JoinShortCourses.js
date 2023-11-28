import React, { useState, useEffect } from 'react';
import '../styles/JoinShortCourses.css';
import { MdSchool, MdEmojiEvents } from 'react-icons/md';
import webdevImage from '../assets/Web Dev.png';
import cybersecurityImage from '../assets/Cyber Security.jpg'
import ccnaImage from '../assets/CCNA.png';
import mobileAppDevImage from '../assets/mobile-app-dev.jpg'

const JoinShortCourses = () => {
  return (
    <div className="join-short-courses-container">
        <div className="image-container">
            <div className="short-courses-overlay">
                <h2>Join Our Short Courses</h2>
                <h4>To be able to take full advantage of the opportunities available to this technology-driven era, it is important to acquire new skills. Skills in ICT that will springboard your career.</h4>
                
                <div className="two-column-container">
                    <div className="column">
                        <h2><MdSchool /></h2>
                        <h2>Expert Instructors</h2>
                        <p>Our instructors have years of industry experience which presents students with a unique opportunity of learning from the best</p>
                    </div>

                    <div className="column">
                        <h2><MdEmojiEvents /></h2>
                        <h2>Certification</h2>
                        <p>You earn a certificate of completion from the department after completing and passing the prescribed exam</p>
                    </div>
                </div>
                <button type="submit">Register</button>
            </div>
        </div>
        <SlidingComponent />
    </div>
  );
};

const SlidingComponent = () => {
    const [columns, setColumns] = useState([
        { id: 1, images: [ccnaImage], texts: ['Computer Networking [CCNA]', 'We provide quality training for students to become a Cisco Certified Network Associate (CCNA).'] },
        { id: 2, images: [cybersecurityImage], texts: ['Info. Sec and Ethical Hacking', 'Learn the various techniques used to secure a computer system from attacks through hacking.'] },
        { id: 3, images: [mobileAppDevImage], texts: ['Mobile Application Development', 'We provide world class technologies for Mobile Application Development using the mobile-first worklight by IBM.'] },
        { id: 4, images: [webdevImage], texts: ['Introduction To Web Programming', 'Understand the fundamentals of web technologies and create web-based applications with latest technologies.'] },
      ]);
  
    useEffect(() => {
      const container = document.querySelector('.sliding-container');
  
      const handleMouseEnter = () => {
        clearInterval(intervalId);
      };
  
      const handleMouseLeave = () => {
        startSliding();
      };
  
      const startSliding = () => {
        const intervalId = setInterval(() => {
          setColumns((prevColumns) => {
            const newColumns = [...prevColumns];
            const lastColumn = newColumns.pop();
            newColumns.unshift(lastColumn);
            return newColumns;
          });
        }, 5000);
  
        return intervalId;
      };
  
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
  
      const intervalId = startSliding();
  
      return () => {
        clearInterval(intervalId);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);
  
    return (
        <div className="sliding-container">
            {columns.map((column, index) => (
                <div key={column.id} className={`sliding-column-${index + 1}`}>
                    <div className="sliding-image">
                    <h2>{column.texts[0]}</h2>
                        <img src={column.images[0]} alt={`Image ${column.id}`} />
                    </div>
                    <div className="sliding-text">
                        <p>{column.texts[1]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};  

export default JoinShortCourses;