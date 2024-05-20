import Footer from "../components/Footer";
import WhiteArticle from "../components/WhiteArticle";

function WhiteprojectPage() {
  return (
    <div className='flex flex-col justify-between flex-1 overflow-x-hidden'>
      <main>
        <WhiteArticle />
      </main>
      <Footer />
    </div>
  );
}

export default WhiteprojectPage;
