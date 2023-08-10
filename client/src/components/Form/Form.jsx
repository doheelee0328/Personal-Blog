import { FormContainer, SearchIcon } from './Form.styled'

const Form = ({ setFilterText }) => {
  return (
    <FormContainer>
      <input type='text' onChange={(e) => setFilterText(e.target.value)} />
      <SearchIcon className='search-icon fa-solid fa-magnifying-glass'></SearchIcon>
    </FormContainer>
  )
}

export default Form
