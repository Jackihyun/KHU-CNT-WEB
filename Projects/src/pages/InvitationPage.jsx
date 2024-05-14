import InviteImage from '../assets/초대장.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WayImage from '../assets/오시는길.png';

function InvitationPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <div className='pt-[80px] px-[360px] xl:px-[250px] lg:px-[200px] md:px-[150px] sm:px-[100px] m:px-[80px] flex flex-col justify-center items-start'>
        <img src={InviteImage} alt='초대장' className='w-full' />
        <p className='text-[44px] font-pretendard-semibold mb-[50px]'>오시는길</p>
        <p className='text-[24px] font-pretendard-bold'>경희대학교 서울캠퍼스 평화의전당</p>
        <p className='text-[24px] font-pretendard-medium mb-[30px]'>주소: 서울 동대문구 경희대로 26</p>
        <img src={WayImage} alt='오시는길' className='w-full' />
        <div className='grid grid-cols-3 w-full h-[70px]'>
          <div className='w-full border-[3px] bg-[#fbf9f8] rounded-[5px] border-[#cd6629] flex justify-center items-center'>
            <p className='text-[#CD6629] text-[24px] font-pretendard-bold leading-none'>네이버지도</p>
          </div>
          <div className='w-full border-[3px] bg-[#fbf9f8] rounded-[5px] border-[#cd6629] flex justify-center items-center'>
            <p className='text-[#CD6629] text-[24px] font-pretendard-bold leading-none'>카카오맵</p>
          </div>
          <div className='w-full border-[3px] bg-[#fbf9f8] rounded-[5px] border-[#cd6629] flex justify-center items-center'>
            <p className='text-[#CD6629] text-[24px] font-pretendard-bold leading-none'>구글 지도</p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InvitationPage;