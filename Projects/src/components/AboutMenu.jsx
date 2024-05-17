import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AboutButton from './AboutButton';

function AboutMenu() {
  const location = useLocation();
  const [menu, setMenu] = useState(location.pathname.split('/')[2] || 'stage');

  useEffect(() => {
    setMenu(location.pathname.split('/')[2] || 'stage');
  }, [location]);

  return (
    <>
      <div className="flex">
        <AboutButton
          link='/about/stage'
          isActive={menu === 'stage'}
          handleMenu={() => setMenu('stage')}
          title='STAGE'
          content='스테이지 주제'
        />
        <div className='h-[1px] border-gray-300 basis-full border-t-2 my-auto relative bottom-[45px] xl:bottom-[38px] lg:bottom-[31px] md:bottom-[27px] sm:bottom-[24px] m:bottom-[15px]' />
        <AboutButton
          link='/about/thanksto'
          isActive={menu === 'thanksto'}
          handleMenu={() => setMenu('thanksto')}
          title='THANKS TO'
          content='지도 및 지원'
        />
        <div className='h-[1px] border-gray-300 basis-full border-t-2 my-auto relative bottom-[45px] xl:bottom-[38px] lg:bottom-[31px] md:bottom-[27px] sm:bottom-[24px] m:bottom-[15px]' />
        <AboutButton
          link='/about/partner'
          isActive={menu === 'partner'}
          handleMenu={() => setMenu('partner')}
          title='PARTNER'
          content='협찬사'
        />
      </div>
      <Outlet />
    </>
  );
}

export default AboutMenu;