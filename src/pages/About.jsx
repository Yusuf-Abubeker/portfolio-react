import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNode,
  FaJava,
} from "react-icons/fa";
import "./About.css"; // You can create a separate CSS file for styling

const aboutData = [
  {
    title: "Interests",
    content:
      "I'm enthusiastic about web development, user experience design, and staying up-to-date with the latest technologies in the tech world. In my free time, I enjoy outdoor activities like hiking and cycling.",
  },
  {
    title: "Education",
    content: [
      "Bachelor's Degree in Computer Science",
      "Web Development Certification",
    ],
  },
  {
    title: "Work Experience",
    content: [
      "Front-End Developer at XYZ Company",
      "UI/UX Designer at ABC Agency",
    ],
  },
  {
    title: "Notable Projects",
    content: [
      "E-commerce Website: Designed and developed an e-commerce platform with a focus on a seamless shopping experience.",
      "Portfolio Website: Created a personal portfolio showcasing my web development and design work.",
    ],
  },
  {
    title: "Hobbies",
    content: ["Hiking", "Cycling", "Cooking"],
  },
];
const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <h1>About Me</h1>
        <p>
          Hi, I'm Yusuf Abubeker, a passionate Front-End Developer with a love
          for creating beautiful and user-friendly web experiences.
        </p>
      </div>

      <div className="about-description">
        <h2>Interests</h2>
        <p>
          I'm enthusiastic about web development, user experience design, and
          staying up-to-date with the latest technologies in the tech world. In
          my free time, I enjoy outdoor activities like hiking and cycling.
        </p>
      </div>

      <div className="about-education">
        <h2>Education</h2>
        <p>
          - Bachelor's Degree in Computer Science
          <br />- Web Development Certification
        </p>
      </div>

      <div className="about-work-experience">
        <h2>Work Experience</h2>
        <p>- MERN stack Developer</p>
      </div>

      <div className="about-projects">
        <h2>Notable Projects</h2>
        <p>
          - E-commerce Website: Designed and developed an e-commerce platform
          with a focus on a seamless shopping experience.
          <br />- Portfolio Website: Created a personal portfolio showcasing my
          web development and design work.
        </p>
      </div>

      <div className="about-hobbies">
        <h2>Hobbies</h2>
        <p>
          - Coding
          <br />
          - Cycling
          <br />- Cooking
        </p>
      </div>

      <div className="about-contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to get in touch if you have any questions or if you'd like
          to collaborate on a project.
          <br />
          Email:{" "}
          <a href="mailto:yusufabubeker2@gmail.com">yusufabubeker2@gmail.com</a>
          <br />
          Phone: +251962277765
        </p>
      </div>

      <div className="about-skills">
        <h2>Skills</h2>
        <div className="icon-container">
          <FaHtml5 className="icon" />
          <FaCss3 className="icon" />
          <FaJs className="icon" />
          <FaReact className="icon" />
          <FaPython className="icon" />
          <FaNode className="icon" />
          <FaJava className="icon" />
        </div>
      </div>
    </div>
  );
};

export default About;
