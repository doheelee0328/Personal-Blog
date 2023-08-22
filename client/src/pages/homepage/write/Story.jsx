import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: 20px;
  border: none;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  cursor: pointer;
  margin-top: 20px;
`

const Story = (props) => {
  const { title, removeStoriesHandler, id } = props
  const removeItems = () => {
    removeStoriesHandler(id)
  }
  return (
    <>
      <div onClick={removeItems}>
        <Paragraph>{title}</Paragraph>
      </div>
    </>
  )
}

export default Story
