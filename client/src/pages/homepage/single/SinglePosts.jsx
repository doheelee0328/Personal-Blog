import Sidebar from '../../../components/sidebar/Sidebar'
import SinglePostCard from '../../../components/singleposts/SinglePostCard'

import { SinglePostWrapper } from './SinglePost.styled'

const SinglePosts = () => {
  return (
    <SinglePostWrapper>
      <SinglePostCard />
      <Sidebar />
    </SinglePostWrapper>
  )
}
//          <SinglePostLife></SinglePostLife>
//       <SinglePostStyle></SinglePostStyle>

export default SinglePosts
