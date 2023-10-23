// Home.js
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa"; // Import icons from a library like React Icons


const Home = () => {
 const navigate = useNavigate();
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and projects below.</p>
        <button className="cta-button" onClick={()=>navigate('/about')}>Get Started</button>
      </div>
      <div className="icon-section">
        <div className="icon">
          <FaCode size={20} color="#007BFF" />
          <p>Web Development</p>
        </div>
        <div className="icon">
          <FaPaintBrush size={20} color="#FF5733" />
          <p>UI/UX Design</p>
        </div>
        <div className="icon">
          <FaRocket size={20} color="#44BD32" />
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
