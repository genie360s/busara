import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function BookList() {
    return (
<main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-[75vw]  items-center  text-sm ">
        <Navbar />
        <div className="mt-[5vw]">
       <div className="flex flex-row gap-8 ">
        <div className="w-1/3  rounded-lg h-96 shadow-xl hover:animate-button-bounce">
          <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/image-a.jpg')] h-96 bg-cover rounded-lg">
          {/* <Image
            src="/../images/image-a.jpg"
            width={1000}
            height={1000}
            alt="book-1"
            className="rounded-lg  aspect-square "
          /> */}
          <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
          <button className="absolute bottom-[8px]  w-[12rem] border-2 border-slate-500 border-b-[5px] border-r-[5px]  rounded-lg text-center p-2 mt-3 animate-button-bounce  ">January</button>
          </div>
        </div>
        <div className="w-1/3">a</div>
        <div className="w-1/3">a</div>
       </div>
        </div>
      </div>
     
     
    </main>
    );
}