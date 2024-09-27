// app/components/AboutInfo.tsx
import React from "react";
import { About } from "../app/data/user"; // Adjust the import path

const AboutInfo: React.FC = () => {
  return (
    <div>
      <h3>About Me:</h3>
      <hr />
      <p>
        <strong>Location:</strong> {About.currentLocation}
      </p>
      <p>
        <strong>Contact Info:</strong>
      </p>
      <ul>
        {About.contactInfo.map((info, index) => (
          <li key={index}>
            <a
              href={`https://${info}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {info}
            </a>
          </li>
        ))}
      </ul>
      <p>
        <strong>Education:</strong> {About.education}
      </p>
      <p>
        <strong>Interests:</strong>
      </p>
      <ul>
        {About.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <p>
        <strong>Skills:</strong>
      </p>
      <ul>
        {About.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default AboutInfo;
