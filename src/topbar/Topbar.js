import "./Topbar.css";
import img from "../image/me.jpeg";
const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="top-icon fa-brands fa-square-facebook"></i>
        <i className="top-icon fa-brands fa-instagram"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="item">Home</li>
          <li className="item">About</li>
          <li className="item">Contact</li>
          <li className="item">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img src={img} alt="me" className="topImage"></img>
        <i className="search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
