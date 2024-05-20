import Footer from '../components/Footer';
import Dday from '../components/Dday';
import Invite from '../components/Invite';
import HomeArticle from '../components/HomeArticle';

function HomePage() {
  return (
    <div className='flex flex-col justify-between flex-1 bg-[#FBF9F8]'>

      <main className='pt-[70px] mt-[152px] mb-[547px] xl:mt-[112px] xl:mb-[383px] lg:mt-[110px] lg:mb-[268px] md:mt-[73.3px] md:mb-[188px] sm:mt-[49px] sm:mb-[131px] m:mt-[33px] m:mb-[92px] '>
        <Dday />
        <div className='flex justify-center items-center mt-[25px]'>
          <Invite />
        </div>
        {/* 원래 97px */}
        <div className='w-full mt-[25px]'>
          <HomeArticle />
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default HomePage;
