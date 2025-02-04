import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import Login css file
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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
    // window.location.href = '/home';

    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', { username, password });
      alert(response.data.message); 
      navigate('/home');
      
    } catch (error) {
      setError(error.response?.data?.message || "Login failed!");
    }
  };

 
  return (
    <>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <table>
            <tr>
              <td>
                <label htmlFor='username' style={{ color: 'white' }}>
                  Username
                </label>
              </td>
              <td>
                <input type='text' name='username' id='username' placeholder='Enter username' value={username} required onChange={(e) => setUsername(e.target.value)} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor='password' style={{ color: 'white' }}>
                  Password
                </label>
              </td>
              <td>
                <input type='password' name='password' id='password' placeholder='Enter password' value={password} required onChange={(e) => setPassword(e.target.value)} />
              </td>
            </tr>

            <tr>
              <td>
                <button type='submit'>Login</button>
              </td>
              <td>
                <button type='submit' onClick={() => navigate('/signup')}>
                  Signup
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default Login;
