import Fashion from '../../image/Style.jpeg'
import EditDelete from '../icons /EditDelete'
import {
  SinglePost,
  SinglePostTitle,
  SinglePostInfo,
  Span,
  Name,
  SinglePostDescription,
  Introduction,
  imageStyledFashionProps,
} from './Singlepost.styled'
import Images from '../icons /Images'

const SinglePostStyle = () => {
  return (
    <SinglePost>
      <Images image={Fashion} styledProps={imageStyledFashionProps}></Images>
      <SinglePostTitle>LookBook</SinglePostTitle>
      <EditDelete></EditDelete>
      <SinglePostInfo>
        <Span>
          <strong>Author: </strong>
          <Name>Dohee Lee </Name>
        </Span>
        <span>2 hours ago</span>
      </SinglePostInfo>
      <SinglePostDescription>
        <Introduction> </Introduction>
      </SinglePostDescription>
    </SinglePost>
  )
}

export default SinglePostStyle
