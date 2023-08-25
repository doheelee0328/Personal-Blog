import React, { useEffect, useState } from 'react'
import { useEditComments } from '../../hooks/useEditComment'
import { useDeleteComments } from '../../hooks/useDeleteComment'
import axios from 'axios'
import { useToastMessage } from '../../context/Toast'
import { useAuthContext } from '../../hooks/useAuthContext'
import jwtDecode from 'jwt-decode'
import '../../scss/comment.scss'

const AllComments = ({ comment, filterPosts }) => {
  const [editMode, setEditMode] = useState(false)
  const [editComment, setEditComment] = useState('')
  const [like, setLike] = useState(comment.likes.length)
  const [isLike, setIsLike] = useState(false)
  const [userId, setUserID] = useState('')

  const { editComments } = useEditComments()
  const { user } = useAuthContext()
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
    if (user) {
      setEditMode(!editMode)
    } else {
      errorMessage('Plese sign in to edit your post')
    }
  }

  const editClickHandler = async (id) => {
    if (user) {
      await editComments(editComment, id)
      setEditComment('')
      setEditMode(false)
    } else {
      errorMessage('Plese sign in to edit your post')
    }
  }

  const deleteClickHandler = async (id) => {
    if (user) {
      await deleteComments(id)
    } else {
      errorMessage('Plese sign in to delete your post')
    }
  }

  const likeClickHandler = async (id) => {
    const url = `https://backend-personalblog.onrender.com/comment/${id}/like`
    const data = { userID: userId }
    if (user) {
      try {
        await axios.patch(url, data)
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
        successMessage(
          isLike
            ? 'it has been disliked successfully'
            : 'it has been lliked successfully'
        )
      } catch (error) {
        errorMessage(error.response.data.error)
      }
    } else {
      errorMessage('Please sign in to like the comment')
    }
  }

  const formDate = () => {
    return new Date().toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div className='comment-container'>
      {editMode && (
        <div className='name-description-container'>
          <div className='name-date-container'>
            <span span className='commennt-nmae'>
              {comment.name}
            </span>
            <span className='date'>{formDate()}</span>
          </div>
          <span className='commnet-description'>{comment.description}</span>
        </div>
      )}
      {editMode ? (
        <div className='update-container'>
          <textarea
            type='text'
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
            className='input-text'
          />
          <div className='button-container'>
            <button
              onClick={() => editClickHandler(comment._id)}
              className='buttons'
            >
              Update
            </button>
            <button onClick={() => setEditMode(false)} className='buttons'>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className='button-container'>
          <div className='name-description-container'>
            <div className='name-date-container'>
              <span span className='commennt-nmae'>
                {comment.name}
              </span>
              <span className='date'>{formDate()}</span>
            </div>
          </div>
          <span className='commnet-description'>{comment.description}</span>

          <i
            className='fa-regular fa-pen-to-square'
            onClick={toggleEditMode}
          ></i>
          <i
            className='fa-regular fa-trash-can'
            onClick={() => deleteClickHandler(comment._id)}
          ></i>
        </div>
      )}
      <div className='like-container'>
        <span onClick={() => likeClickHandler(comment._id)}>
          {isLike ? (
            <i className='fa-solid fa-heart'></i>
          ) : (
            <i className='fa-regular fa-heart'></i>
          )}
        </span>
        <div className='another-like-container'>
          <span>{like}</span>
          <span>{like === 0 && like === 1 ? 'likes' : 'like'}</span>
        </div>
      </div>
    </div>
  )
}

export default AllComments
