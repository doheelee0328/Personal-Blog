import React, { useEffect, useState } from 'react'
import { useAddComments } from '../../hooks/useAddComment'
import { useGetComments } from '../../hooks/useGetComments'
import Spinner from '../spinner/Spinner'
import '../../scss/comment.scss'
import { useAuthContext } from '../../hooks/useAuthContext'

const Comment = () => {
  const [comments, setComments] = useState({
    userId: '',
    description: '',
    reply: false,
  })
  const { user } = useAuthContext()
  const { addComments, addSpinner } = useAddComments()
  const { getComments, getSpinner, getPost } = useGetComments()

  const addCommentHandler = (e) => {
    setComments((prev) => ({
      ...prev,
      description: e.target.value,
    }))
  }

  const addClickHandler = async () => {
    await addComments(comments.description, comments.replyMessage)
    setComments((prev) => ({
      ...prev,
      description: '',
    }))
  }

  useEffect(() => {
    getComments()
  }, [getComments])

  const displayComments = () => {
    let message = <p>No Comments? Add here</p>

    if (getPost.length > 0) {
      message = getPost.map((comment) => (
        <div key={comment._id}>
          {comment.name}

          <p>{comment.description}</p>
        </div>
      ))
    }

    return message
  }

  return (
    <div>
      <h2 className='comments-title'>Comments</h2>
      <div className='form'>
        {user && user.name}
        <input
          type='text'
          onChange={addCommentHandler}
          value={comments.description}
        />
        <button onClick={addClickHandler}>Add</button>
      </div>

      {displayComments()}

      <div>{addSpinner && <Spinner />}</div>
      <div>{getSpinner && <Spinner />}</div>
    </div>
  )
}

export default Comment
