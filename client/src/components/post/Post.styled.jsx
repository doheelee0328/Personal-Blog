import styled from 'styled-components'

export const PostWrapper = styled.div`
  flex: 9;
  margin: 20px;
  display: inline-block;
  padding-left: 30px;
`

export const ImageWrapper = styled.div`
  .image {
    width: 400px;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;
    display: block;
    margin: auto;

    :hover {
      transform: scale(1.1);
    }

    @media (max-width: 1341px) {
      width: 380px;
      height: 250px;
    }
  }
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PostCategories = styled.div`
  font-weight: 600;
  color: #bdbcb5;
  line-height: 20px;
  margin-top: 20px;
  font-family: 'Valera Round', sans-serif;
`
export const PostTitle = styled.div`
  font-family: 'Josefin sans', sans-serif;
  font-size: 20px;
  margin-top: 20px;
`

export const PostDate = styled.div`
  font-size: 12px;
  font-family: 'Lora', sans-serif;
  margin-top: 20px;
  color: #bdbcb5;
`
