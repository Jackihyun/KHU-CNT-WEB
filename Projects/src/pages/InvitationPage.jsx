import InviteImage from '../assets/초대장.png';
import Footer from '../components/Footer';
import WayImage from '../assets/오시는길.png';

function InvitationPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <div className='pt-[80px] px-[360px] xl:px-[200px] lg:px-[150px] md:px-[100px] sm:px-[30px] m:px-[20px] flex flex-col justify-center items-start'>
        <img src={InviteImage} alt='초대장' className='w-full mb-20' />
        {/* 오시는길 */}
        <p className='text-[44px] md:text-[32px] sm:text-[28px] m:text-[24px] font-pretendard-semibold mb-[50px] md:mb-[30px] sm:mb-[25px] m:mb-[20px]'>오시는길</p>
        <p className='text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px] font-pretendard-bold'>경희대학교 서울캠퍼스 평화의전당</p>
        <p className='text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px] font-pretendard-medium mb-[30px] md:mb-[20px] sm:mb-[15px] m:mb-[10px]'>주소: 서울 동대문구 경희대로 26</p>
        <img src={WayImage} alt='오시는길' className='w-full mb-[30px] md:mb-[20px] sm:mb-[15px] m:mb-[10px]' />
        <div className='grid grid-cols-3 gap-x-[31px] md:gap-[25px] sm:gap-[20px] m:gap-[15px] w-full h-[70px] md:h-[50px] sm:h-[40px] m:h-[30px] mb-[150px] md:mb-[100px] sm:mb-[75px] m:mb-[50px]'>
          <a href="https://naver.me/xb7aDbW2" target='_blank' className='w-full border-[3px] md:border-[2px] sm:border-[1.5px] m:border-[1.5px] bg-[#fbf9f8] rounded-[5px] border-[#cd6629] hover:bg-[#cd6629] flex justify-center items-center p-[5%] text-[#CD6629] hover:text-white text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-bold leading-none hover:scale-105 duration-150 ease-in-out'>
            네이버지도
          </a>
          <a href="https://place.map.kakao.com/m/17561258" target='_blank' className='w-full border-[3px] md:border-[2px] sm:border-[1.5px] m:border-[1.5px] bg-[#fbf9f8] rounded-[5px] border-[#cd6629] hover:bg-[#cd6629] flex justify-center items-center p-[5%] text-[#CD6629] hover:text-white text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px] font-pretendard-bold leading-none hover:scale-105 duration-150 ease-in-out'>
            카카오맵
          </a>

          <a href="https://maps.app.goo.gl/H3QMivKxvERKuDJ99" target='_blank' className='w-full border-[3px] md:border-[2px] sm:border-[1.5px] m:border-[1.5px] bg-[#fbf9f8] rounded-[5px] border-[#cd6629] hover:bg-[#cd6629] flex justify-center items-center p-[5%] text-[#CD6629] hover:text-white text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px] font-pretendard-bold leading-none hover:scale-105 duration-150 ease-in-out'>
            구글 지도
          </a>
        </div>

        {/* 교통안내 부분 */}
        <div className='flex flex-col mb-[150px] md:mb-[100px] sm:mb-[75px] m:mb-[50px] w-full'>
          <p className='text-[44px] md:text-[32px] sm:text-[28px] m:text-[24px]  font-pretendard-semibold mb-[50px] md:mb-[30px] sm:mb-[25px] m:mb-[20px]'>교통 안내</p>
          <p className="text-black">
            <span className="text-[28px] md:text-[21px] sm:text-[18px] m:text-[16px] font-pretendard-bold">지하철</span>
            <div className='mb-[24px] md:mb-[16px] sm:mb-[12px] m:mb-[8px]'></div>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>1호선, 경의중앙선 회기역 1번 출구 하차 – 동대문01버스 탑승하여 경희대의료원 하차 – 도보 5분
            </span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>1호선, 경의중앙선 회기역 1번 출구 하차 – 도보 15분
            </span>
            <div className='mb-[48px] md:mb-[32px] sm:mb-[24px] m:mb-[16px]'></div>
            <span className="text-[28px] md:text-[21px] sm:text-[18px] m:text-[16px]  font-pretendard-bold">버스</span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>경희의료원 하차 마을버스 01(회기역 1번 출구 앞)
            </span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>경희대 입구 하차 273, 201
            </span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>경희중고 하차 120, 147, 261, 273, 1222
            </span>
            <div className='mb-[48px] md:mb-[32px] sm:mb-[24px] m:mb-[16px]'></div>
            <span className="text-[28px] md:text-[21px] sm:text-[18px] m:text-[16px]  font-pretendard-bold">자가용</span>
            <div className='mb-[24px] md:mb-[16px] sm:mb-[12px] m:mb-[8px]'></div>

            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              <span>&nbsp;&nbsp;&#183;&nbsp;&nbsp;</span>
              <span className='text-bold'></span>자유로분기점&nbsp;→ 성산대교 북단(자유로, 강변북로) → 강변북로 → 성산로 → 내부순환로 → 정릉길 → 회기로→ 경희대학교
            </span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>일직분기점&nbsp;→ 목감IC(서해안고속도로) → 금천IC → 서부간선도로 → 성산대교북단(성산로) → 내부순환로 → 정릉길 → 회기로 → 경희대학교
            </span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>양재IC&nbsp;→ 한남IC(경부고속도로) → 한남대교 남단 → 올림픽대로 → 성수대교 분기점 → 경동시장 → 회기역앞 → 회기로 → 경희대학교
            </span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>청담IC&nbsp;→ 올림픽대로 → 성수대교분기점 → 경동시장 → 회기역 앞 → 회기로 → 경희대학교
            </span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>판교IC&nbsp;→ 한남IC(경부고속도로) → 한남대교 남단 → 올림픽대로 → 성수대교 분기점 → 경동시장 → 회기역 앞 → 회기로 → 경희대학교
            </span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>천호IC&nbsp;→ 천호사거리(천호대로) → 아차산역 → 중랑교(동부간선도로) → 시조사 삼거리 → 회기역앞
              → 회기로 → 경희대학교
            </span>
            <span className="flex text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium">
              &nbsp;&nbsp;&#183;&nbsp;&nbsp;
              <span className='text-bold'></span>상일IC&nbsp;→ 남양주IC(서울외곽순환고속도로) → 시조사 삼거리 → 회기역 앞 → 회기로 → 경희대학교
            </span>
          </p>
        </div>

        {/*  주변정보 부분 */}
        <div className='flex flex-col w-full mb-[150px] md:mb-[100px] sm:mb-[75px] m:mb-[50px]'>
          <p className='text-[44px] md:text-[32px] sm:text-[28px] m:text-[24px] font-pretendard-semibold mb-[50px] md:mb-[30px] sm:mb-[26px] m:mb-[22px]'>주변 정보</p>
          <p className='text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-medium mb-[30px] md:mb-[20px] sm:mb-[16px] m:mb-[12px]'>방문 전후 식사 시 참고하실 수 있도록 경희대학교 서울캠퍼스 인근 음식점 정보를 공유합니다.</p>
          <div className='grid grid-cols-3 gap-x-[31px] w-full h-[70px] md:h-[50px] sm:h-[40px] m:h-[30px]'>
            <a href='https://naver.me/5TinG0V1' target='_blank' className='w-full border-[3px] md:border-[2px] sm:border-[1.5px] m:border-[1.5px] bg-[#fbf9f8] rounded-[5px] border-[#cd6629] flex justify-center items-center p-[5%] text-[#CD6629] text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px] font-pretendard-bold leading-none hover:bg-[#CD6629] hover:text-white hover:scale-10 hover:scale-105 duration-150 ease-in-out'>
              식당
            </a>
            <a href='https://naver.me/xrcDZNJN' target='_blank' className='w-full border-[3px] md:border-[2px] sm:border-[1.5px] m:border-[1.5px] bg-[#fbf9f8] rounded-[5px] border-[#cd6629] flex justify-center items-center p-[5%] text-[#CD6629] text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-bold leading-none hover:bg-[#CD6629] hover:text-white hover:scale-10 hover:scale-105 duration-150 ease-in-out'>
              카페/디저트
            </a>
            <a href='https://naver.me/FawFjCba' target='_blank' className='w-full border-[3px] md:border-[2px] sm:border-[1.5px] m:border-[1.5px] bg-[#fbf9f8] rounded-[5px] border-[#cd6629] flex justify-center items-center p-[5%] text-[#CD6629] text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]  font-pretendard-bold leading-none hover:bg-[#CD6629] hover:text-white hover:scale-105 duration-150 ease-in-out'>
              술집
            </a>
          </div>
        </div>

        {/* 인스타그램 부분 */}
        <div className='flex flex-col w-full mb-[150px] md:mb-[100px] sm:mb-[75px] m:mb-[50px]'>
          <p className='text-[44px] md:text-[32px] sm:text-[28px] m:text-[24px]   font-pretendard-semibold mb-[50px] md:mb-[30px] sm:mb-[25px] m:mb-[20px]'>INSTAGRAM</p>
          <p className='text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px]   font-pretendard-medium'>추가적인 소식은 경희대학교 의상학과 졸업작품 인스타그램 <a href='https://www.instagram.com/khu_cnt/' target="_blank"><span className='text-[#CE6729]'>@KHU_CNT</span></a> 에서 확인 가능합니다.</p>

        </div>
      </div>
      <Footer />
    </div >
  );
}

export default InvitationPage;