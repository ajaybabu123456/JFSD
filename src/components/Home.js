import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Scholarship Management System</h2>
        </div>
        <div className="navbar-links">
          <Link to="/login" className="nav-button">Login</Link>
          <Link to="/signup" className="nav-button signup-button">Sign Up</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to the Scholarship Management System</h1>
        <p>Manage your scholarships and financial aid efficiently.</p>
        <img src="/Books.1.png" alt="Your Image Description" />

      </div>
    </div>
  );
}

export default Home;
