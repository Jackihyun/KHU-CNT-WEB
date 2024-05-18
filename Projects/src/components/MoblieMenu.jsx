import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.png';

function MobileMenu({ isOpen, onClose, activeMenu, setActiveMenu }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = ["ABOUT", "DESIGNER", "ARCHIVE", "WHITEPROJ.", "PHOTO"].map((menu) => (
    <Link
      key={menu}
      to={`/${menu.toLowerCase()}${menu === 'ABOUT' ? "/stage" : ""}`}
      className={`text-black hover:text-[#D9D9D9] transition-colors duration-200 text-center ${activeMenu === menu ? 'bg-[#CD6629] text-white' : ''}`}
      onClick={() => {
        setActiveMenu(menu);
        onClose(); // Close menu on item click
      }}
    >
      {menu}
    </Link>
  ));

  return (
    <div className={`fixed top-0 left-0 z-50 bg-white bg-opacity-100 w-full h-full flex flex-col items-center justify-center transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <Link to={'/'}>
        <img src={MainLogo} alt="logo" className="h-[40px] w-[195px] cursor-pointer mb-8" />
      </Link>
      {menuItems.map((item, index) => (
        <div key={index} className="my-4 font-['ft-activica-strong'] text-[14px]">
          {item}
        </div>
      ))}
      <button onClick={onClose} className="mt-8 font-[ft-activica-strong] text-black border-b-[1.5px] border-black text-[14px] leading-none cursor-pointer">CLOSE</button>
    </div>
  );
}

export default MobileMenu;
