import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {

  const [username, setUsername] = useState(null)

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    }
  },[])

  return (
    <>
      <div className='header'>
        <Link to='/home'>Home</Link>
        <Link to='/service'>Service</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> 

        {/* To show the username in the header  */}
      {username && <span className="username-display">Welcome, {username}</span>}
        
      </div>
    </>
  );
};

export default Header;
