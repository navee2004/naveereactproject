
import React, { useState } from 'react';
import './signup.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/forms/authForm/AuthForm';
import axios from 'axios';

const Signup = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSignup = async () => {
    try {
      // Send a POST request to the JSON Server endpoint for signup
      const response = await axios.post('http://localhost:3001/users', userData);

      // Handle the server response, redirect, or perform actions accordingly
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  const handleInputChange = (fieldName, value) => {
    setUserData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  return (
    <React.Fragment>
      <Navbar darkText={true} />
      <section className="signup-container">
        <div className='signup-img-container'>
          <img src={AuthBgImg} alt="authentication-background" />
        </div>
        <div className="signup-content-container">
          <div className="container">
            <div className="content-wrapper">
              <h2>Signup</h2>
              <AuthForm
                buttonName="Sign Up"
                onInputChange={handleInputChange}
                onSubmit={handleSignup}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Signup;