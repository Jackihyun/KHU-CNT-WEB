import Header from '../components/Header';
import Footer from '../components/Footer';
import Dday from '../components/Dday';
import Invite from '../components/Invite';

function HomePage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <main className='mt-[152px] mb-[984px] xl:mt-[112px] xl:mb-[723px] lg:mt-[110px] lg:mb-[700px] md:mt-[73.3px] md:mb-[470px] sm:mt-[49px] sm:mb-[315px] m:mt-[33px] m:mb-[210px]'>
        <Dday />
        <div className='mt-[273px] xl:mt-[210px] lg:mt-[162px] md:mt-[125px] sm:mt-[96px] justify-end flex mr-[60px] xl:mr-[46px] lg:mr-[35px] md:mr-[27px] sm:mr-[21px] m:mr-[16px]'>
          <Invite />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage;