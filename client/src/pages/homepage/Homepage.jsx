import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import PostInfo from '../../components/post/PostInfo'
import { HomeWrapper, PostWrapper, SidebarWrapper } from './Homepage.styled'
const HomePage = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <PostWrapper>
          <PostInfo></PostInfo>
        </PostWrapper>

        <Sidebar />
      </HomeWrapper>
    </>
  )
}

export default HomePage
