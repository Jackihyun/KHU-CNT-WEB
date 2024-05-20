import MenuImage from '../assets/메뉴단추.png';
import MenuImage2 from '../assets/회색메뉴단추.png';

const AboutButton = ({
  isActive,
  title,
  content,
  showLine,
  ...props
}) => {
  return (
    <>
      {/* 버튼 사이 줄 */}
      {showLine && <div className='h-[1px] w-full bg-gray-300 flex-grow'></div>}
      <div className={`aspect-square w-[125px] h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[75px] lg:h-[75px] md:w-[55px] md:h-[55px] sm:w-[50px] sm:h-[50px] m:w-[33px] m:h-[33px] flex flex-col ${showLine ? ' w-fit' : ''}`}>
        <button {...props} className="flex flex-col justify-center items-start gap-[15px] md:gap-[10px] sm:gap-[5px] m:gap-[5px]">
          <div className='flex'>
            <div className={`flex items-center w-full`}>
              <img
                src={isActive ? MenuImage : MenuImage2}
                alt="menu"
                className='block w-full z-10'
              />
            </div>
          </div>
          
        </button >
      </div >
      {/* 버튼 사이 줄 */}
      {showLine && <div className='h-[1px] w-full bg-gray-300 flex-grow'></div>}
      
    </>
  );
}

export default AboutButton;
