import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

// import Login css file
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  // Logic for fixed bg color for Login
  useEffect(() => {
    document.body.classList.add('login-bg');
    return () => {
      document.body.classList.remove('login-bg');
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', { username, password });

      // Store JWT token and username in sessionStorage
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('username', response.data.username);

      alert(response.data.message);
      navigate('/home');
      window.location.reload();
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed!');
    }
  };

  window.addEventListener('load', function () {
    var firstInput = document.getElementById('username');
    if (firstInput) {
      firstInput.focus();
    }
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className='login-bg'>
        <div className='login-box'>
          <form onSubmit={handleSubmit}>
            <h2>Welcome Back!</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table>
              <tbody>
                <tr>
                  {/* <td>
                    <label htmlFor='username'>Username</label>
                  </td> */}
                  <td>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Enter username or email'
                      value={username}
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  {/* <td>
                    <label htmlFor='password'>Password</label>
                  </td> */}
                  <td>
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      name='password'
                      id='password'
                      placeholder='Your password'
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span onClick={togglePasswordVisibility} className='eye-icon'>
                      {passwordVisible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td colSpan='2'>
                    <button type='submit' className='login-btn'>
                      Log in
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className='signup-link'>
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
