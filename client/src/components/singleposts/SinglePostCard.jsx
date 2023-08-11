// import lifeImage from '../../image/Life.jpeg'
import EditDelete from '../icons /EditDelete'
import {
  SinglePost,
  SinglePostTitle,
  SinglePostInfo,
  Span,
  Name,
  SinglePostDescription,
  SinglePostContainer,
} from './Singlepost.styled'
import { info } from '../post/PostInfo'
import { useParams, useNavigate } from 'react-router-dom'

const SinglePostCard = () => {
  let { id } = useParams()

  const filterPosts = info.find((el) => el.id === parseInt(id))

  const navigate = useNavigate()

  const backButton = () => {
    navigate('/')
  }

  return (
    <SinglePostContainer className='single-post-container'>
      <SinglePost>
        <div key={filterPosts.id}>
          <img
            src={filterPosts.image}
            alt={filterPosts.title}
            className='image'
          />
          <SinglePostTitle>{filterPosts.title}</SinglePostTitle>
          <EditDelete />
          <SinglePostInfo>
            <Span>
              <strong>Author:</strong>
              <Name>Dohee Lee</Name>
            </Span>
            <span>{filterPosts.postDate}</span>
          </SinglePostInfo>
          <SinglePostDescription>
            {filterPosts.description}
          </SinglePostDescription>
        </div>
      </SinglePost>
      <button onClick={backButton}>Back To The Homepage</button>
    </SinglePostContainer>
  )
}
export default SinglePostCard
