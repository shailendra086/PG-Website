import React from "react";
import { Link } from "react-router-dom";
import "./styles/Signup.css";

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create an Account 🚀</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
