import "./Header.css";
import BurgerMenu from '../../assets/list.bullet.svg?react'
export default function Header() {
  return (
    <div>
    <div className="nav-web header-frame border-bottom ">
      <div className="header-content">
        <div><p className="title-s accent">Travel</p></div>
          <nav>
            <ul className='nav-end'>
              <li><a className="primary-text paragraph-m" href="#">Personal</a></li>
              <li><a className="primary-text paragraph-m" href="#">Business</a></li>
              <li><a className="primary-text paragraph-m" href="#">About</a></li>
          </ul>
          </nav>
      </div>
    </div>
    <div className='nav-mobile header-frame'>
    <div className="header-content">
        <div><p className="title-s accent">Travel</p></div>
          <div className='nav-mobile-end'>
            <BurgerMenu className='icon-l icon-primary'/>
          </div>
    </div>
    </div>
    </div>
  );
}
