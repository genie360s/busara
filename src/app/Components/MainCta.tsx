import React from "react";
import Link from "next/link";
import Image from "next/image";



export default function MainLockUp() {
    return (
        <div className="lg:flex  lg:flex-row md:flex-row  gap-5 items-center ">
            <div className=" sm:w-full sm:p-2 lg:w-1/2   mb-8 ">
                <h1 className="text-7xl font-bold text-slate-800 mb-7 -leading-4"> Busara  Book CLub</h1>
                <h2 className="text-4xl font-bold text-slate-600 mb-7"> Where curios minds meet.</h2>
                <p className="text-slate-500 w-full text-lg leading-6">
                Busara is a digital book club for the curious-minded, with an unending commitment to learning and growth. We don&apos;t just read books; we read, evaluate, filter, and practice the learnings to become better humans.
                </p>
               <Link href="/BookList">
                <button className="text-lg font-medium border shadow border-slate-500 border-b-[8px] border-r-[8px] hover:border-slate-700 p-5 rounded-lg hover:bg-slate-500 hover:-translate-y-1 hover:duration-500 hover:text-white mt-9 w-full"> Let&apos;s Get Started </button>
                </Link>
            </div>
            <div className="flex lg:w-1/2  sm:w-full sm:aspect-square sm:mt-10">
            <Image 
                src="/../images/image-a.jpg"
                alt="The old man"
                width={1000}
                height={1000}
                className="rounded-lg shadow-xl aspect-square "
                />
            </div>
        </div>
    );
}