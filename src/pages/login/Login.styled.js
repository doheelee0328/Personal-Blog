import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.login});
  opacity: 0.8;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(250px, 50px);
  width: 60%;
  height: 70%;
`
