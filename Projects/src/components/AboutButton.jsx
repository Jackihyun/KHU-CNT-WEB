import { Link } from 'react-router-dom';
import MenuImage from '../assets/Mask group1.png';
import MenuImage2 from '../assets/Mask group2.png';

const AboutButton = ({
  isActive,
  handleMenu,
  title,
  content,
  link
}) => {

  return (
    <Link to={link}>
      <button onClick={handleMenu} className="flex flex-col items-center w-full gap-[17px]">
        <img src={isActive ? MenuImage : MenuImage2} alt="menu" className='block w-[125px] h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[75px] lg:h-[75px] md:w-[55px] md:h-[55px] sm:w-[40px] sm:h-[40px] m:w-[33px] m:h-[33px]' />
        <div className='flex flex-col w-[125px] xl:w-[100px] lg:w-[75px] md:w-[55px] sm:w-[40px]'>
          <p className={`font-['ft-activica-strong'] text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap ${isActive ? 'text-black' : 'text-black/40'}`}>{title}</p>
          {isActive && <span className="font-pretendard-regular text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap">{content}</span>}
        </div>
      </button>
    </Link >
  );
}

export default AboutButton;