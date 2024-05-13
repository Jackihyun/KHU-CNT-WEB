import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.png';

function Header() {
  const [activeMenu, setActiveMenu] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1].toUpperCase();
    setActiveMenu(path);
  }, [location]);

  return (
    <header className="bg-white h-[80px] w-full overflow-x-hidden border-t-0 border-b border-x-0 border-[#444444]">
      <nav className="h-full w-full max-w-full flex justify-around items-center text-[24px]">
        <Link to={'/'}>
          <img src={MainLogo} alt="logo" className="h-[40px] w-[195px]" />
        </Link>
        <div className={`h-full grid grid-flow-col gap-x-[50px] xl:gap-x-[40px] lg:gap-x-[30px] md:gap-x-[20px] items-center font-['ft-activica-strong'] m:hidden sm:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? '' : ''}`}>
          {["ABOUT", "DESIGNER", "ARCHIVE", "WHITEPROJ.", "PHOTO"].map((menu) => (
            <Link
              key={menu}
              to={`/${menu.toLowerCase()}${menu === 'ABOUT' ? "/stage" : ""}`}
              className={`text-black hover:text-[#D9D9D9] transition-colors duration-200 ${activeMenu === menu ? 'bg-[#CD6629] text-white' : ''
                }`}
              onClick={() => setActiveMenu(menu)}
            >
              {menu}
            </Link>
          ))}
        </div>
        <div>
          <p className='font-[ft-activica-strong] text-black border-b border-black text-[24px]'>contact</p>
        </div>
        <button className='hidden m:block sm:block  md:hidden lg:hidden xl:hidden 2xl:hidden' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="relative w-[23px] h-[18px] gap-[4.7px] flex flex-col justify-between items-center">
            <div className={`w-full h-[3px] bg-black rounded-md transform transition duration-300 ${isMobileMenuOpen ? "-rotate-45 translate-y-[7px] translate-x-[0.1px]" : ""}`}></div>
            <div className={`w-full h-[3px] bg-black rounded-md transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-full h-[3px] bg-black rounded-md transform transition duration-300 ${isMobileMenuOpen ? "rotate-45 -translate-y-[7.9px] -translate-x-[0.2px] " : ""}`}></div>
          </div>
        </button>
      </nav>
    </header >
  );
}

export default Header;