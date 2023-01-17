import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <span className={styles.TitleSm}>React & Node</span>
        <span className={styles.TitleLg}>Dohee's Blog</span>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
        className={styles.image}
        alt="background"
      ></img>
    </div>
  );
};

export default Header;
/* <div className={styles.title}} <div> 
        <span className={styles.TitleSm}>
          React & Node
        </span>
        <span className={styles.TitleLg}>
          Dohee's Blog
        </span>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
        className={`${styles.header} ${styles.image}`}
        alt="background"
      ></img>*/
