import { HeaderWrapper, Title, TitleLg, Image } from './Header.styled'
const Header = () => {
  return (
    <HeaderWrapper>
      <Title>
        <TitleLg>Dohee's Blog</TitleLg>
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
