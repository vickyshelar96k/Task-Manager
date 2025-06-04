import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <div className="contact-container">
      <div className="contact-hero">
        <h1 className="section-title">Get In Touch</h1>
        <p className="contact-intro">
          Feel free to reach out to me for collaborations, internships, or just a friendly hello. I’m always open to discussing exciting opportunities and ideas.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-box">
          <h5><i className="fas fa-phone contact-icon"></i> Phone: +91 8421247834</h5>
        </div>
        <div className="contact-box">
          <h5><i className="fas fa-envelope contact-icon"></i> Email: vikasshelar369@gmail.com</h5>
        </div>
        <div className="contact-box">
          <h5><i className="fas fa-map-marker-alt contact-icon"></i> Location: Mumbai, India</h5>
        </div>
        <div className="contact-box">
          <h5><i className="fab fa-linkedin contact-icon"></i> LinkedIn: <a href="https://linkedin.com/in/vikas-shelar-1508s" target="_blank" rel="noreferrer">/vikas-shelar-1508s</a></h5>
        </div>
        <div className="contact-box">
          <h5><i className="fab fa-github contact-icon"></i> GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">/yourgithub</a></h5>
        </div>
      </div>
    </div>
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>I'm open to discussing full-time opportunities, freelance work, or just tech talk. Feel free to drop a message.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Me a Message</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  );
};

export default Contact;
