import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // User icon
import { useNavigate } from 'react-router-dom';
// import Header css file
import './Header.css';

const Header = () => {
  const [username, setUsername] = useState(sessionStorage.getItem('username') || '');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = sessionStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    setUsername('');
    navigate('/home')
  };

  // Go to the EditProfile Page 
  const Editprofile = () => {
    navigate('/edit-profile')
    window.location.reload();
  }

  return (
    <>
      <div className='header'>
        <Link to='/home'>Home</Link>
        <Link to='/service'>Service</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>

        {/* To show the username in the header  */}
        {username ? (
          <div className='user-dropdown'>
            <div className='user-info' onClick={() => setDropdownOpen(!dropdownOpen)}>
              <FaUserCircle size={24} />
              <span>{username}</span>
            </div>

            {dropdownOpen && (
              <div className='dropdown-menu'>
                <button className='logout' onClick={handleLogout}>
                  Logout
                </button>
                <button className='edit-profile'  onClick={Editprofile}>Edit Profile</button>
              </div>
            )}
          </div>
        ) : (
          <Link to='/'>Login</Link>
        )}
      </div>
    </>
  );
};

export default Header;
