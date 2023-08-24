import { useState } from 'react'
import StoryList from './StoryList'
import Write from './Write'

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

  return (
    <>
      <Write updateList={updateList}></Write>
      <StoryList
        story={story}
        removeStoriesHandler={removeStoriesHandler}
      ></StoryList>
    </>
  )
}

export default Update
