import React from 'react';
// import logo from "../assets/logo.svg" i find the logo ugly
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../constants/links';
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/*<img src={logo} alt="logo" />*/}
          <button
            type={'button'}
            className={'toggle-btn'}
            onClick={toggleSidebar}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass={'nav-links'} />
      </div>
    </nav>
  );
};

export default Navbar;