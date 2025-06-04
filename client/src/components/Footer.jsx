import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaJava, FaDatabase,
  FaHtml5, FaPhone, FaMapMarkerAlt, FaUser, FaCode, FaHome, FaFileAlt
} from 'react-icons/fa';
import { SiSpring } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h5 className="text-warning">About Me</h5>
            <p>Passionate Software Developer specializing in Java and Web Development. Dedicated to building robust solutions and user-friendly systems.</p>
            <div className="d-flex gap-3">
              <a href="https://linkedin.com/in/vikas-shelar-1508s" target="_blank" rel="noreferrer" className="text-light">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/vickyshelar96k" target="_blank" rel="noreferrer" className="text-light">
                <FaGithub size={20} />
              </a>
              <a href="mailto:vikasshelar369@gmail.com" className="text-light">
                <FaEnvelope size={20} />
              </a>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer" className="text-light">
                <FaTwitter size={20} />
              </a>
            </div>
          </Col>

          <Col md={3}>
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none"><FaHome /> Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none"><FaUser /> About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none"><FaEnvelope /> Contact</a></li>
              <li><a href="https://drive.google.com/file/d/1MLdO888LARkfRspGL7R2tMaN30WwRsR3/view?usp=sharing" className="text-light text-decoration-none" target="_blank"><FaFileAlt /> Resume</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="text-warning">Technical Skills</h5>
            <ul className="list-unstyled">
              <li><FaJava /> Java</li>
              <li><FaDatabase /> SQL (MySQL, PostgreSQL)</li>
              <li><FaHtml5 /> HTML, CSS, JavaScript, React Js</li>
              <li><SiSpring /> Spring Boot, Hibernate</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="text-warning">Contact Info</h5>
            <p><FaPhone /> +91 8421247834</p>
            <p><FaEnvelope /> vikasshelar369@gmail.com</p>
            <p><FaMapMarkerAlt /> Mumbai, India</p>
          </Col>
        </Row>

        <hr className="border-top border-light" />
        <p className="text-center text-primary" style={{fontWeight:'bold'}}>&copy; {new Date().getFullYear()} Vikas Shelar | All Rights Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
