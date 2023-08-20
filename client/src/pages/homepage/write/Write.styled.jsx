import styled from 'styled-components'

export const WriteWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 60%;
    margin: 0 auto;
  }
`
export const WriteForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  max-width: 100%;
  margin-left: 10%;

  /* @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
  } */
`
export const WriteFormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .writeInput {
    border: none;
    padding: 10px;
    outline: none;
    font-size: 10px;

    ::placeholder {
      font-size: 30px;
    }
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

  @media (max-width: 1000px) {
    margin: 0 auto;
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

  @media (max-width: 700px) {
    margin-top: 20px;

    margin-left: 150px;
  }

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
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
