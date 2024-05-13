import Header from '../components/Header';
import Footer from '../components/Footer';
import Dday from '../components/Dday';
import Invite from '../components/Invite';
import HomeArticle from '../components/HomeArticle';

function HomePage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />

      <main className='mt-[152px] mb-[984px] xl:mt-[112px] xl:mb-[723px] lg:mt-[110px] lg:mb-[700px] md:mt-[73.3px] md:mb-[470px] sm:mt-[49px] sm:mb-[315px]  m:mt-[33px] m:mb-[210px]'>
        <Dday />
        <div className='flex justify-center items-center mt-[25px]'>
          <Invite />
        </div>

        <div className='w-full'>
          <HomeArticle />
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default HomePage;
