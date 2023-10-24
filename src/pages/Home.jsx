import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const iconVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 5,
        loop: Infinity, // Keeps the animation continuous
        ease: "linear",
      },
    },
  };

  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and projects below.</p>
        <button className="cta-button" onClick={() => navigate("/about")}>
          Get Started
        </button>
      </div>
      <div className="icon-section">
        <div className="icon">
          <motion.div
            variants={iconVariants}
            initial="animate"
            animate="animate"
          >
            <FaCode size={20} color="#007BFF" />
          </motion.div>
          <p>Web Development</p>
        </div>
        <div className="icon">
          <motion.div
            variants={iconVariants}
            initial="animate"
            animate="animate"
          >
            <FaPaintBrush size={20} color="#FF5733" />
          </motion.div>
          <p>UI/UX Design</p>
        </div>
        <div className="icon">
          <motion.div
            variants={iconVariants}
            initial="animate"
            animate="animate"
          >
            <FaRocket size={20} color="#44BD32" />
          </motion.div>
          <p>Fast Delivery</p>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Yusuf Abubeker</h1>
      <p>Front-End Developer</p>
    </header>
  );
};

export default Home;
