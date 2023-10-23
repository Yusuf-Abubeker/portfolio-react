import React, { useState } from "react";
import "./Contact.css"; // Import the Contact CSS
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTelegram } from "react-icons/fa"; // Import social media icons

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
    // You can add code to handle form submission here, such as sending data to an API or backend server.
    // You may also show a success message to the user.
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

  return (
    <div className="contact-container">
    <h1>Contact Us</h1>

      <section className="contact-form">
        <h2>Contact Form</h2>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="msg-btn">Send Message</button>
        </form>
        </div>
      </section>
      <section className="contact-info">
        <h2>Contact Information</h2>

        <p>Email: <a href="mailto:yusufabubeker2@gmail.com">yusufabubeker2@gmail.com</a></p>
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Social Media Links */}
      <section className="social-media">
        <h2>Follow Us</h2>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={32} />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={32} />
        </a>
        <a
          href="https://instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://t.me/yusufbina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={32} />
        </a>
      </section>
    </div>
  );
};

export default Contact;
