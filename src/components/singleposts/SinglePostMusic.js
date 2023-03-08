import {
  SinglePost,
  SinglePostTitle,
  SinglePostInfo,
  Span,
  Name,
  SinglePostDescription,
} from './Singlepost.styled'
import Music from '../../image/Music.jpeg'
import EditDelete from '../icons /EditDelete'
import Images from '../icons /Images'
import { imageStyledMusicProps } from './Singlepost.styled'
const SinglePostMusic = () => {
  return (
    <SinglePost>
      <Images image={Music} styledProps={imageStyledMusicProps}></Images>
      <SinglePostTitle> My Favourite music</SinglePostTitle>
      <EditDelete></EditDelete>
      <SinglePostInfo>
        <Span>
          <strong>Author:</strong>
          <Name>Dohee Lee </Name>
        </Span>
        <span>4 hours ago</span>
      </SinglePostInfo>
      <SinglePostDescription></SinglePostDescription>
    </SinglePost>
  )
}

export default SinglePostMusic

/*  <SinglePostImage height='470px'>
        <img src={Music} alt='my music' />
      </SinglePostImage>
*/
