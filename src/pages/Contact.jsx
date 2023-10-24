import React, { useState } from "react";
import "./Contact.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const services = [
    {
      title: "Web Development",
      description: "Custom web development solutions tailored to your needs.",
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns for your brand.",
    },
    {
      title: "E-commerce Solutions",
      description: "Build and optimize your online store for success.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="contact-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>Contact Us</h1>
      <section className="contact-form">
        <h2>Contact Form</h2>
        <div className="form-container">
          <motion.form onSubmit={handleSubmit} variants={itemVariants}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <motion.button type="submit" className="msg-btn">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <motion.p
          variants={itemVariants}
        >
          Email: <a href="mailto:yusufabubeker2@gmail.com">yusufabubeker2@gmail.com</a>
        </motion.p>
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <motion.div className="service-list" variants={itemVariants}>
          {services.map((service, index) => (
            <motion.div key={index} className="service">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="social-media">
        <h2>Follow Us</h2>
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <FaTwitter size={32} />
        </motion.a>
        <motion.a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <FaFacebook size={32} />
        </motion.a>
        <motion.a
          href="https://instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <FaInstagram size={32} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <FaLinkedin size={32} />
        </motion.a>
        <motion.a
          href="https://t.me/yusufbina"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <FaTelegram size={32} />
        </motion.a>
      </section>
    </motion.div>
  );
};

export default Contact;
