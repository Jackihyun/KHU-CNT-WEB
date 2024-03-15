import Header from '../components/Header';
import Footer from '../components/Footer';
import Dday from '../components/Dday';
import Invite from '../components/Invite';

function HomePage() {
  return (
    <>
      <Header />
      <main className='mt-[152px] mb-[984px] xl:mt-[112px] xl:mb-[723px] lg:mt-[110px] lg:mb-[700px] md:mt-[73.3px] md:mb-[470px] sm:mt-[49px] sm:mb-[315px] m:mt-[33px] m:mb-[210px]'>
        <Dday />
        <div className='mt-[273px] sticky top-[500px]'>
          <Invite />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default HomePage;