import React from "react";
import "./about.css"; // Import your CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me ʕ·͡ᴥ·ʔ</h2>
      </div>
      <div className="about-content">
        <div className="about-row">
          <span>Location:</span>
          <span>Houston, TX</span>
        </div>
        <div className="about-row">
          <span>Interests:</span>
          <span>Design, concerts, cooking, anime</span>
        </div>
        <div className="about-row">
          <span>Education:</span>
          <span>B.Sc. Applied Technology - Brigham Young University-Idaho</span>
        </div>
        <div className="about-row">
          <span>Skills:</span>
          <span>Python, React, Tailwind, JavaScript, PHP, Flask, Git</span>
        </div>
        <div className="about-row">
          <span>Professional:</span>
          <span>Software Engineer at Tech Innovations</span>
        </div>
        <div className="about-row">
          <span>Goals:</span>
          <span>
            Aspiring to lead a development team and work on innovative tech
            solutions that make a difference.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
