import Header from '../components/Header';
import Footer from '../components/Footer';
import Dday from '../components/Dday';
import Invite from '../components/Invite';

function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className='mt-[152px]'>
        <div className='mb-[2407px]'>
          <Dday />
          <Invite/>
        </div>
      </main>

        <Footer />
    </>
  )
}

export default HomePage;