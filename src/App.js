import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import Home
import Login from './components/Login'; // Import Login
import Signup from './components/Signup'; // Import Signup
//import Navbar from './components/Navbar';
// import Dashboard from './components/Dashboard';
// import ScholarshipList from './components/ScholarshipList';
// import ApplicationList from './components/ApplicationList';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/scholarships" component={ScholarshipList} />
        <Route path="/applications" component={ApplicationList} /> */}
      </Routes>
    </Router>
  );
}

export default App;
