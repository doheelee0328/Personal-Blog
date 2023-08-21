import styled from 'styled-components'

export const TopWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  z-index: 999;
  background-color: white;
  letter-spacing: 1px;
  position: relative;
`

export const TopItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const TopList = styled.ul`
  display: flex;
  /* justify-content: space-around; */
  list-style-type: none;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  margin-left: 40px;
`

export const Items = styled.span`
  font-weight: 300;
  cursor: pointer;
  position: relative;
  margin: 1px;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.6px;
    background-color: black;
    width: 100%;
    height: 1px;
    margin: 2px;
    left: 0;
    margin-left: 0%;
    transform: scale(0.1);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  :hover::after {
    transform: scale(1, 1);
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;

    @media (max-width: 1100px) {
      font-size: 15px;
    }
    @media (max-width: 700px) {
      font-size: 10px;
    }
  }

  span {
    font-size: 18px;
    @media (max-width: 1100px) {
      font-size: 15px;
    }
    @media (max-width: 700px) {
      font-size: 10px;
    }
  }
`

export const Image = styled.div`
  .topImage {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 8px;

    @media (max-width: 1100px) {
      width: 30px;
      height: 30px;
    }

    @media (max-width: 700px) {
      width: 20px;
      height: 20px;
      margin-left: 20px;
    }
  }
`
