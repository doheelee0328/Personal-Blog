import { useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'
import { useToastMessage } from '../context/Toast'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
  const [spinner, setSpinner] = useState(false)
  const { dispatch } = useAuthContext()
  const { successMessage, errorMessage } = useToastMessage()
  const navigate = useNavigate()

  const register = async (name, email, password) => {
    setSpinner(true)

    const url = 'http://localhost:3000/user/register'
    const data = {
      name: name,
      email: email,
      password: password,
    }

    try {
      const response = await axios.post(url, data)
      if (response.status === 200) {
        dispatch({ type: 'Login', payload: response.data })
        localStorage.setItem('user', JSON.stringify(response.data))
        setSpinner(true)
        successMessage('Registered successfully')
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      }
    } catch (error) {
      setSpinner(false)
      errorMessage(error.response.data.error)
      console.log(error.response.data.error)
    }
  }

  return { register, spinner }
}
