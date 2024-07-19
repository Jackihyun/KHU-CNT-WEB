import Footer from "../components/Footer";
import HomeArticle from "../components/HomeArticle";

function HomePage() {
  return (
    <div className="flex flex-col justify-between flex-1 bg-[#FBF9F8]">
      <main>
        {/* <Dday />
        <div className='flex justify-center items-center mt-[25px]'>
          <Invite />
        </div> */}
        {/* 원래 97px */}
        <div className="w-full">
          <HomeArticle />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
