import React, { useRef } from 'react'
import '../../scss/editProfile.scss'

const Profile = ({ setImage, image }) => {
  const imageRef = useRef(null)

  const handleImageClick = () => {
    imageRef.current.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
      localStorage.setItem('profile-image', imageUrl)
    }
  }

  return (
    <div onClick={handleImageClick}>
      {image && (
        <img src={image} alt='' className='edit-profile' ref={imageRef} />
      )}
      <input
        type='file'
        ref={imageRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default Profile
