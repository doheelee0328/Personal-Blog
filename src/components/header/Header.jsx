import { HeaderWrapper, Title, TitleSm, TitleLg, Image } from './Header.styled'
const Header = () => {
  return (
    <HeaderWrapper>
      <Title>
        <TitleSm>React</TitleSm>
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
