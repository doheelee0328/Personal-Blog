import styled from 'styled-components'
export const SearchIcon = styled.i`
  font-size: 18px;
  color: #666;
  cursor: pointer;
  transform: translate(-30px, 1px);
`
export const FormContainer = styled.form`
  input {
    margin-left: 30px;
    height: 30px;
    width: 250px;
    border: 0.2px solid rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.5);
    padding-left: 10px;
  }

  input:focus {
    outline: none;
  }
`
