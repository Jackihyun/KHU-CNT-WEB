import { Link } from 'react-router-dom';
import MenuImage from '../assets/메뉴단추.png';
import MenuImage2 from '../assets/회색메뉴단추.png';
import { useEffect } from 'react';

const AboutButton = ({
  isActive,
  title,
  content,
  ...props
}) => {

  return (
    <div className='aspect-square'>
      <button {...props} className="flex flex-col justify-center items-center w-full gap-[17px] md:gap-[15px] sm:gap-[10px] m:gap-[5px]">
        <img src={isActive ? MenuImage : MenuImage2} alt="menu" className='block w-full h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[75px] lg:h-[75px] md:w-[55px] md:h-[55px] sm:w-[50px] sm:h-[50px] m:w-[33px] m:h-[33px]' />
        <div className='flex flex-col w-[125px] xl:w-[100px] lg:w-[75px] md:w-[55px] sm:w-[50px] m:w-[44px]'>
          <p className={`font-['ft-activica-strong'] text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap ${isActive ? 'text-black' : 'text-black/40'}`}>{title}</p>
          {isActive && <span className="font-pretendard-regular text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap">{content}</span>}
        </div>
      </button>
    </div>
  );
}

export default AboutButton;