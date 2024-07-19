import Footer from "../components/Footer";
// 쇼 끝나고 씀
import PhotoArticle from "../components/PhotoArticle";

function PhotoPage() {
  return (
    <div className="flex flex-col justify-between flex-1 ">
      {/* 이건 쇼끝나고 쓰는 것 */}
      <main className="mb-[20%]">
        <PhotoArticle />
      </main>
      <Footer />
    </div>
  );
}

export default PhotoPage;
