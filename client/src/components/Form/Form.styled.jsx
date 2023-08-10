import styled from 'styled-components'
export const SearchIcon = styled.i`
  font-size: 18px;
  color: #666;
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 8px;

  @media (max-width: 1100px) {
    font-size: 10px;
  }
`
export const FormContainer = styled.form`
  position: relative;
  input {
    margin-left: 30px;
    height: 30px;
    width: 250px;
    border: 0.2px solid rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.5);
    padding-left: 10px;

    @media (max-width: 1100px) {
      height: 20px;
      width: 100px;
    }
  }

  input:focus {
    outline: none;
  }
`
