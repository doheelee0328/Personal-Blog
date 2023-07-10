import img from '../../image/me.jpeg'
import SocialMedia from '../icons /SocialMedia'
import { useState } from 'react'
import {
  TopItems,
  TopWrapper,
  Image,
  SearchIcon,
  TopList,
  Items,
} from './TopBar.styled'
import { NavLink, Outlet, Link } from 'react-router-dom'

const Topbar = ({ activeRegister, registerLink }) => {
  const [activeSearch, setActiveSearch] = useState(true)
  const activeStyle = {
    textDecoration: 'underline',
    color: 'black',
  }

  const navLink = ({ isActive }) => (isActive ? activeStyle : undefined)

  const activeSearchHanlder = () => {
    setActiveSearch(false)
  }

  return (
    <>
      <TopWrapper>
        <TopItems>
          <SocialMedia />
        </TopItems>
        <TopItems>
          <TopList>
            <Items>
              <NavLink to='/' style={navLink}>
                Home
              </NavLink>
            </Items>
            <Items>
              <NavLink to='/write' style={navLink}>
                Write Your Story
              </NavLink>
            </Items>
            <Items>
              <NavLink
                to={activeRegister ? 'login' : 'register'}
                style={navLink}
              >
                {activeRegister ? 'Login' : 'Register'}
              </NavLink>
            </Items>
            <Items>
              <li>Logout</li>
            </Items>
          </TopList>
        </TopItems>
        <TopItems>
          <Link to='profile'>
            <Image>
              <img src={img} alt='me' className='topImage'></img>
            </Image>
          </Link>
          <SearchIcon className='search-icon fa-solid fa-magnifying-glass'></SearchIcon>
        </TopItems>
      </TopWrapper>
      <Outlet />
    </>
  )
}

export default Topbar
