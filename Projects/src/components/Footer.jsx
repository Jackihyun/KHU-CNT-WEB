import LOGO from '../assets/LOGO.png';

function Footer() {

  return (
    <footer className="bg-[#1A1A1A] h-[700px] w-full px-[100px] pb-[143px] pt-[77px] flex justify-between items-start ">
      <div className="logo-container w-[495px] min-w-[200px]"> {/* 로고의 최소 너비 설정 */}
        <a href="/HOME">
          <img src={LOGO} alt="footer logo" className="w-full h-auto" /> {/* 너비를 100%로 설정하여 부모 요소에 맞춰 조정 */}
        </a>
      </div>

      <div className="w-[100%] text-content whitespace-nowrap text-white flex-1 ml-24 text-right mt-[28px] font-pretendard-regular text-[24px] lg:text-[20px] md:text-[16px] sm:text-[12px]"> {/* flex-1을 사용하여 나머지 공간을 차지하도록 설정 */}
        <p className='justify-self-end'>경희대학교 생활과학대학 의상학과</p>
        <p className='mb-[21px]'>제44회 졸업작품패션쇼</p>
        <p className='mb-[73px]'>Kyunghee University Clothing & Textile 44th Fashion Show</p>
        <p>2024.05.31. Fri. 4PM / 7PM</p>
        <p className='mb-[155px]'>서울특별시 동대문구 경희대로 26 경희대학교 평화의전당</p>
        <a href="https://www.instagram.com/khu_cnt/" target="_blank"><p>instagram  @khu_cnt</p></a>
        <a href="https://www.youtube.com/@khucnt_official" target="_blank"><p>youtube  경희대학교 의상학과 (@khucnt_official)</p></a>
      </div>
    </footer>
  );
}

export default Footer;