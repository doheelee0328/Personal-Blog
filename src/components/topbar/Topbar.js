import img from '../../image/me.jpeg'
import SocialMedia from '../icons /SocialMedia'
import {
  TopItems,
  TopWrapper,
  Image,
  SearchIcon,
  TopList,
  Items,
} from './TopBar.styled'
const Topbar = ({ displayItem }) => {
  return (
    <TopWrapper>
      <TopItems>
        <SocialMedia></SocialMedia>
      </TopItems>
      <TopItems>
        <TopList>
          <Items>Home</Items>
          <Items>About</Items>
          <Items>Contact</Items>
          <Items>Goal</Items>
          <Items>{displayItem}</Items>
        </TopList>
      </TopItems>
      <TopItems>
        <Image>
          <img src={img} alt='me' className='topImage'></img>
        </Image>
        <SearchIcon className='search-icon fa-solid fa-magnifying-glass'></SearchIcon>
      </TopItems>
    </TopWrapper>
  )
}

export default Topbar
