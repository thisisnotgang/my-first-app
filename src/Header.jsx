import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">이경욱</Link>
        </div>
        
        <nav className="main-nav">
          <ul>
            <li><Link to="/">프로필</Link></li>
            <li><Link to="/projects">프로젝트</Link></li>
            <li><Link to="/contact">연락처</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;