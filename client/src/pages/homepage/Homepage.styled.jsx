import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const PostWrapper = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`
