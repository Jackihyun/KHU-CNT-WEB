import DesignerMain from "../components/DesignerMain";
import Footer from "../components/Footer";
function DesignerPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <main className=" mb-[370px] md:mb-[300px] sm:mb-[200px] m:mb-[200px]">
        <DesignerMain />
      </main>
      <Footer />
    </div>
  );
}

export default DesignerPage;