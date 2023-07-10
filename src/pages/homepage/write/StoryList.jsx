import Story from './Story'
const StoryList = ({ story, removeStoriesHandler }) => {
  return (
    <>
      {story.map((el) => (
        <Story
          key={story.indexOf(el)}
          id={el.id}
          title={el.title}
          removeStoriesHandler={removeStoriesHandler}
        ></Story>
      ))}
    </>
  )
}

export default StoryList
