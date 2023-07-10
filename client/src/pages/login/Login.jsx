import login from '../../image/Login.webp'

import { LoginWrapper, Form } from './Login.styled'
import { Link } from 'react-router-dom'
const Login = ({ registerLink }) => {
  return (
    <LoginWrapper login={login}>
      <Form>
        <h1>Login</h1>
        <label>Email</label>
        <input type='email' name='email'></input>
        <label>Password</label>
        <input type='password' name='password'></input>
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
