import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import PostInfo from '../../components/post/PostInfo'
import { HomeWrapper, PostWrapper } from './Homepage.styled'
const HomePage = () => {
  return (
    <>
      <Header></Header>
      <HomeWrapper>
        <PostWrapper>
          <PostInfo></PostInfo>
        </PostWrapper>
        <Sidebar></Sidebar>
      </HomeWrapper>
    </>
  )
}

export default HomePage
