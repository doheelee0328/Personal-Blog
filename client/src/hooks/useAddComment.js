import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { useToastMessage } from '../context/Toast'

export const useAddComments = () => {
  const [addSpinner, setAddSpinner] = useState(false)
  const [userData, setUserData] = useState(null)

  const { successMessage, errorMessage } = useToastMessage()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'))

    if (token) {
      try {
        const decodedToken = jwtDecode(token.token)
        setUserData({
          id: decodedToken._id,
          name: decodedToken.name,
        })
      } catch (error) {
        console.log('Error decoding token:', error)
      }
    }
  }, [])

  const addComments = async (description, image) => {
    const url = `http://localhost:3001/comment`
    const data = {
      userID: userData.id,
      description: description,
      name: userData.name,
      image: image,
    }
    console.log(data)

    if (description) {
      try {
        const response = await axios.post(url, data)
        if (response.status === 201) {
          setAddSpinner(true)
          setTimeout(() => {
            setAddSpinner(false)
          }, 500)
          successMessage('Post has been added successfully')
        }
      } catch (error) {
        errorMessage(error.response.data.error)
      }
    } else {
      errorMessage('Please write a comment ')
    }
  }
  return { addComments, addSpinner }
}
