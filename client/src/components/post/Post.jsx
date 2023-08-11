import {
  PostWrapper,
  ImageWrapper,
  PostInfo,
  PostDate,
  PostTitle,
  PostCategories,
} from './Post.styled'
import { Link } from 'react-router-dom'
const Post = ({ id, image, categories, title, postDate }) => {
  return (
    <PostWrapper>
      <Link to={`single-post/${id}`}>
        <ImageWrapper>
          <img className='image' src={image} alt='post' />
        </ImageWrapper>
      </Link>

      <PostInfo>
        <PostCategories>
          <PostCategories>{categories}</PostCategories>
        </PostCategories>
        <PostTitle>{title}</PostTitle>
        <PostDate>{postDate}</PostDate>
      </PostInfo>
    </PostWrapper>
  )
}

export default Post
