// Footer.js

import React from 'react';
import '../styles/Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Academics</h3>
          <ul>
            <li><a href="/undergraduate-courses">Undergraduate Courses</a></li>
            <li><a href="/graduate-courses/mphil">Graduate Courses (MPhil Computer Science)</a></li>
            <li><a href="/graduate-courses/msc">Graduate Courses (MSc Computer Science)</a></li>
            <li><a href="/graduate-courses/phd">Graduate Courses (PhD)</a></li>
            <li><a href="/academic-calendar">Academic Calendar</a></li>
            <li><a href="/timetable/level-200-300">Level 200 & 300 Timetable</a></li>
            <li><a href="/placements/level-200">Placements For Level 200 Students</a></li>
            <li><a href="/student-complaint-form">Student Complaint Form</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Admissions</h3>
          <ul>
            <li><a href="/admissions/undergraduate">Undergraduate</a></li>
            <li><a href="/admissions/graduate">Graduate</a></li>
            <li><a href="/admissions/international">International Students</a></li>
            <li><a href="/entry-requirements">Entry Requirements</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Research</h3>
          <ul>
            <li><a href="/research-at-dcs">Research at DCS</a></li>
            <li><a href="/research-impact">Research Impact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About The Department</h3>
          <ul>
            <li><a href="/introducing-dcs">Introducing DCS</a></li>
            <li><a href="/head-of-department">Head of Department's office</a></li>
            <li><a href="/faculty">Faculty</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/newsletter">Newsletter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone & Email:</p>
          <p>+233 501 382 035</p>
          <p>+233 559 145 698</p>
          <p>dcs@ug.edu.gh</p>
          <p>Location:</p>
          <p>University Of Ghana, Legon Campus</p>
          <p>Opposite Mathematics Department</p>
        </div>
        <div className="footer-section">
          {/* Email Input Field */}
          <label htmlFor="emailInput">Enter Email Address</label>
          <input type="email" id="emailInput" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      <div className="footer-section copyright">
        <p>Copyright ©2023 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
