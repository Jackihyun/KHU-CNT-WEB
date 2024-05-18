import Header from "../components/Header";
import AboutArticle1 from "../components/AboutArticle1";
import AboutMenu from "../components/AboutMenu";
import Footer from "../components/Footer";

function AboutPage() {

  return (

    <div className='flex flex-col justify-between flex-1 '>
      <main className="pt-[80px] mt-[65px] md:mt-[45px] sm:mt-[25px] m:mt-[15px] px-[360px] xl:px-[200px] lg:px-[150px] md:px-[100px] sm:px-[30px] m:px-[20px]">
        <AboutArticle1 />
        <AboutMenu />
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;