import image from '../../image/aboutMe.jpeg'
import SocialMedia from '../icons /SocialMedia'
import {
  ImageWrapper,
  SidebarItem,
  SideBarList,
  SideBarParagraph,
  SideBarTitle,
  SideBarWrapper,
  SideBarListItem,
  SocialMediaWrapper,
} from './SideBar.styled'
const Sidebar = () => {
  return (
    <SideBarWrapper>
      <SidebarItem>
        <SideBarTitle>About me </SideBarTitle>
        <ImageWrapper>
          <img className='me' src={image} alt='about-me' />
        </ImageWrapper>
        <SideBarParagraph>
          Hello, my name is Dohee Lee and i am an aviation management graduate.
          I am still a beginner in coding, therefore, i am always open to learn
          more about it as i would like to pursue a career in tech!
        </SideBarParagraph>
      </SidebarItem>
      <SidebarItem>
        <SideBarTitle>Categories</SideBarTitle>
        <SideBarList>
          <SideBarListItem>Life</SideBarListItem>
          <SideBarListItem>Music</SideBarListItem>
          <SideBarListItem>Style</SideBarListItem>
          <SideBarListItem>Hobbies</SideBarListItem>
          <SideBarListItem>Tech</SideBarListItem>
          <SideBarListItem>Food</SideBarListItem>
        </SideBarList>
      </SidebarItem>

      <SidebarItem>
        <SideBarTitle>Follow me</SideBarTitle>
        <SocialMediaWrapper>
          <SocialMedia></SocialMedia>
        </SocialMediaWrapper>
      </SidebarItem>
    </SideBarWrapper>
  )
}

export default Sidebar
