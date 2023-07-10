import Sidebar from '../../../components/sidebar/Sidebar'
import SinglePostLife from '../../../components/singleposts/SinglePostLife'
import SinglePostStyle from '../../../components/singleposts/singlePostStyle'
import SinglePostMusic from '../../../components/singleposts/SinglePostMusic'
import { SinglePostWrapper } from './SinglePost.styled'

const SinglePosts = () => {
  return (
    <SinglePostWrapper>
      <SinglePostStyle></SinglePostStyle>
      <Sidebar />
    </SinglePostWrapper>
  )
}
//          <SinglePostLife></SinglePostLife>
//       <SinglePostStyle></SinglePostStyle>

export default SinglePosts
