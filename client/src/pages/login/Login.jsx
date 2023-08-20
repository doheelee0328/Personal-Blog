import loginImage from '../../image/Login.webp'
import { LoginWrapper } from './Login.styled'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setPassword } from '../../components/action'
import { useLogin } from '../../hooks/useLogin'
import { SpinnerContainer } from '../../components/spinner/Spinner.styled'
import Spinner from '../../components/spinner/Spinner'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../scss/loginRegister.scss'

const Login = ({ registerLink }) => {
  const email = useSelector((state) => state.user.email)
  const password = useSelector((state) => state.user.password)

  const dispatch = useDispatch()

  const { login, spinner } = useLogin()

  const submitLoginHandler = (e) => {
    e.preventDefault()
    login(email, password)
    dispatch(setEmail(''))
    dispatch(setPassword(''))
  }

  const toastContainerStyle = {
    width: 'auto',
  }
  return (
    <LoginWrapper loginImage={loginImage}>
      <form onSubmit={submitLoginHandler} className='form-container'>
        <h1 className='form-header'>Login</h1>
        <div className='email-password-container'>
          <label className='labels'>Email</label>
          <input
            type='email'
            name='email'
            onChange={(e) => dispatch(setEmail(e.target.value))}
            className='inputs'
            value={email}
          />
          <label className='labels'>Password</label>
          <input
            type='password'
            name='password'
            onChange={(e) => dispatch(setPassword(e.target.value))}
            className='inputs'
            value={password}
          />
        </div>
        <button type='submit' className='buttons'>
          Login
        </button>
        <div className='another-direction'>
          <p className='new-user'>New user?</p>
          <Link to='/register' className='link-different-page'>
            <p onClick={registerLink} className='link-different-pages'>
              Register
            </p>
          </Link>
        </div>
      </form>
      <SpinnerContainer>{spinner && <Spinner />}</SpinnerContainer>
      <ToastContainer style={toastContainerStyle} />
    </LoginWrapper>
  )
}

export default Login
