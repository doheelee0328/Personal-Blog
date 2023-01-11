import styles from "./Homepage.module.css";
import Header from "../../header/Header";
import Sidebar from "../../sidebar/sidebar";
import Posts from "../../posts/post";
const HomePage = () => {
  return (
    <>
      <Header></Header>
      <div className={styles.home}>
        <Posts></Posts>
        <Sidebar></Sidebar>
      </div>
    </>
  );
};

export default HomePage;
