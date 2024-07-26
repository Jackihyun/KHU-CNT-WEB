// src/pages/GuestPage.js
import GuestForm from "../components/GuestForm";
import GuestList from "../components/GuestList";
import Footer from "../components/Footer";

function GuestPage() {
  return (
    <div className="flex flex-col items-center justify-between flex-1">
      <main className="pt-[80px] px-[360px] xl:px-[200px] lg:px-[150px] md:px-[100px] sm:px-[30px] m:px-[20px] mb-[100px]">
        <GuestList />
        <GuestForm />
      </main>
      <Footer />
    </div>
  );
}

export default GuestPage;
