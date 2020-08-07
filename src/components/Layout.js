import React from 'react';
// import "../css/main.css"
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { ParallaxProvider } from 'react-scroll-parallax/cjs';
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={'layout-container'}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
    </div>
  );
};

export default Layout;
