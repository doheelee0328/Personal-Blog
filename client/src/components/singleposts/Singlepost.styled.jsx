import styled from 'styled-components'

export const SinglePostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const SinglePost = styled.div`
  display: flex;
  flex-direction: column;
  flex: 9;
  margin: 40px;

  .image {
    width: 60%;
    object-fit: cover;
  }
`

export const SinglePostTitle = styled.h1`
  text-align: center;
  padding: 20px;
  font-size: 28px;
  font-family: 'Lora', sans-serif;
`
export const SinglePostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-family: 'Valera Round', sans-serif;
  font-size: 15px;
`
export const Name = styled.span`
  padding-left: 5px;
`
export const SinglePostDescription = styled.p`
  margin-left: 20px;
  font-size: §0px;
  line-height: 25px;
`
export const Introduction = styled.span`
  font-size: 20px;
  font-weight: 900;
`

export const Span = styled.span``

export const imageStyledMusicProps = {
  height: '470px',
}

export const imageStyledLifeProps = {
  height: '500px',
}

export const imageStyledFashionProps = {
  height: '480px',
}
