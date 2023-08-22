import styled from 'styled-components'

export const WriteWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const WriteForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
`
export const WriteFormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;

  .writeInput {
    border: none;
    padding: 10px;
    outline: none;
    font-size: 10px;

    ::placeholder {
      font-size: 30px;

      @media (max-width: 500px) {
        font-size: 18px;
        transform: translate(0px, -5px);
      }
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
    width: 70px;
    height: 40px;
    font-size: 10px;
  }
`
export const ImageWrapper = styled.div`
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 70vw;
    height: 250px;
    margin: 0 auto;
  }
`
