import { useState } from 'react'
import StoryList from './StoryList'
import Write from './Write'
import { Paragraph } from './Write.styled'
const Update = () => {
  const [story, setStory] = useState([])

  const updateList = (enter) => {
    setStory((previous) => {
      const updateStories = [...previous]
      updateStories.unshift({ title: enter, id: Math.random().toString() })
      return updateStories
    })
  }

  const removeStoriesHandler = (id) => {
    const removeStories = story.filter((el) => el.id !== id)
    setStory(removeStories)
  }

  let message = <Paragraph>Please Write Your Story Here</Paragraph>

  if (story.length > 0) {
    message = (
      <StoryList
        story={story}
        removeStoriesHandler={removeStoriesHandler}
      ></StoryList>
    )
  }

  return (
    <>
      <Write updateList={updateList}></Write>
      <div className='message-container'>{message}</div>
    </>
  )
}

export default Update
