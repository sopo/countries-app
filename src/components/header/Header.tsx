import "./Header.css";
export default function Header() {
  return (
    <div className="header-frame border-bottom frame-full display-flex">
      <div className="header-content container-xl display-flex align-center space-between">
        <div className="header-logo">
          <p className='semi-bold paragraph-l accent'>Travel</p>
        </div>
        <nav>
          <ul className="header-nav">
            <li ><a className="primary-text paragraph-m" href='#'>Personal</a></li>
            <li><a className="primary-text paragraph-m" href='#'>Business</a></li>
            <li><a className="primary-text paragraph-m" href='#'>About</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
