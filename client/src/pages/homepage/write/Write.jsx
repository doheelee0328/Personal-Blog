import NewLife from '../../../image/NewLife.jpeg'
import {
  ImageWrapper,
  WriteForm,
  WriteWrapper,
  WriteFormGroup,
  Button,
} from './Write.styled'
import { useState } from 'react'

const Write = ({ updateList }) => {
  const [title, setTitle] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()

    updateList(title)
    setTitle('')
  }

  const TitleHandler = (event) => {
    setTitle(event.target.value)
  }
  return (
    <WriteWrapper>
      <ImageWrapper>
        <img src={NewLife} alt='new life'></img>
      </ImageWrapper>
      <WriteForm onSubmit={submitHandler}>
        <WriteFormGroup>
          <label htmlFor='fileInput' class='writeInput'>
            <i class='fa-solid fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            className='writeInput'
          ></input>
          <input
            type='text'
            placeholder='Tell me your stories....'
            value={title}
            onChange={TitleHandler}
            autoFocus={true}
            className='writeInput'
            style={{ fontSize: '30px', width: '100vh' }}
          />
        </WriteFormGroup>
        <Button>Publish</Button>
      </WriteForm>
    </WriteWrapper>
  )
}

export default Write
