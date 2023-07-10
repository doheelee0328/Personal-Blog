import img from '../../image/me.jpeg'
import SocialMedia from '../icons /SocialMedia'
import { TopItems, TopWrapper, Image, TopList, Items } from './TopBar.styled'
import { NavLink, Outlet, Link } from 'react-router-dom'
import Form from '../Form/Form'

const Topbar = ({ activeRegister }) => {
  const activeStyle = {
    textDecoration: 'underline',
    color: 'black',
  }

  const navLink = ({ isActive }) => (isActive ? activeStyle : undefined)

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
              <img src={img} alt='me' className='topImage' />
            </Image>
          </Link>
          <Form />
        </TopItems>
      </TopWrapper>
      <Outlet />
    </>
  )
}

export default Topbar
