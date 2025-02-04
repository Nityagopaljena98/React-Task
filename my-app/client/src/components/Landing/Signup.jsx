import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Signup css file
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', username: '', password: '' });

  // Logic for fixed-bg color for Signup
  useEffect(() => {
    document.body.classList.add('signup-bg');

    return () => {
      document.body.classList.remove('signup-bg');
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', formData);
      alert(response.data.message);
      navigate('/');  // Redirected to the login page
      
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed!');
    }
  };

  return (
    <>
      <div className='signup'>
        <form onSubmit={handleSubmit}>
          <h2>Signup Form</h2>
          <table>
            <tr>
              <td>
                <label htmlFor='name' style={{ color: 'white' }}>
                  Name
                </label>
              </td>
              <td>
                <input type='text' name='name' placeholder='Enter your name' id='name' onChange={handleChange} required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='username' style={{ color: 'white' }}>
                  Username
                </label>
              </td>
              <td>
                <input type='email' name='username' id='username' placeholder='Enter email as a username' onChange={handleChange}  required />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor='password' style={{ color: 'white' }}>
                  Password
                </label>
              </td>
              <td>
                <input type='password' name='password' id='password' placeholder='Enter password' onChange={handleChange}  required />
              </td>
            </tr>

            <tr>
              <td>
                <button type='submit'>SignUp</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default Signup;
