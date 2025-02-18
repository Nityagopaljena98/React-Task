import React from 'react';
import './ChangePassword.css'

const ChangePassword = () => {
  return (
    <>
      <div className='chnage-password'>
        <div className='profile-details'>
          <div className='account-details-header'>
            <h3>Change Password</h3>
          </div>

          <form action=''>
            <div className='form-group'>
              <label htmlFor='current-password'>Current Password</label>
              <input type='password' name='current-password' id='current-password' />
            </div>

            <div className='form-group'>
              <label htmlFor='new-password'>New Password</label>
              <input type='password' name='new-password' id='new-password' />
            </div>

            <div className='form-group'>
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input type='password' name='confirm-password' id='confirm-password' />
            </div>

            <div className='button-group'>
              <button type='submit' className='save-btn'>
                Save New Password
              </button>
              <button type='button' className='cancel-btn'>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
