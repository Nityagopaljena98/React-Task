import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';

const EditProfile = () => {
 
  const navigate = useNavigate()
  
  const ChangePasswordBtn = () => {
    navigate('/edit-profile-password')
  }
 

  return (
    <div className='edit-profile'>
      <div className='profile-details'>
        <div className='account-details-header'>
          <h3>Edit Profile</h3>
        </div>

        <form onSubmit=''>
          <div className='form-group'>
            <label htmlFor='name'>Full Name</label>
            <input type='text' name='name' id='name' value='' />
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' id='username' value='' />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' value='' />
          </div>

          <div className='button-group'>
            <button type='submit' className='save-btn'>
              Save
            </button>

            <button type='button' className='change-btn' onClick={ChangePasswordBtn}  >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
