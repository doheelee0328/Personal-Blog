import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
// import Post from '../../components/post/Post'
import { HomeWrapper, PostWrapper } from './Homepage.styled'

const HomePage = ({ displayPosts }) => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <PostWrapper>
          <div>{displayPosts()}</div>
        </PostWrapper>
        <Sidebar />
      </HomeWrapper>
    </>
  )
}

export default HomePage
