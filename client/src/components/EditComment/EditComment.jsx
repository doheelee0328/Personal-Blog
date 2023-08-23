import React, { useEffect, useState } from 'react'
import { useEditComments } from '../../hooks/useEditComment'
import { useDeleteComments } from '../../hooks/useDeleteComment'
import axios from 'axios'
import { useToastMessage } from '../../context/Toast'
import jwtDecode from 'jwt-decode'

const AllComments = ({ comment }) => {
  const [editMode, setEditMode] = useState(false)
  const [editComment, setEditComment] = useState('')
  const [like, setLike] = useState(comment.likes.length)
  const [isLike, setIsLike] = useState(false)
  const [userId, setUserID] = useState('')

  const { editComments } = useEditComments()
  const { deleteComments } = useDeleteComments()

  const { successMessage, errorMessage } = useToastMessage()

  useEffect(() => {
    setIsLike(comment.likes.includes(userId))
  }, [userId, comment.likes])

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'))

    if (token) {
      try {
        const decodedToken = jwtDecode(token.token)
        console.log(decodedToken._id)
        setUserID(decodedToken._id)
      } catch (error) {
        console.log('Error decoding token:', error)
      }
    }
  }, [])

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const editClickHandler = async (id) => {
    await editComments(editComment, id)
    setEditComment('')
  }

  const deleteClickHandler = async (id) => {
    await deleteComments(id)
  }

  const likeClickHandler = (id) => {
    const url = `http://localhost:3001/comment/${id}/like`
    const data = { userID: userId }
    try {
      axios.patch(url, data)
    } catch (error) {
      errorMessage('There has been a problem')
    }
    // errorMessage('Error liking/disliking comment:', error)
    setLike(isLike ? like - 1 : like + 1)
    setIsLike(!isLike)
    successMessage(
      isLike
        ? 'it has been disliked successfully'
        : 'it has been like successfully'
    )
  }

  return (
    <div>
      <p>{comment.name}</p>
      <p>{comment.description}</p>
      {editMode ? (
        <div>
          <input
            type='text'
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
          />
          <button onClick={() => editClickHandler(comment._id)}>Update</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={toggleEditMode}>Edit</button>
      )}
      <button onClick={() => deleteClickHandler(comment._id)}>Delete</button>
      <span onClick={() => likeClickHandler(comment._id)}>
        {isLike ? (
          <i className='fa-regular fa-thumbs-up'></i>
        ) : (
          <i class='fa-regular fa-thumbs-down'></i>
        )}
      </span>

      <span>{like} people like it</span>
    </div>
  )
}

export default AllComments
