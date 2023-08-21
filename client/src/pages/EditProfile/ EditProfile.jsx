import React, { useState } from 'react'
import Profile from '../../components/profile/Profile'
import '../../scss/editProfile.scss'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useEffect } from 'react'
import { useToastMessage } from '../../context/Toast'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from '../../components/spinner/Spinner'
import { SpinnerEditContainer } from '../../components/spinner/Spinner.styled'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEditUser } from '../../hooks/useEditUser'
import { useDeleteUser } from '../../hooks/useDeleteUser'

const EditProfile = () => {
  const { user } = useAuthContext()

  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [password, setPassword] = useState(user ? user.password : '')
  const [confirmPassword, setConfirmPassword] = useState(
    user ? user.confirmPassword : ''
  )
  const [show, setShow] = useState(false)
  const [action, setAction] = useState(null)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { errorMessage } = useToastMessage()

  const { editProfiles, spinner } = useEditUser()
  const { deleteProfiles, spinners } = useDeleteUser()

  // Update the input values when the user changes
  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
    }
  }, [user])

  const updateUser = async () => {
    if (password !== confirmPassword) {
      errorMessage('Passwords do not match')
    } else {
      await editProfiles(name, email, password)
    }
    setShow(false)
    setPassword('')
    setConfirmPassword('')
  }

  const deleteUser = async () => {
    await deleteProfiles(name, email, password)
    setShow(false)
  }

  return (
    <>
      <div className='background-profile'>
        <div className='forms'>
          <div className='more-form-container'>
            <Profile />
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
                type='email'
                name='email'
                className='inputs'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className='labels'>Password</label>
              <input
                type='password'
                className='inputs'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label className='labels'>Confirm Password</label>
              <input
                type='password'
                className='inputs'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className='button-containers'>
              <button
                className='profile-buttons'
                onClick={() => {
                  handleShow()
                  setAction('edit')
                }}
              >
                Edit Profile
              </button>
              <button
                className='profile-buttons'
                onClick={() => {
                  handleShow()
                  setAction('delete')
                }}
              >
                Delete Profile
              </button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
                className='modal-container'
              >
                <Modal.Header
                  style={{
                    fontSize: '18px',
                  }}
                  closeButton
                ></Modal.Header>
                <Modal.Body
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bolder',
                    fontSize: '18px',
                  }}
                >
                  {action === 'edit'
                    ? 'Are you sure you want to edit the profile?'
                    : 'Are you sure you want to delete the profile?'}
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={action === 'edit' ? updateUser : deleteUser}
                    style={{
                      backgroundColor: 'transparent',
                      width: '80px',
                      border: '2px solid #828282',
                      color: 'black',
                    }}
                  >
                    Yes
                  </Button>
                  <Button
                    style={{
                      backgroundColor: 'transparent',
                      width: '80px',
                      border: '2px solid #828282',
                      color: 'black',
                    }}
                    onClick={handleClose}
                    className='buttons'
                  >
                    No
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
        <SpinnerEditContainer>{spinner && <Spinner />}</SpinnerEditContainer>
        <SpinnerEditContainer>{spinners && <Spinner />}</SpinnerEditContainer>
      </div>
    </>
  )
}

export default EditProfile
