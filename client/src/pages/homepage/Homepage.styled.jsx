import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  margin: auto;
`

export const PostWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`
