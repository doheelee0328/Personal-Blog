import { useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './Toast.css'

export const useRegister = () => {
  // const [error, setError] = useState('')
  const [spinner, setSpinner] = useState(false)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

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

  const successMessage = (message) => {
    toast.success(message, {
      position: 'top-center',
      className: 'custom-toast-container',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

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
