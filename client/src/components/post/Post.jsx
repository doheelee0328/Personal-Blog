import {
  PostWrapper,
  ImageWrapper,
  PostInfo,
  PostDate,
  PostTitle,
  PostCategories,
} from './Post.styled'
const Post = ({ image, categories, title, postDate }) => {
  return (
    <PostWrapper>
      <ImageWrapper>
        <img className='image' src={image} alt='post' />
      </ImageWrapper>
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
