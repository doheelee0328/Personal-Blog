import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'
import { useToastMessage } from '../context/Toast'
import { useNavigate } from 'react-router-dom'

export const useDeleteUser = () => {
  // usestate
  const [spinners, setSpinners] = useState(false)
  const [id, setID] = useState('')

  const { successMessage, errorMessage } = useToastMessage()
  const { dispatch } = useAuthContext()

  const navigate = useNavigate()

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

  const deleteProfiles = async (name, email, password) => {
    const url = `http://localhost:3000/user/delete/${id}`
    const data = {
      name: name,
      email: email,
      password: password,
    }
    console.log(data)

    try {
      const response = await axios.delete(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')}`,
        },
      })
      if (response.status === 200) {
        setSpinners(true)
        localStorage.clear()
        dispatch({ type: 'Logout' })
        successMessage('It has been deleted successfully')

        setTimeout(() => {
          setSpinners(false)
        }, 500)

        setTimeout(() => {
          navigate('/')
        }, 2000)
      } else {
        throw new Error('There has been a problem deleting your profile')
      }
    } catch (error) {
      errorMessage(error.message)
      setSpinners(false)
    }
  }
  return { deleteProfiles, spinners }
}
