import Navbar from "./Components/Navbar";
import MainLockUp from "./Components/MainCta";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-[75vw]  items-center  text-sm ">
        <Navbar />
        <div className="mt-[5vw]">
        <MainLockUp />
        </div>
      </div>
     
     
    </main>
  );
}
