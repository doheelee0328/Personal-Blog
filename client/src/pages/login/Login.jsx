import loginImage from '../../image/Login.webp'
import { LoginWrapper, Form } from './Login.styled'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setPassword } from '../../components/action'
import { useLogin } from '../../hooks/useLogin'
import { SpinnerContainer } from '../register/register.styled'
import Spinner from '../../components/spinner/Spinner'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      <Form onSubmit={submitLoginHandler}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type='email'
          name='email'
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <button type='submit'>Login</button>
        <p>New user?</p>
        <Link to='/register'>
          <button onClick={registerLink}>Register</button>
        </Link>
      </Form>
      <SpinnerContainer>{spinner && <Spinner />}</SpinnerContainer>
      <ToastContainer style={toastContainerStyle} />
    </LoginWrapper>
  )
}

export default Login
