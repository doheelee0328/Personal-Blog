import login from '../../image/Login.webp'
import { LoginWrapper, Form } from './Login.styled'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setPassword } from '../../components/action'

const Login = ({ registerLink }) => {
  const email = useSelector((state) => state.user.email)
  const password = useSelector((state) => state.user.password)

  const dispatch = useDispatch()

  const submitLoginHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
    dispatch(setEmail(''))
    dispatch(setPassword(''))
  }
  return (
    <LoginWrapper login={login}>
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
    </LoginWrapper>
  )
}

export default Login
