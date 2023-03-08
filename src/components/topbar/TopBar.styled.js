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
`

export const TopItems = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TopList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
`

export const Items = styled.li`
  font-size: 18px;
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
`

export const Image = styled.div`
  .topImage {
    width: 35px;
    height: 40px;
    border-radius: 50%;
    margin-top: 8px;
  }
`

export const SearchIcon = styled.i`
  font-size: 18px;
  color: #666;
  cursor: pointer;
  margin-left: 15px;
`
