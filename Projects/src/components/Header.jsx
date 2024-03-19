import { useState } from 'react';

function Header() {
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <header className="bg-white h-[50px] w-full">
      <nav className="h-full w-full max-w-full pr-[100px] xl:pr-[66.7px] lg:pr-[44.4px] md:pr-[30px] sm:pr-[20px] m:pr-[13.3px] flex justify-end items-center font-[18px]">
        <div className="h-full flex space-x-[50px] pt-[12.5px] font-['ft-activica-strong']">
          {/* 메뉴 항목들 */}
          {["ABOUT", "DESIGNER", "ARCHIVE", "WHITE PROJ.", "PHOTO"].map((menu) => (
            <a
              key={menu}
              href="#"
              className={`text-black hover:text-[#D9D9D9] transition-colors duration-200 ${activeMenu === menu ? 'border-b-[6px] border-black' : ''
                }`}
              onClick={() => setActiveMenu(menu)}
            >
              {menu}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;