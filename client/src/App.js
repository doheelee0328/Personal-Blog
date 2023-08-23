import Topbar from './components/topbar/Topbar'
import Update from './pages/homepage/write/Update'
import img from '../src/image/blankProfile.webp'
import Post from './components/post/Post.jsx'
import HomePage from './pages/homepage/Homepage'
import Login from './pages/login/Login'
import Register from './pages/register/register'
import EditDeleteProfile from './pages/EditProfile/ EditProfile.jsx'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { info } from '../src/components/post/PostInfo'
import SinglePostCard from './components/singleposts/SinglePostCard'

// import LoginPage from './pages/login/LoginPage'
function App() {
  const [activeRegister, setActiveRegister] = useState(true)
  const [image, setImage] = useState(img)

  const registerLink = () => {
    setActiveRegister((prev) => !prev)
  }
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    const storedImage = localStorage.getItem('profile-image')
    if (storedImage) {
      setImage(storedImage)
    }
  }, [setImage])

  const displayPosts = () => {
    return info
      .filter(
        (p) =>
          filterText.length === 0 ||
          p.categories.toLowerCase().includes(filterText.toLowerCase())
      )
      .map((p) => (
        <Post
          key={p.id}
          id={p.id}
          image={p.image}
          categories={p.categories}
          title={p.title}
          postDate={p.postDate}
        />
      ))
  }

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Topbar
            activeRegister={activeRegister}
            setFilterText={setFilterText}
            filterText={filterText}
            image={image}
            setImage={setImage}
          />
        }
      >
        <Route index element={<HomePage displayPosts={displayPosts} />} />
        <Route path='write' element={<Update />} />
        <Route path='post' element={<Post />} />
        <Route path='login' element={<Login registerLink={registerLink} />} />
        <Route
          path='register'
          element={<Register registerLink={registerLink} />}
        />
        <Route
          path='profile'
          element={<EditDeleteProfile image={image} setImage={setImage} />}
        />
        <Route
          path='single-post/:id'
          element={<SinglePostCard image={image} />}
        />
      </Route>
    </Routes>
  )
}

export default App
