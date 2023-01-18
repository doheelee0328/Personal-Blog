import styles from './post.module.css'

const Post = ({ image, categories, title, postDate }) => {
  return (
    <div className={styles.post}>
      <img className={styles.image} src={image} alt='post' />
      <div className={styles.postInfo}>
        <div className={styles.postCategories}>
          <div className={styles.postCategories}>{categories}</div>
        </div>
        <div className={styles.postTitle}>{title}</div>
        <div className={styles.postdate}>{postDate}</div>
      </div>
    </div>
  )
}

export default Post
