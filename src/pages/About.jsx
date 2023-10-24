import React from "react";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const iconVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 5,
        loop: Infinity, // Keeps the animation continuous
        ease: "linear",
      }}
  };
  const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="about-intro">
      <motion.h1
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          About Me
        </motion.h1>
        <p>
          Hi, I'm Yusuf Abubeker, a passionate Front-End Developer with a love
          for creating beautiful and user-friendly web experiences.
        </p>
      </div>

      <motion.div className="about-description" variants={sectionVariants}>
        <h2>Interests</h2>
        <p>
          I'm enthusiastic about web development, user experience design, and staying up-to-date with the latest technologies in the tech world. In my free time, I enjoy outdoor activities like hiking and cycling.
        </p>
      </motion.div>

      <motion.div className="about-education" variants={sectionVariants}>
        <h2>Education</h2>
        <p>
          - Bachelor's Degree in Computer Science
          <br />- Web Development Certification
        </p>
      </motion.div>

      <motion.div className="about-work-experience" variants={sectionVariants}>
        <h2>Work Experience</h2>
        <p>- MERN stack Developer</p>
      </motion.div>

      <motion.div className="about-projects" variants={sectionVariants}>
        <h2>Notable Projects</h2>
        <p>
          - E-commerce Website: Designed and developed an e-commerce platform with a focus on a seamless shopping experience.
          <br />- Portfolio Website: Created a personal portfolio showcasing my web development and design work.
        </p>
      </motion.div>

      <motion.div className="about-hobbies" variants={sectionVariants}>
        <h2>Hobbies</h2>
        <p>
          - Coding
          <br />
          - Cycling
          <br />- Cooking
        </p>
      </motion.div>

      <motion.div className="about-contact" variants={sectionVariants}>
        <h2>Contact Me</h2>
        <p>
          Feel free to get in touch if you have any questions or if you'd like to collaborate on a project.
          <br />
          Email: <a href="mailto:yusufabubeker2@gmail.com">yusufabubeker2@gmail.com</a>
          <br />
          Phone: +251962277765
        </p>
      </motion.div>

      <motion.div className="about-skills" variants={sectionVariants}>
        <h2>Skills</h2>
        <div className="icon-container">
          <motion.div className="icon" variants={iconVariants} whileHover="hover" whileTap="tap">
            <FaHtml5 />
          </motion.div>
          <motion.div className="icon" variants={iconVariants} whileHover="hover" whileTap="tap">
            <FaCss3 />
          </motion.div>
          <motion.div className="icon" variants={iconVariants} whileHover="hover" whileTap="tap">
            <FaJs />
          </motion.div>
          <motion.div className="icon" variants={iconVariants} whileHover="hover" whileTap="tap">
            <FaReact />
          </motion.div>
          <motion.div className="icon" variants={iconVariants} whileHover="hover" whileTap="tap">
            <FaPython />
          </motion.div>
          <motion.div className="icon" variants={iconVariants} whileHover="hover" whileTap="tap">
            <FaNode />
          </motion.div>
          <motion.div className="icon" variants={iconVariants} whileHover="hover" whileTap="tap">
            <FaJava />
          </motion.div>
        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default About;
