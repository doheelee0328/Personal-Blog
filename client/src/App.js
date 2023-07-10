import Topbar from './components/topbar/Topbar'
import Update from './pages/homepage/write/Update'
// import SinglePosts from './pages/homepage/single/SinglePosts'
import Post from './components/post/Post'
import HomePage from './pages/homepage/Homepage'
import Login from './pages/login/Login'
import Register from './pages/register/register'
import EditProfile from './pages/EditProfile/ EditProfile'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// import LoginPage from './pages/login/LoginPage'
function App() {
  const [activeRegister, setActiveRegister] = useState(true)

  const registerLink = () => {
    setActiveRegister((prev) => !prev)
  }
  return (
    <Routes>
      <Route path='/' element={<Topbar activeRegister={activeRegister} />}>
        <Route index element={<HomePage />} />
        <Route path='write' element={<Update />} />
        <Route path='post' element={<Post />} />
        <Route path='login' element={<Login registerLink={registerLink} />} />
        <Route
          path='register'
          element={<Register registerLink={registerLink} />}
        />
        <Route path='profile' element={<EditProfile />} />
      </Route>
    </Routes>
  )
}

export default App
