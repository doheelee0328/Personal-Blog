import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'

import { useToastMessage } from '../context/Toast'

export const useEditUser = () => {
  // usestate
  const [spinner, setSpinner] = useState(false)
  const [id, setID] = useState('')

  const { successMessage, errorMessage } = useToastMessage()
  const { dispatch } = useAuthContext()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'))

    if (token) {
      try {
        const decodedToken = jwtDecode(token.token)
        console.log(decodedToken._id)
        setID(decodedToken._id)
      } catch (error) {
        console.log('Error decoding token:', error)
      }
    }
  }, [])

  const editProfiles = async (name, email, password) => {
    const url = `http://localhost:3000/user/update/${id}`
    const data = {
      name: name,
      email: email,
      password: password,
    }
    console.log(data)

    try {
      const response = await axios.patch(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')}`,
        },
      })
      if (response.status === 200) {
        setSpinner(true)

        setTimeout(() => {
          successMessage('Profile updated successfully')
        }, 500)

        setTimeout(() => {
          setSpinner(false)
        }, 1000)

        dispatch({ type: 'Login', payload: response.data })
      } else {
        throw new Error(response.data.error)
      }
    } catch (error) {
      errorMessage(error.response.data.error)
      setSpinner(false)
    }
  }
  return { editProfiles, spinner }
}
