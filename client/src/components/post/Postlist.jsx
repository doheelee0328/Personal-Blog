import Post from './Post'

const PostList = ({ info }) => {
  return (
    <>
      {info.map((el) => (
        <Post
          key={el.id}
          image={el.image}
          categories={el.categories}
          title={el.title}
          postDate={el.postDate}
        ></Post>
      ))}
    </>
  )
}

export default PostList
