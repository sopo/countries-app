import { Link, NavLink, NavLinkRenderProps, useParams } from 'react-router-dom';
import styles from '#/header/header.module.css';
import BurgerMenu from '@/assets/list.bullet.svg?react';
import Button from '../button/button';
const Header: React.FC = () => {
  const handleActiveLink = ({ isActive }: NavLinkRenderProps) => {
    return isActive ? styles.active : styles.initial;
  };
  const { lang } = useParams();
  const title = lang === 'en' ? 'ქარ' : 'en';
  const to = lang === 'en' ? '/ka' : '/en';
  const kaContent = {
    personal: 'პირადი სივრცე',
    about: 'ჩვენს შესახებ',
    contact: 'კონტაქტი',
  };
  const engContent = {
    personal: 'Personal',
    about: 'About us',
    contact: 'Contact',
  };
  const content = lang === 'en' ? engContent : kaContent;

  return (
    <div>
      <div className={`${styles.headerFrame} ${styles.navWeb}`}>
        <div className={styles.headerContent}>
          <Link to={`/${lang}`}>
            <h2>Travel</h2>
          </Link>
          <nav>
            <ul className={styles.navEnd}>
              <NavLink to="personal" className={handleActiveLink}>
                {content.personal}
              </NavLink>
              <NavLink to="about" className={handleActiveLink}>
                {content.about}
              </NavLink>
              <NavLink to="contact" className={handleActiveLink}>
                {content.contact}
              </NavLink>
              <NavLink to={to}>
                <Button className="buttonSecondaryS" title={title} />
              </NavLink>
              <NavLink to="sign-in">
                <Button className="buttonSecondaryS" title="sign in" />
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${styles.navMobile} ${styles.headerFrame}`}>
        <div className={styles.headerContent}>
          <div>
            <Link to="/">
              <h2>Travel</h2>
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
