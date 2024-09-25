import styles from './header.module.css'
import BurgerMenu from '../../assets/list.bullet.svg?react'
const Header: React.FC = () => {
  return (
    <div>
    <div className={`${styles.headerFrame} ${styles.navWeb} border-bottom`}>
      <div className={styles.headerContent}>
        <div><p className="title-s accent">Travel</p></div>
          <nav>
            <ul className={styles.navEnd}>
              <li><a className="primary-text paragraph-m" href="#">Personal</a></li>
              <li><a className="primary-text paragraph-m" href="#">Business</a></li>
              <li><a className="primary-text paragraph-m" href="#">About</a></li>
          </ul>
          </nav>
      </div>
    </div>
    <div className={`${styles.navMobile} ${styles.headerFrame}`}>
    <div className={styles.headerContent}>
        <div><p className="title-s accent">Travel</p></div>
          <div className='nav-mobile-end'>
            <BurgerMenu className='icon-l icon-primary'/>
          </div>
    </div>
    </div>
    </div>
  );
}
export default Header;
