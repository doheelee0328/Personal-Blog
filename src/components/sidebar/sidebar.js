import styles from './sidebar.module.css'
import image from '../../image/aboutMe.jpeg'
import SocialMedia from '../icons /SocialMedia'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>About me</span>
        <img className={styles.me} src={image} alt='about-me' />
        <p className={styles.sidebarParagraph}>
          Hello, my name is Dohee Lee and i am an aviation management graduate.
          I am still a beginner in coding, therefore, i am always open to learn
          more about it as i would like to pursue a career in tech!
        </p>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>Categories</span>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>Life</li>
          <li className={styles.sidebarListItem}>Music</li>
          <li className={styles.sidebarListItem}>Style</li>
          <li className={styles.sidebarListItem}>Hobbies</li>
          <li className={styles.sidebarListItem}>Goals</li>
          <li className={styles.sidebarListItem}>Food</li>
        </ul>
      </div>

      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>Follow me</span>
        <div className={styles.sidebarSocial}>
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
