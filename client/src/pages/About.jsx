import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1 className="section-title">About Me</h1>
        <p className="intro-text">
          Enthusiastic and dedicated Computer Science student with a strong foundation in Java programming,
          Software Development, and problem-solving. Seeking an opportunity to contribute to software development
          projects while gaining practical experience in a professional environment. Committed to delivering
          high-quality software and exceptional results.
        </p>
      </section>

      <section className="education-section">
        <h2 className="section-title">Education Journey</h2>
        <div className="education-card">
          <h3 className="education-title ">Master of Computer Applications (M.C.A)</h3>
          <p>Thakur Institute of Management Studies, Career Development & Research, Mumbai</p>
          <p className="education-score">Score: 8.92 CGPA</p>
          <p>2026</p>
        </div>
        <div className="education-card">
          <h3 className="education-title">B.Sc Computer Science</h3>
          <p>Rajarshi Shahu Mahavidyalaya, Latur (Autonomous)</p>
          <p className="education-score">Score: 81.68%</p>
          <p>2024</p>
        </div>
        <div className="education-card">
          <h3 className="education-title">Higher Secondary/Intermediate</h3>
          <p>Dayanand Science Junior College, Latur</p>
          <p className="education-score">Score: 96.83%</p>
          <p>2021</p>
        </div>
        <div className="education-card">
          <h3 className="education-title">Secondary School</h3>
          <p>Anant Tuljaram Naik Vidyalaya, Nalegaon</p>
          <p className="education-score">Score: 92.40%</p>
          <p>2019</p>
        </div>
      </section>

      <section className="skills-grid">
        <div className="skill-card">
          <h3 className="skill-title">Core Java</h3>
          <ul className="skill-list">
            <li>JDK, JRE, JVM Implementation</li>
            <li>OOPS concepts</li>
            <li>Exception Handling & Collection Framework</li>
            <li>Thread Handling & Memory Management</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">Advanced Java</h3>
          <ul className="skill-list">
            <li>Spring & Spring Boot</li>
            <li>JDBC & Hibernate</li>
            <li>RESTful Web Services</li>
            <li>MySQL, PostgreSQL & Oracle</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">SQL</h3>
          <ul className="skill-list">
            <li>RDBMS Design</li>
            <li>Complex Queries</li>
            <li>Functions & Stored Procedures</li>
            <li>Normalization & Optimization</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">Web Technologies</h3>
          <ul className="skill-list">
            <li>HTML, CSS, JS</li>
            <li>Bootstrap Framework</li>
            <li>React</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </section>

      <section className="achievements-section">
        <h2 className="section-title">Achievements</h2>
        <div className="achievement-card">
          <h3>INSA Summer Fellowship Recipient</h3>
          <p>Selected for INSA Summer 2025 for research excellence. </p>
        </div>
        <div className="achievement-card">
          <h3>3rd Prize Winner</h3>
          <p>Research Poster Presentation at ICAIM 2025 for <b>Your Lamp</b> project. </p>
        </div>
        <div className="achievement-card">
          <h3>4th Rank</h3>
          <p> Synapse 2025 for the <b>Alumni Connect</b> project.</p>
        </div>
        <div className="achievement-card">
          <h3>Student Council Member</h3>
          <p>Thakur Institute of Management Studies Career Development & Research (TIMSCDR). </p>
        </div>
        <div className="achievement-card">
          <h3>DLLE Student Manager</h3>
          <p>Department of Lifelong Learning and Extension (TIMSCDR). </p>
        </div>
        <div className="achievement-card">
          <h3>National Scholarship Recipient (2021 - 2024)</h3>
          <p>Academic excellence and performance</p>
        </div>
        <div className="achievement-card">
          <h3>RSM-HACKTHON S-23</h3>
          <p>Third Position in National Hackathon</p>
        </div>
        <div className="achievement-card">
          <h3>Avishkar Research Festival 2024</h3>
          <p>First Rank at University & District Level</p>
        </div>
        <div className="achievement-card">
          <h3>Outstanding Performance Award - 2024</h3>
          <p>Quick Heal Foundation, Pune</p>
        </div>
        <div className="achievement-card">
          <h3>Leadership Role</h3>
          <p>President of Techno Quest Student Association, RSM</p>
        </div>
      </section>

      <section className="certifications">
        <div className="cert-card">
          <i className="fas fa-award cert-icon"></i>
          <h3>Fundamentals of Object-Oriented Programming</h3>
          <p>NPTEL Silver Medal</p>
          <p>#Topper</p>
        </div>
        <div className="cert-card">
          <i className="fas fa-award cert-icon"></i>
          <h3>Programming in Java</h3>
          <p>NPTEL Silver Medal</p>
        </div>
        <div className="cert-card">
          <i className="fas fa-database cert-icon"></i>
          <h3>Database Management System</h3>
          <p>NPTEL</p>
        </div>
        <div className="cert-card">
          <i className="fas fa-code cert-icon"></i>
          <h3>Foundational C# with Microsoft (Feb, 2025).</h3>
          <p>freeCodeCamp</p>
        </div>
      </section>
    </div>
  );
};

export default About;
