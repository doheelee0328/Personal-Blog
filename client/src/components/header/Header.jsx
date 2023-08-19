import { HeaderWrapper, Title, TitleLg, Image } from './Header.styled'
import { useAuthContext } from '../../hooks/useAuthContext'
const Header = () => {
  const { user } = useAuthContext()

  return (
    <HeaderWrapper>
      <Title>
        <TitleLg>Welcome {user && user.name} To My Blog</TitleLg>
      </Title>
      <Image>
        <img
          src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg'
          alt='background'
        ></img>
      </Image>
    </HeaderWrapper>
  )
}

export default Header
