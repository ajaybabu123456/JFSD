import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    console.log('Login attempted with:', { email, password });

    // Simulate successful login (replace with API logic)
    alert("Login successful!");

    // Clear error if login is successful
    setError('');
  };

  const handleSignup = () => {
    // Navigate to the Sign Up page
    navigate('/signup');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        
        {/* Error Message */}
        {error && <div style={styles.error}>{error}</div>}

        {/* Email Input */}
        <label style={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
          aria-label="Email"
        />

        {/* Password Input */}
        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={styles.input}
          aria-label="Password"
        />

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Login
        </button>

        {/* Sign Up Button */}
        <button type="button" onClick={handleSignup} style={{ ...styles.button, marginTop: '10px', backgroundColor: '#2196F3' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

// Styling for the form and elements
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  form: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    textAlign: 'left',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Login;
