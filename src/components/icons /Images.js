import { Image } from './Images.styled'

const Images = ({ image, styledProps }) => {
  return (
    <Image styledProps={styledProps}>
      <img src={image} alt='singlePostImages'></img>
    </Image>
  )
}

export default Images
