import styles from './Homepage.module.css'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/sidebar'
import PostInfo from '../../post/postInfo'

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <div className={styles.home}>
        <div className={styles.post}>
          <PostInfo></PostInfo>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  )
}

export default HomePage
