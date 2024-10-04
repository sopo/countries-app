import { Link, NavLink, NavLinkRenderProps } from "react-router-dom";
import styles from "#/header/header.module.css";
import BurgerMenu from "@/assets/list.bullet.svg?react";
const Header: React.FC = () => {
  const handleActiveLink = ({ isActive }: NavLinkRenderProps) => {
    return isActive ? styles.active : styles.initial;
  };
  return (
    <div>
      <div className={`${styles.headerFrame} ${styles.navWeb} border-bottom`}>
        <div className={styles.headerContent}>
          <Link to="/">
            <p className="title-s accent">Travel</p>
          </Link>

          <nav>
            <ul className={styles.navEnd}>
              <NavLink to="personal" className={handleActiveLink}>
                Personal
              </NavLink>
              <NavLink to="business" className={handleActiveLink}>
                Business
              </NavLink>
              <NavLink to="about" className={handleActiveLink}>
                About
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${styles.navMobile} ${styles.headerFrame}`}>
        <div className={styles.headerContent}>
          <div>
            <Link to="/">
              <p className="title-s accent">Travel</p>
            </Link>
          </div>
          <div className="nav-mobile-end">
            <BurgerMenu className="icon-l icon-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
