import styled from 'styled-components'

export const WriteWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const WriteForm = styled.form`
  position: relative;
  left: 40px;
  display: flex;
  margin-top: 10px;
`
export const WriteFormGroup = styled.div`
  display: flex;
  align-items: center;

  .writeInput {
    font-size: 20px;
    border: none;
    padding: 10px;
    outline: none;
  }

  i {
    border: 1px solid;
    width: 25px;
    height: 25px;
    border-radius: 20px;
    font-size: 20px;
    color: rgb(155, 151, 151);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Button = styled.button`
  color: white;
  background-color: rgb(107, 105, 105);
  border-radius: 30px;
  border: none;
  width: 100px;
  height: 50px;
  cursor: pointer;
  box-shadow: 1px 2px;

  font-size: 18px;
`
export const ImageWrapper = styled.div`
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 70vw;
    height: 250px;
    margin-left: 150px;
  }
`
