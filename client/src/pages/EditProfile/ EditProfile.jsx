import React from 'react'
import img from '../../image/blankProfile.webp'
import '../../scss/editProfile.scss'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useEffect } from 'react'
import { useEditUser } from '../../hooks/useEditUser'
import { useSelector, useDispatch } from 'react-redux'
import {
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
} from '../../components/action'
import { useToastMessage } from '../../context/Toast'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from '../../components/spinner/Spinner'
import { SpinnerEditContainer } from '../../components/spinner/Spinner.styled'

const EditProfile = () => {
  const { user } = useAuthContext()

  const name = useSelector((state) => (user ? state.user.name : ''))
  const email = useSelector((state) => (user ? state.user.email : ''))
  const password = useSelector((state) => state.user.password || '')
  const confirmPassword = useSelector(
    (state) => state.user.confirmPassword || ''
  )

  const { errorMessage } = useToastMessage()

  const dispatch = useDispatch()

  const { editProfiles, spinner } = useEditUser()

  // Update the input values when the user changes
  useEffect(() => {
    if (user) {
      dispatch(setName(user.name))
      dispatch(setEmail(user.email))
    }
  }, [user, dispatch])

  const updateUser = async () => {
    if (password !== confirmPassword) {
      errorMessage('Passwords do not match')
    } else {
      await editProfiles(name, email, password)
    }

    dispatch(setPassword(''))
    dispatch(setConfirmPassword(''))
  }

  return (
    <>
      <div className='background-profile'>
        <div className='forms'>
          <div className='more-form-container'>
            <img src={img} alt='edit-profile' className='edit-profile' />
            <div className='email-password '>
              <label className='labels'>Name</label>
              <input
                type='text'
                className='inputs'
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
              <label className='labels'>Email</label>

              <input
                type='email'
                name='email'
                className='inputs'
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />

              <label className='labels'>Password</label>
              <input
                type='password'
                className='inputs'
                onChange={(e) => dispatch(setPassword(e.target.value))}
                value={password}
              />
              <label className='labels'>Confirm Password</label>
              <input
                type='password'
                className='inputs'
                value={confirmPassword}
                onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
              />
            </div>
            <div className='button-containers'>
              <button className='profile-buttons' onClick={updateUser}>
                Edit Profile
              </button>
              <button className='profile-buttons'>Delete Profile</button>
            </div>
          </div>
        </div>
        <SpinnerEditContainer>{spinner && <Spinner />}</SpinnerEditContainer>
      </div>
    </>
  )
}

export default EditProfile
