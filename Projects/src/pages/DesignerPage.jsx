import Header from "../components/Header";
import DesignerMain from "../components/DesignerMain";
import Footer from "../components/Footer";
function DesignerPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <main className="">
        <DesignerMain />
        
      </main>
      <Footer />
    </div>
  );
}

export default DesignerPage;