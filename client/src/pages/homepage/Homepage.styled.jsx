import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 85%;
`

export const PostWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`
