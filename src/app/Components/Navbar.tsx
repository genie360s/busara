// Navbar
import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
    return (
        
        <nav className="flex w-full  border border-orange-500 rounded-lg shadow-lg p-5 ">
            <div className="flex ml-2">
                <Link href="/">
                   
                        <Image
                            src="../images/bbc_logo.svg"
                            alt="Busara"
                            width={200}
                            height={200}
                        />
                    
                </Link>
            </div>
        </nav>
        
    );
}