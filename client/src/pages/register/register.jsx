import loginImage from '../../image/Login.webp'
import { LoginWrapper } from '../login/Login.styled'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useToastMessage } from '../../context/Toast'
import 'react-toastify/dist/ReactToastify.css'
import {
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
} from '../../components/action'
import { useRegister } from '../../hooks/useRegister'
import Spinner from '../../components/spinner/Spinner'
import { SpinnerRegisterContainer } from './register.styled'
import { ToastContainer } from 'react-toastify'

import '../../scss/loginRegister.scss'

const Register = ({ registerLink }) => {
  const email = useSelector((state) => state.user.email)
  const name = useSelector((state) => state.user.name)
  const password = useSelector((state) => state.user.password)
  const confirmPassword = useSelector((state) => state.user.confirmPassword)

  const { register, spinner } = useRegister()
  const { errorMessage } = useToastMessage()

  const dispatch = useDispatch()

  const toastContainerStyle = {
    width: 'auto',
  }

  const submitRegisterHandler = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      errorMessage('Passwords do not match')
    } else {
      await register(name, email, password)
    }

    console.log(name, email, password, confirmPassword)

    dispatch(setEmail(''))
    dispatch(setName(''))
    dispatch(setPassword(''))
    dispatch(setConfirmPassword(''))
  }
  return (
    <LoginWrapper loginImage={loginImage}>
      <form onSubmit={submitRegisterHandler} className='form-container'>
        <h1 className='form-header'>Register</h1>
        <div className='email-password-container'>
          <label className='labels'>Name</label>
          <input
            type='text'
            name='name'
            onChange={(e) => dispatch(setName(e.target.value))}
            value={name}
            className='inputs'
          />
          <label className='labels'>Email</label>
          <input
            type='email'
            name='email'
            onChange={(e) => dispatch(setEmail(e.target.value))}
            value={email}
            className='inputs'
          />
          <label className='labels'>Password</label>
          <input
            type='password'
            name='password'
            onChange={(e) => dispatch(setPassword(e.target.value))}
            value={password}
            className='inputs'
          />
          <label className='labels'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
            value={confirmPassword}
            className='inputs'
          />
        </div>
        <button type='submit' className='buttons'>
          Register
        </button>
        <div className='another-direction'>
          <p className='new-user'>Already A User?</p>
          <Link to='/login' className='link-different-page'>
            <p onClick={registerLink} className='link-different-pages'>
              Login
            </p>
          </Link>
        </div>
      </form>
      <SpinnerRegisterContainer>
        {spinner && <Spinner />}
      </SpinnerRegisterContainer>
      <ToastContainer style={toastContainerStyle} />
    </LoginWrapper>
  )
}

export default Register
