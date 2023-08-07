import login from '../../image/Login.webp'
import { LoginWrapper, Form } from '../login/Login.styled'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
} from '../../components/action'
import { useRegister } from '../../hooks/useRegister'
import Spinner from '../../components/spinner/Spinner'
import { SpinnerContainer } from './register.styled'
import '../../hooks/Toast.css'

const Register = ({ registerLink }) => {
  const email = useSelector((state) => state.user.email)
  const name = useSelector((state) => state.user.name)
  const password = useSelector((state) => state.user.password)
  const confirmPassword = useSelector((state) => state.user.confirmPassword)

  const { register, spinner } = useRegister()

  const dispatch = useDispatch()

  const toastContainerStyle = {
    width: 'auto',
  }

  const errorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      className: 'custom-toast-container',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
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
    <LoginWrapper login={login}>
      <Form onSubmit={submitRegisterHandler}>
        <h1>Register</h1>
        <label>Name</label>
        <input
          type='text'
          name='name'
          onChange={(e) => dispatch(setName(e.target.value))}
          value={name}
        />
        <label>Email</label>
        <input
          type='email'
          name='email'
          onChange={(e) => dispatch(setEmail(e.target.value))}
          value={email}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={(e) => dispatch(setPassword(e.target.value))}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
          value={confirmPassword}
        />
        <button type='submit'>Register</button>
        <p>New user?</p>
        <Link to='/login'>
          <button onClick={registerLink}>Login</button>
        </Link>
      </Form>
      <SpinnerContainer>{spinner && <Spinner />}</SpinnerContainer>
      <ToastContainer style={toastContainerStyle} />
    </LoginWrapper>
  )
}

export default Register
