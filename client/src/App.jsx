import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskManager from './pages/TaskManager';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div className="container mt-4"><h2>404 - Page Not Found</h2></div>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
