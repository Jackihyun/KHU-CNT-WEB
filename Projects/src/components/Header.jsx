import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.png';
import MobileMenu from '../components/MoblieMenu'; // Import the MobileMenu component

function Header() {
  const [activeMenu, setActiveMenu] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1].toUpperCase();
    setActiveMenu(path);
    setMobileMenuOpen(false); // Change menu state on route change
  }, [location]);

  const menuItems = ["ABOUT", "DESIGNER", "ARCHIVE", "WHITEPROJ.", "PHOTO"].map((menu) => (
    <Link
      key={menu}
      to={`/${menu.toLowerCase()}${menu === 'ABOUT' ? "/stage" : ""}`}
      className={`text-black hover:text-[#D9D9D9] transition-colors duration-200 text-center ${activeMenu === menu ? 'bg-[#CD6629] text-white' : ''}`}
      onClick={() => setActiveMenu(menu)}
    >
      {menu}
    </Link>
  ));

  return (
    <header className="fixed top-0 left-0 z-40 bg-white bg-opacity-50 h-[80px] md:h-[50px] sm:h-[50px] m:h-[50px] w-full overflow-x-hidden border-t-0 border-b border-x-0 border-[#444444]">
      <nav className="h-full w-full max-w-full flex justify-around md:justify-between sm:justify-between m:justify-between items-center text-[24px] px-[15px]">
        <Link to={'/'}>
          <img src={MainLogo} alt="logo" className="h-full w-[20vw] cursor-pointer" />
        </Link>
        <div className={`h-full grid grid-flow-col gap-x-[50px] xl:gap-x-[40px] lg:gap-x-[30px] md:gap-x-[20px] items-center font-['ft-activica-strong'] md:hidden sm:hidden m:hidden transition-all duration-500 ease-in-out`}>
          {menuItems}
        </div>
        <div>
          <Link to={'/invite'}>
            <p className='font-[ft-activica-strong] md:hidden sm:hidden m:hidden leading-none text-black border-b-2 border-black text-[24px] cursor-pointer'>INVITATION</p>
          </Link>
        </div>
        <button className='hidden xl:hidden lg:hidden md:block sm:block m:block' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="relative w-[23px] h-[18px] gap-[4.7px] flex flex-col justify-between items-center z-50">
            <div className={`w-full h-[3px] bg-black rounded-md transform transition duration-300 ${isMobileMenuOpen ? "-rotate-45 translate-y-[7px] translate-x-[0.1px]" : ""}`}></div>
            <div className={`w-full h-[3px] bg-black rounded-md transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-full h-[3px] bg-black rounded-md transform transition duration-300 ${isMobileMenuOpen ? "rotate-45 -translate-y-[7.9px] -translate-x-[0.2px] " : ""}`}></div>
          </div>
        </button>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </header>
  );
}

export default Header;
