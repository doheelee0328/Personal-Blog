import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  margin-top: 60px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lora', serif;
  color: #444;
  margin-top: 10px;
`

// export const TitleSm = styled.span`
//   position: absolute;
//   top: 14%;
//   font-size: 28px;
//   z-index: 10;
// `

export const TitleLg = styled.span`
  position: absolute;
  top: 18%;
  font-size: 80px;
  z-index: 100;

  @media (max-width: 700px) {
    font-size: 50px;
  }
`

export const Image = styled.div`
  img {
    width: 100%;
    height: 450px;
    margin-top: 30apx;
    object-fit: cover;
    opacity: 0.6;
  }
`
