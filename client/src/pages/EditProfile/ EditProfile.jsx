import React from 'react'
import img from '../../image/blankProfile.webp'
import '../../scss/editProfile.scss'

const EditProfile = () => {
  return (
    <>
      <div className='background-profile'> </div>
      <form className='form'>
        <div className='more-form-container'>
          <img src={img} alt='edit-profile' className='edit-profile' />
          <div className='email-password '>
            <label className='labels'>Name</label>
            <input type='text' className='inputs' />
            <label className='labels'>Email</label>
            <input type='text' className='inputs' />
            <label className='labels'>Password</label>
            <input type='text' className='inputs' />
            <label className='labels'>Confirm Password</label>
            <input type='text' className='inputs' />
          </div>
          <div className='button-containers'>
            <button className='profile-buttons'>Edit Profile</button>
            <button className='profile-buttons'>Delete Profile</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditProfile
