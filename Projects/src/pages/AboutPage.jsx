import Header from "../components/Header";
import AboutArticle1 from "../components/AboutArticle1";
import AboutMenu from "../components/AboutMenu";
import Footer from "../components/Footer";
import AboutTeam from "../components/AboutTeam";
function AboutPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <main className="mt-[183px] px-[360px] xl:px-[276px] lg:px-[212px] md:px-[163px] sm:px-[125px] m:px-[96px]">
        <AboutArticle1 />
        <AboutMenu />
        <AboutTeam />
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;