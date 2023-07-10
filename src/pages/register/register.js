import React from 'react'
import login from '../../image/Login.webp'

import { LoginWrapper, Form } from '../login/Login.styled'
import { Link } from 'react-router-dom'

const Register = ({ registerLink }) => {
  return (
    <LoginWrapper login={login}>
      <Form>
        <h1>Register</h1>
        <label>Name</label>
        <input type='email' name='email'></input>
        <label>Email</label>
        <input type='email' name='email'></input>
        <label>Password</label>
        <input type='password' name='password'></input>
        <label>Confirm Password</label>
        <input type='password' name='password'></input>
        <button type='submit'>Register</button>
        <p>Already Have an Account?</p>
        <Link to='/login'>
          <button onClick={registerLink}>Login</button>
        </Link>
      </Form>
    </LoginWrapper>
  )
}

export default Register
