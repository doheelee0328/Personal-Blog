import lifeImage from '../../image/Life.jpeg'
import EditDelete from '../icons /EditDelete'
import {
  SinglePost,
  SinglePostTitle,
  SinglePostInfo,
  Span,
  Name,
  SinglePostDescription,
  imageStyledLifeProps,
} from './Singlepost.styled'
import Images from '../icons /Images'

const SinglePostCard = () => {
  return (
    <SinglePost>
      <Images image={lifeImage} styledProps={imageStyledLifeProps}></Images>
      <SinglePostTitle> The Story Of My Life</SinglePostTitle>
      <EditDelete></EditDelete>
      <SinglePostInfo>
        <Span>
          <strong>Author:</strong>
          <Name>Dohee Lee </Name>
        </Span>
        <span>2 hours ago</span>
      </SinglePostInfo>
      <SinglePostDescription></SinglePostDescription>
    </SinglePost>
  )
}

export default SinglePostCard
