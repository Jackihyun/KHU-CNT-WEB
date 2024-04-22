import LOGO from '../assets/LOGO.png';

function Footer() {

  return (
    <footer className=" w-full bg-[#1A1A1A] h-[700px] xl:h-[539px] lg:h-[415px] md:h-[320px] sm:h-[246px] m:h-[189px] px-[100px] xl:px-[77px] lg:px-[59.2px] md:px-[45.5px] sm:px-[35px] m:px-[27px] pb-[143px] xl:pb-[110px] lg:pb-[84.6px] md:pb-[65px] sm:pb-[20px] m:pb-[15px] pt-[77px] xl:pt-[59.2px] lg:pt-[45.5px] md:pt-[35px] sm:pt-[27px] m:pt-[21px] flex justify-between items-start ">
      <div className="absolute"> {/* 로고의 최소 너비 설정 */}
        <a href="/" className='w-full h-full'>
          <img src={LOGO} alt="footer logo" className="m:w-[140px] sm:w-[150px] md:w-[335px] lg:w-[360px] w-[495px] h-auto" /> {/* 너비를 100%로 설정하여 부모 요소에 맞춰 조정 */}
        </a>
      </div>

      <div className="w-[100%] text-content whitespace-nowrap text-white flex-1 ml-[96px] xl:ml-[74px] lg:ml-[57px] md:ml-[44px] sm:ml-[24px] m:ml-[0px] text-right mt-[28px] xl:mt-[22px] lg:mt-[17px] md:mt-[13px] sm:mt-[10px] m:mt-[7.7px] font-pretendard-regular text-[24px] lg:text-[20px] md:text-[16px] sm:text-[12px] m:text-[9.23px]"> {/* flex-1을 사용하여 나머지 공간을 차지하도록 설정 */}
        <p className='justify-self-end'>경희대학교 생활과학대학 의상학과</p>
        <p className='mb-[21px] xl:mb-[16px] lg:mb-[12px] md:mb-[9.2px] sm:mb-[7.1px] m:mb-[5.5px]'>제44회 졸업작품패션쇼</p>
        <p className='mb-[73px] xl:mb-[56px] lg:mb-[43px] md:mb-[33.1px] sm:mb-[25.4px] m:mb-[19.5px]'>Kyunghee University Clothing & Textile 44th Fashion Show</p>
        <p>2024.05.31. Fri. 4PM / 7PM</p>
        <p className='mb-[155px] xl:mb-[70px] lg:mb-[54px] md:mb-[36px] sm:mb-[24px] m:mb-[18.4px]'>서울특별시 동대문구 경희대로 26 경희대학교 평화의전당</p>
        <a href="https://www.instagram.com/khu_cnt/" target="_blank"><p><span className='font-pretendard-semibold'>instagram</span>  @khu_cnt</p></a>
        <a href="https://www.youtube.com/@khucnt_official" target="_blank"><p><span className='font-pretendard-semibold'>youtube</span>  경희대학교 의상학과 (@khucnt_official)</p></a>
      </div>
    </footer>
  );
}


export default Footer;