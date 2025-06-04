import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

const AppNavbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand logo-name" to="/">📝 Task Manager</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto navdiv">
          <li className="nav-item">
            <Link className="nav-link text-info titlename" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link titlename" to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link titlename" href="https://github.com/vickyshelar96k/Task-Manager" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link titlename" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default AppNavbar;
