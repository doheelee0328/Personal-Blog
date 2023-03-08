import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  align-items: center;
  justify-content: end;
  float: right;
  margin-top: -45px;
  gap: 13px;
  cursor: pointer;
`
export const EditWrapper = styled.div`
  color: #327aed;
  position: relative;
  top: -4px;
`
export const TrashWrapper = styled.div`
  color: #ba1b13;
  position: relative;
  top: -4px;
`

/*
 ${({ styleProps }) => css`
    position: relative;
    top: ${styleProps.position};
  `}
*/
