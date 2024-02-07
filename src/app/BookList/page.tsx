import React from "react";
import Navbar from "../Components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function BookList() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-[75vw]  items-center  text-sm ">
        <Navbar />
        <div className="mt-8 flex font-medium text-2xl">
          <h3 className="text-center mx-auto underline underline-offset-8 decoration-4">2024 Curated Reading List</h3>
        </div>
        <div className="mt-[2vw]">
          <div className="lg:flex lg:flex-row gap-8  md:flex md:flex-col  ">
            <div className="lg:w-1/3 mt-8 rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/way-of-superior-man.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  January
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8   rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/no-more-mr-nice-guy.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  February
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8 rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/atomic_habits.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  March
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[5vw]">
          <div className="lg:flex lg:flex-row gap-8 md:flex md:flex-col  ">
            <div className="lg:w-1/3 mt-8 rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/life-3-o.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  April
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8   rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/48rulesofpower.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  May
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8 rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/doac.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  June
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[5vw]">
          <div className="lg:flex lg:flex-row gap-8 md:flex md:flex-col  ">
            <div className="lg:w-1/3 mt-8 rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/eatthatfrog.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  July
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8   rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/robin_sharma.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  August
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8 rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/image-a.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  September
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[5vw]">
          <div className="lg:flex lg:flex-row gap-8 md:flex md:flex-col  ">
            <div className="lg:w-1/3 mt-8 rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/image-a.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  October
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8   rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/image-a.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  November
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8 rounded-lg h-96 shadow-xl hover:animate-button-bounce">
              <div className="border-2 border-r-[8px] border-b-[8px] border-slate-700 relative flex place-content-center  p-1 bg-[url('/../images/image-a.jpg')] h-96 bg-cover rounded-lg">
                <i className="text-4xl absolute -top-[12px] right-0 bi bi-bookmarks-fill text-slate-700"></i>
                <button className="absolute bottom-[8px]  w-[12rem] border-2 border-orange-500 border-b-[5px] border-r-[5px]  rounded-lg text-center text-lg text-white font-bold p-2 mt-3 animate-button-bounce  ">
                  December
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
