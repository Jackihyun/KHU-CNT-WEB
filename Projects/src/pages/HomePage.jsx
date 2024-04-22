import Header from '../components/Header';
import Footer from '../components/Footer';
import Dday from '../components/Dday';
import Invite from '../components/Invite';
import HomeArticle from '../components/HomeArticle';

function HomePage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />

      <div className='grid grid-rows-3'>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <main className='mt-[152px] mb-[984px] xl:mt-[112px] xl:mb-[723px] lg:mt-[110px] lg:mb-[700px] md:mt-[73.3px] md:mb-[470px] sm:mt-[49px] sm:mb-[315px]  m:mt-[33px] m:mb-[210px]'>
        <Dday />
        
        <div className='mt-[273px] xl:mt-[210px] lg:mt-[162px] md:mt-[125px] sm:mt-[96px] justify-end flex mr-[60px] xl:mr-[46px] lg:mr-[35px] md:mr-[27px] sm:mr-[21px] m:mr-[16px] fixed bottom-[200px] xl:bottom-[338px] lg:bottom-[439px] md:bottom-[571px] sm:bottom-[602px] m:bottom-[350px] right-0'>
          <Invite />
        </div>

        <div className='w-full mt-[1994px]'>
          <HomeArticle />
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default HomePage;
