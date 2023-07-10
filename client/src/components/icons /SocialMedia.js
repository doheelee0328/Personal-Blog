import { SocialMediaItems } from './SocialMedia.styled'
import { Link } from 'react-router-dom'

export const SocialMedia = () => {
  return (
    <>
      <Link to='https://www.facebook.com'>
        <SocialMediaItems className='top-icon fa-brands fa-square-facebook' />
      </Link>
      <Link to='https://www.instagram.com/doyaalee/'>
        <SocialMediaItems className='top-icon fa-brands fa-instagram' />
      </Link>
      <Link to='https://twitter.com/home'>
        <SocialMediaItems className='top-icon fa-brands fa-twitter' />
      </Link>
    </>
  )
}

export default SocialMedia
