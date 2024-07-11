import MenuImage from "../assets/메뉴단추.png";
import MenuImage2 from "../assets/회색메뉴단추.png";

const AboutButton = ({ isActive, showLine, ...props }) => {
  return (
    <>
      {/* 버튼 사이 줄 */}
      {showLine && <div className="h-[1px] w-full bg-gray-300 flex-grow"></div>}
      <div
        className={`aspect-square w-28 h-28 xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-11 sm:h-11 m:w-8 m:h-8 flex flex-col ${
          showLine ? "w-fit" : ""
        }`}
      >
        <button
          {...props}
          className="flex flex-col justify-center items-center gap-[15px] md:gap-[10px] sm:gap-[5px] m:gap-[5px] w-28 h-28 xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-11 sm:h-11 m:w-8 m:h-8"
        >
          <div className="flex w-28 h-28 xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-11 sm:h-11 m:w-8 m:h-8">
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={isActive ? MenuImage : MenuImage2}
                alt="menu"
                className="block w-full h-full object-contain"
              />
            </div>
          </div>
        </button>
      </div>
      {/* 버튼 사이 줄 */}
      {showLine && <div className="h-[1px] w-full bg-gray-300 flex-grow"></div>}
    </>
  );
};

export default AboutButton;
