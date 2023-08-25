import { useState } from 'react'
import axios from 'axios'
import { useToastMessage } from '../context/Toast'

export const useDeleteComments = () => {
  const [deleteSpinner, setDeleteSpinner] = useState(false)

  const { successMessage, errorMessage } = useToastMessage()

  const deleteComments = async (id) => {
    const url = `https://backend-personalblog.onrender.com/comment/${id}`

    try {
      const response = await axios.delete(url)
      console.log(response)
      if (response.status === 200) {
        setDeleteSpinner(true)

        successMessage('Post has been deleted successfully')
      }
    } catch (error) {
      errorMessage(error.response.data.message)
    }
  }

  return { deleteComments, deleteSpinner }
}
