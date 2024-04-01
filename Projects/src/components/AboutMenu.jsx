import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import AboutButton from './AboutButton';

function AboutMenu() {
  const [menu, setMenu] = useState('stage');

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
        <div className='h-[1px] border-[#000] basis-full border-t-2 my-auto relative bottom-[60px]' />
        <AboutButton
          link='/about/thanksto'
          isActive={menu === 'thanksto'}
          handleMenu={() => setMenu('thanksto')}
          title='THANKS TO'
          content='지도 및 지원'
        />
        <div className='h-[1px] border-[#000] basis-full border-t-2 my-auto relative bottom-[60px]' />
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