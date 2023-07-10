import React from 'react'
import { FormContainer, SearchIcon } from './Form.styled'

const Form = () => {
  return (
    <FormContainer>
      <input type='text' />
      <SearchIcon className='search-icon fa-solid fa-magnifying-glass'></SearchIcon>
    </FormContainer>
  )
}

export default Form
