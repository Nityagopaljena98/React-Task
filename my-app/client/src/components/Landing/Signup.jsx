import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import Signup css file
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '' });

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
      navigate('/'); // Redirected to the login page
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed!');
    }
  };

  window.addEventListener('load', function () {
    var firstInput = document.getElementById('name');
    if (firstInput) {
      firstInput.focus();
    }
  });


  return (
    <>
      <div className='signup-bg'>
        <div className='signup-box'>
          <form onSubmit={handleSubmit}>
            <h2>Create a account!</h2>
            <table>
              <tbody>
                <tr>
                  {/* <td>
                    <label htmlFor='name'>Name</label>
                  </td> */}
                  <td>
                    <input type='text' name='name' id='name' placeholder='Full Name' onChange={handleChange} required />
                  </td>
                </tr>
                <tr>
                  {/* <td>
                    <label htmlFor='username'>Username</label>
                  </td> */}
                  <td>
                    <input type='text' name='username' id='username' placeholder='Username' onChange={handleChange} required />
                  </td>
                </tr>
                <tr>
                  {/* <td>
                    <label htmlFor='email'>Email</label>
                  </td> */}
                  <td>
                    <input type='email' name='email' id='email' placeholder='Enter Email' onChange={handleChange} required />
                  </td>
                </tr>
                <tr>
                  {/* <td>
                    <label htmlFor='password'>Password</label>
                  </td> */}

                  <td>
                  <input
                    type= 'password'
                    name='password'
                    id='password'
                    placeholder='Your password'
                    value={formData.password}
                    required
                    onChange={handleChange}
                  />
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <button type='submit' className='signup-btn'>
                      Sign Up
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className='login-link'>
              Already have an account? <Link to='/'>Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
