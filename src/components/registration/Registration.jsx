import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    
    window.location.href = `/login`; 
  };

  return (
    <>
      <Navbar />
      <section className="main">
        <div className="registration-container">
          <h2>Registration</h2>
          <form className="registration-form" onSubmit={handleRegistration}>
            <div className="form-group">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            </div>
            <button className="register_btn" type="submit">Register</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Registration;
