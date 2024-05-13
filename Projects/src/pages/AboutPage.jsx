import Header from "../components/Header";
import AboutArticle1 from "../components/AboutArticle1";
import AboutMenu from "../components/AboutMenu";
import Footer from "../components/Footer";
function AboutPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <main className="mt-[65px] px-[360px] xl:px-[250px] lg:px-[200px] md:px-[150px] sm:px-[100px] m:px-[80px]">
        <AboutArticle1 />
        <AboutMenu />
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;