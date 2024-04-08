import { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

import Navbar from "../../components/navbar/Navbar";
import "./Login.css";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Navbar />
      <section className="main">
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form">
            <div className="form-group">
              <input type="email" id="email" placeholder="E-mail" />
            </div>
            <div className="form-group password-input" >
              <input
                type={passwordVisible ? "text" : "password"}
                       id="password"
                     
                placeholder="Password"
              />
              {passwordVisible ? (
                <FaEye className="toggle-password"  onClick={togglePasswordVisibility} />
              ) : (
                < FaEyeSlash className="toggle-password" onClick={togglePasswordVisibility} />
              )}
            </div>
            <Link to= "/welcome"><button className="sign_btn" type="submit">Login</button> </Link>
          </form>
          <div className="or">
            <h4>or</h4>
          </div>
          <div className="social-login-options">
            <button className="google-login"><FaGoogle /> Sign in with Google</button>
            <button className="facebook-login"><FaFacebook /> Sign in with Facebook</button>
            <button className="apple-login"><FaApple /> Sign in with Apple</button>
          </div>
          <div className="login-links">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Forgot your password?</a>
            <a className="rm_underline" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Don't have an account? </a> <a href="/registration"><span>Sign Up</span></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
