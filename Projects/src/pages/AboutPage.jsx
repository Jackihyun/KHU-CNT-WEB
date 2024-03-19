import Header from "../components/Header";
import AboutArticle1 from "../components/AboutArticle1";
import Footer from "../components/Footer";
function AboutPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <main>
        <AboutArticle1 />
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;