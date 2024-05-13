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
      <button onClick={handleMenu} className="flex flex-col items-center w-[125px] gap-[17px]">
        <img src={isActive ? MenuImage : MenuImage2} alt="menu" className='block w-[125px] h-[125px]' />
        <div className='flex flex-col w-[125px]'>
          <p className={`font-['ft-activica-strong'] text-[24px] text-nowrap ${isActive ? 'text-black' : 'text-black/40'}`}>{title}</p>
          {isActive && <span className="font-pretendard-regular text-[24px] text-nowrap">{content}</span>}
        </div>
      </button>
    </Link >
  );
}

export default AboutButton;