import Footer from "../components/Footer";
import Archive from "../components/Archive";

function ArchivePage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <main className="pt-[80px] xl:pt-[70px] lg:pt-[60px] md:pt-[50px] sm:pt-[50px] m:pt-[50px]">
        <div>
          <Archive />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ArchivePage;