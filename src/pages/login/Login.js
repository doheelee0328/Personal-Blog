import login from '../../image/Login.webp'
import { LoginWrapper, Form } from './Login.styled'
const Login = () => {
  return (
    <LoginWrapper login={login}>
      <Form>
        <h1>Login</h1>
        <label>Email</label>
        <input type='email' name='email'></input>
        <label>Password</label>
        <input type='password' name='password'></input>
        <button type='submit'>Login</button>
        <button type='submit'>Register</button>
      </Form>
    </LoginWrapper>
  )
}

export default Login
