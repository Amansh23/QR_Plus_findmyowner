import React, { useState } from "react";
import "./Login.css";
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="Login_main_container">
      <NavBar />
      <div className="login-page hero">
        <div className="hero-dots"></div>
        <div className="hero-circle1"></div>
        <div className="hero-circle2"></div>
        <div className="login-container">
          <div className="login-card">
            <div className="login-logo">
              <div className="login-logo-icon">
                <span>Q</span>
              </div>
              <div className="login-logo-text">
                <strong>FindMyOwner</strong>
                <small>Smart & Secure</small>
              </div>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-form-group">
                <label htmlFor="email">Email Address</label>
                <div className="login-input-wrapper">
                  <span className="login-input-icon">✉</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="login-form-group">
                <div className="login-label-row">
                  <label htmlFor="password">Password</label>
                  <Link
                    //   href="/forgot-password"
                    className="login-forgot"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="login-input-wrapper">
                  <span className="login-input-icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>
              <div className="login-options">
                <label className="login-checkbox">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
              </div>
              <button type="submit" className="btn btn-primary login-submit">
                Login
                <span>→</span>
              </button>
            </form>
            <div className="login-divider">
              <span>OR</span>
            </div>
            <div className="login-register">
              <p>
                Don't have an account?
                <Link
                //   href="/register"
                >
                  {" "}
                  Create an account
                </Link>
              </p>
            </div>
          </div>
          <div className="login-footer">
            <span>Secure Login</span>
            <span>•</span>
            <span>Your information is protected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
