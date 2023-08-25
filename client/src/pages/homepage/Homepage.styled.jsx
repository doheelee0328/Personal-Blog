import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin: 0 auto;
`

export const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`
