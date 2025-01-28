import React from 'react';
import { useState } from 'react';

import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    window.location.href = '/home'
  };

  return (
    <>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <table>
            <tr>
              <td>
                <label htmlFor='username'>Username</label>
              </td>
              <td>
                <input type='text' name='username' id='username' placeholder='username' value={username} required  onChange={(e)=>setUsername(e.target.value)} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor='password'>Password</label>
              </td>
              <td>
                <input type='password' name='password' id='password' placeholder='password' value={password} required  onChange={(e)=>setPassword(e.target.value)} />
              </td>
            </tr>

            <tr>
              <td>
                <button type='submit'>Login</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default Login;
