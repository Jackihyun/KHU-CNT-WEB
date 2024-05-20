import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.png';
import { createPortal } from "react-dom";
import MobileMenu from '../components/MoblieMenu'; // Import the MobileMenu component
import clsx from 'clsx';
import { useStore } from 'zustand';
import { uiStore } from '../stores/uiStore';
import { useSize } from '../hooks/uiHook';
import React from 'react';

const MenuItem = ({ menu, isActive, className }) => {
  const [mouseHovered, setMouseHovered] = useState(false);

  return <div className='relative bg-transparent transition-transform active:scale-90'
    onMouseEnter={() => setMouseHovered(true)}
    onMouseLeave={() => setMouseHovered(false)}
  >
    <div className={clsx('absolute h-full -z-10 bg-[#CD6629] transition-all w-0', {
      '!w-[100%]': mouseHovered || isActive,
    }, className)} />
    <span className={clsx({
      'text-white': mouseHovered || isActive,
    })}>{menu}</span>
  </div>
}

function Header() {
  const [activeMenu, setActiveMenu] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = React.useRef(null);

  useEffect(() => {
    const path = location.pathname.split('/')[1].toUpperCase();
    setActiveMenu(path);
    setMobileMenuOpen(false); // Change menu state on route change
  }, [location]);

  const uiContext = useStore(uiStore);
  const headerSize = useSize(headerRef);

  useEffect(() => {
    uiContext.setHeaderHeight(headerSize.height);
    console.log('[HeaderSize]', headerSize.height)
  }, [headerSize])

  const menuItems = ["ABOUT", "DESIGNER", "ARCHIVE", "WHITEPROJ.", "PHOTO"].map((menu) => (
    <Link
      key={menu}
      to={`/${menu.toLowerCase()}`}
      onClick={() => setActiveMenu(menu)}
    >
      <MenuItem menu={menu} className={clsx('text-black text-center')} isActive={
        activeMenu === menu
      } />
    </Link>
  ));

  return (
    <header ref={headerRef} className="fixed top-0 left-0 z-40 bg-white bg-opacity-50 h-[80px] xl:h-[70px] lg:h-[60px] md:h-[50px] md:overflow-x-hidden sm:h-[50px] sm:overflow-x-hidden m:h-[50px] m:overflow-x-hidden w-full backdrop-blur">
      <nav className="h-full w-full max-w-full relative flex justify-around md:justify-between sm:justify-between m:justify-between items-center text-[22px] md:px-[15px] sm:px-[15px] m:px-[15px]">
        <Link to={'/'}>
          <img src={MainLogo} alt="logo" className="h-full m:w-[30vw] sm:w-[30vw] md:w-[22vw] lg:w-[18vw] xl:w-[18vw] w-[15vw] cursor-pointer" />
        </Link>
        <div className={`h-full grid grid-flow-col gap-x-[50px] xl:gap-x-[40px] lg:gap-x-[30px] md:gap-x-[20px] items-center font-['ft-activica-strong'] md:hidden sm:hidden m:hidden transition-all duration-500 ease-in-out`}>
          {menuItems}
        </div>
        <div>
          <Link to={'/invite'}>
            <p className='font-[ft-activica-strong] md:hidden sm:hidden m:hidden leading-none text-black border-b-2 border-black text-[22px] cursor-pointer'>INVITATION</p>
          </Link>
        </div>
        <button className='hidden xl:hidden lg:hidden md:block sm:block m:block absolute right-3' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="relative w-[23px] h-[18px] gap-[4.7px] flex flex-col justify-between items-center z-50">
            <div className={`w-full h-[3px] bg-black rounded-md transform transition duration-300 ${isMobileMenuOpen ? "-rotate-45 translate-y-[7px] translate-x-[0.1px]" : ""}`}></div>
            <div className={`w-full h-[3px] bg-black rounded-md transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-full h-[3px] bg-black rounded-md transform transition duration-300 ${isMobileMenuOpen ? "rotate-45 -translate-y-[7.9px] -translate-x-[0.2px] " : ""}`}></div>
          </div>
        </button>
      </nav>
      {
        createPortal(<>
          <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </>,
          document.querySelector("#root")
        )
      }
    </header>
  );
}

export default Header;
