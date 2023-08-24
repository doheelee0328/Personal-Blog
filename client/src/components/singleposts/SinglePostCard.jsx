// import lifeImage from '../../image/Life.jpeg'

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
import { useParams } from 'react-router-dom'
import Comment from '../comment/Comment'

const SinglePostCard = ({ image }) => {
  let { id } = useParams()

  const filterPosts = info.find((el) => el.id === parseInt(id))

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
      <Comment image={image} filterPosts={filterPosts} />
    </SinglePostContainer>
  )
}
export default SinglePostCard
