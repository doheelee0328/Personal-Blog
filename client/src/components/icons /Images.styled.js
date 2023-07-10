import styled, { css } from 'styled-components'

export const Image = styled.div`
  img {
    border-radius: 10px;
    ${({ styledProps }) => css`
      height: ${styledProps.height};
    `}
  }
`
