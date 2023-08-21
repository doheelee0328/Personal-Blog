import img from '../../image/blankProfile.webp'
import SocialMedia from '../icons /SocialMedia'
import { TopItems, TopWrapper, Image, TopList, Items } from './TopBar.styled'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useNavigate } from 'react-router-dom'
import { useToastMessage } from '../../context/Toast'
import { useAuthContext } from '../../hooks/useAuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Form from '../form/Form'

const Topbar = ({ activeRegister, setFilterText, filterText }) => {
  const { logout } = useLogout()
  const { successMessage } = useToastMessage()

  const { user } = useAuthContext()

  const navigate = useNavigate()

  const activeStyle = {
    textDecoration: 'underline',
    color: 'black',
  }

  const toastContainerStyle = {
    width: 'auto',
  }

  const navLink = ({ isActive }) => (isActive ? activeStyle : undefined)

  const handleClickLogout = () => {
    logout()
    successMessage('You have logged out successfully')
    navigate('/login')
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
                Story
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
              {user && <span onClick={handleClickLogout}>Logout</span>}
            </Items>
          </TopList>
        </TopItems>
        <TopItems>
          {user && (
            <Link to='profile'>
              <Image>
                <img src={img} alt='me' className='topImage' />
              </Image>
            </Link>
          )}
          <Form setFilterText={setFilterText} filterText={filterText} />
        </TopItems>
        <ToastContainer style={toastContainerStyle} />
      </TopWrapper>
      <Outlet />
    </>
  )
}

export default Topbar
