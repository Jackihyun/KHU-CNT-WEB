import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotoArticle from "../components/PhotoArticle";

function PhotoPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <main>
        <PhotoArticle />
      </main>
      <Footer />
    </div>
  );
}

export default PhotoPage;