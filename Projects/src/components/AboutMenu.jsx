import MenuImage from '../assets/Mask group1.png';
import MenuImage2 from '../assets/Mask group2.png';
import { useState } from 'react';

function AboutMenu() {
  const [menu, setMenu] = useState('stage');
  const handleMenu = (Menu) => {
    setMenu(Menu);
  };
  return (
    <div className="flex justify-center items-start">
      <button onClick={() => handleMenu('stage')} className="flex flex-col justify-center">
        <div className="flex items-center">
          <img src={menu === 'stage' ? MenuImage : MenuImage2} alt="stage" className="w-[125px] h-[125px] mb-[17px]" />
          <div className="border-t-2 border-black w-[410px]"></div>
        </div>
        <p className="font-['ft-activica-strong'] text-[24px]">STAGE<br /><span className="font-pretendard-regular text-[24px]">스테이지주제</span></p>
      </button>

      <button onClick={() => handleMenu('thanksto')} className="flex flex-col justify-center">
        <div className="flex items-center">
          <img src={menu === 'thanksto' ? MenuImage : MenuImage2} alt="Thanksto" className="w-[125px] h-[125px] mb-[17px]" />
          <div className="border-t-2 border-black w-[410px]"></div>
        </div>
        <p className="font-['ft-activica-strong'] text-[24px]">THANKS TO</p>
      </button>

      <button onClick={() => handleMenu('partner')} className="flex flex-col justify-center">
        <img src={menu === 'partner' ? MenuImage : MenuImage2} alt="partner" className="w-[125px] h-[125px] mb-[17px]" />
        <p className="font-['ft-activica-strong'] text-[24px]">PARTNER</p>
      </button>
    </div>
  );
}

export default AboutMenu;