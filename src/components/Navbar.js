import { Link } from "react-router-dom";
import styles from "./../styles/components/navbar.module.scss"

const Navbar = () => {
  return (
    <header className="position-absolute w-100">
      <div className={`${styles["main-nav"]} d-flex gap-4 align-items-center py-2 px-3`}>
        <Link to="/">
          <img src="/images/netflix-logo.png" alt="Netflix" width="140" />
        </Link>
        <nav className="flex-grow-1">
          <ul className="d-flex gap-3">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/">TV Shows</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Movies</Link>
            </li>
            <li className="nav-item">
              <Link to="/">New & Popular</Link>
            </li>
            <li className="nav-item">
              <Link to="/">My List</Link>
            </li>
          </ul>
        </nav>
        <nav className="user-nav">
          <ul className="d-flex gap-4">
            <li className="nav-item">
              <Link to="/">
                <i className="bi bi-search"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <i className="bi bi-gift"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <i className="bi bi-bell-fill"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-person-circle"></i>
                  <small style={{fontSize:"10px"}}>
                    <i className="bi bi-caret-down-fill"></i>
                  </small>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
							<div className="d-flex align-items-center gap-1">
							<i className="bi bi-funnel-fill"></i>
                  <small style={{fontSize:"10px"}}>
                    <i className="bi bi-caret-down-fill"></i>
                  </small>
                </div>
							</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
