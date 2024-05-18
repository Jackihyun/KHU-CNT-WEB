import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AboutButton from './AboutButton';
import { useParams } from 'react-router-dom';
import AboutMenuThanks from './AboutMenuThanks';
import AboutMenuStage from './AboutMenuStage';
import AboutMenuPartner from './AboutMenuPartner';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';


const decodeParam = (param) => {
  if (param === 'thanks') return <AboutMenuThanks />;
  if (param === 'partner') return <AboutMenuPartner />;
  else return <AboutMenuStage />;
}

function AboutMenu() {
  const location = useLocation();

  const [params, setSearchParams] = useSearchParams();
  const [menuParam, setMenuParam] = useState(params.get('menu') || 'stage');
  const showingPanel = useMemo(() => decodeParam(menuParam), [menuParam]);

  const handleMenuButtonClick = (selectedMenu) => {
    setSearchParams({ menu: selectedMenu });
    setMenuParam(selectedMenu);
  }


  return (
    <>
      <div className="flex">
        <AboutButton
          isActive={menuParam === 'stage'}
          onClick={() => {
            handleMenuButtonClick('stage');
          }}
          title='STAGE'
          content='스테이지 주제'
        />
        <div className='h-[1px] border-gray-300 basis-full border-t-2 my-auto relative bottom-[45px] xl:bottom-[38px] lg:bottom-[31px] md:bottom-[27px] sm:bottom-[22px] m:bottom-[15px]' />
        <AboutButton
          isActive={menuParam === 'thanks'}
          onClick={() => handleMenuButtonClick('thanks')}
          title='THANKS TO'
          content='지도 및 지원'
        />
        <div className='h-[1px] border-gray-300 basis-full border-t-2 my-auto relative bottom-[45px] xl:bottom-[38px] lg:bottom-[31px] md:bottom-[27px] sm:bottom-[22px] m:bottom-[15px]' />
        <AboutButton
          isActive={menuParam === 'partner'}  
          onClick={() => handleMenuButtonClick('partner')}
          title='PARTNER'
          content='협찬사'
        />
      </div>
      {showingPanel}
    </>
  );
}

export default AboutMenu;