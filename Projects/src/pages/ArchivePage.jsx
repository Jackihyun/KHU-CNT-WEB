import Header from "../components/Header";
import Footer from "../components/Footer";
import Archive from "../components/Archive";

function ArchivePage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <main className="pt-[80px]">
        <div>
          <Archive />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ArchivePage;