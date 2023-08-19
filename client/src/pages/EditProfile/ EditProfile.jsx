import React from 'react'
import img from '../../image/blankProfile.webp'
import '../../scss/editProfile.scss'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useState } from 'react'
import { useEffect } from 'react'

const EditProfile = () => {
  const { user } = useAuthContext()

  const [name, setName] = useState(user && user.name)
  const [email, setEmail] = useState(user && user.email)

  // Update the input values when the user changes
  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
    }
  }, [user])

  return (
    <>
      <div className='background-profile'> </div>
      <form className='forms'>
        <div className='more-form-container'>
          <img src={img} alt='edit-profile' className='edit-profile' />
          <div className='email-password '>
            <label className='labels'>Name</label>
            <input
              type='text'
              className='inputs'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className='labels'>Email</label>

            <input
              type='text'
              className='inputs'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
