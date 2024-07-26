import { useEffect } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../assets/MainLogo.png";

function MobileMenu({ isOpen, onClose, activeMenu, setActiveMenu }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = ["ABOUT", "DESIGNER", "ARCHIVE", "WHITEPROJ.", "PHOTO"].map(
    (menu) => (
      <Link
        key={menu}
        to={`/${menu.toLowerCase()}`}
        className={`text-black hover:text-[#D9D9D9] pt-1 pb-1.5 transition-colors duration-200 text-center ${
          activeMenu === menu ? "bg-[#CD6629] text-white" : ""
        }`}
        onClick={() => {
          setActiveMenu(menu);
          onClose(); // Close menu on item click
        }}
      >
        {menu}
      </Link>
    )
  );
  // h - full grid grid - flow - col gap - x - [50px] xl: gap - x - [40px] lg: gap - x - [30px] md: gap - x - [20px] items - center font - ['ft-activica-strong'] md:hidden sm:hidden m:hidden transition - all duration - 500 ease -in -out
  return (
    <div
      className={`fixed top-0 left-0 z-20 bg-white bg-opacity-100 w-full h-full flex flex-col items-center justify-center transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <Link to={"/"}>
        <img
          src={MainLogo}
          alt="logo"
          className="h-[40px] w-[195px] cursor-pointer mb-8"
        />
      </Link>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="my-4 font-['ft-activica-strong'] text-[16px] text-center"
        >
          {item}
        </div>
      ))}
      <Link to={"/guestbook"}>
        <p className="mt-8 font-[ft-activica-strong] text-black border-b-[1.5px] border-black text-[14px] leading-none cursor-pointer">
          Guest-Book
        </p>
      </Link>
      {/* <button onClick={onClose} className="mt-8 font-[ft-activica-strong] text-black border-b-[1.5px] border-black text-[14px] leading-none cursor-pointer">CLOSE</button> */}
    </div>
  );
}

export default MobileMenu;
