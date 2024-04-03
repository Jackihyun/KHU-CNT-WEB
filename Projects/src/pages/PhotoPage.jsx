import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotoArticle from "../components/PhotoArticle";
import PhotoArticle2 from "../components/PhotoArticle2";

function PhotoPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <main className="mb-[817px]">
        <PhotoArticle />
        <div className="mt-[254px]"></div>
        <PhotoArticle2 />
      </main>
      <Footer />
    </div>
  );
}

export default PhotoPage;