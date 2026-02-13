'use client';

import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between ">

               <div className="flex items-center gap-2 cursor-pointer group">
                <div className="bg-[#800020] p-1.5 rounded-lg transition-transform group-hover:scale-110">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}d="M21 13.255A23.931 23.931 0 0112
                                                                                           15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 
                                                                                           00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 
                                                                                           2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2
                                                                                            2v10a2 2 0 002 2z"
                        />
                    </svg>
                 </div>
                 <span className="text-xl font-black tracking-tighter uppercase">
                     Job Portal
                 </span>
                </div> 

                <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide uppercase">
                    <Link href="/" className="hover:text-[#800020] transition-colors">Home</Link>
                    <Link href="/jobs" className="hover:text-[#800020] transition-colors">Jobs</Link>
                    <a href="#" className="hover:text-[#800020] transition-colors">About Us</a>
                    <a href="#" className="hover:text-[#800020] transition-colors">Contact Us</a>               
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-bold hover:text-[#800020] transition-colors px-2 uppercase tracking-wider">
                        Login
                    </button>
                    <Button variant="primary" className="text-xs uppercase tracking-widest px-8">
                        Get Started
                    </Button>
                </div>
                <button 
                 className="md:hidden p-2 text-white"
                 onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
             <div className="md:hidden bg-white border-b border-gray-200 p-6 space-y-6">
             <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider">
                <a href="#" className="text-black hover:text-[#800020]">Home</a>
                <a href="#" className="text-black hover:text-[#800020]">Jobs</a>
                <a href="#" className="text-black hover:text-[#800020]">About Us</a>
                <a href="#" className="text-black hover:text-[#800020]">Contact Us</a>
            </nav>
                <div className="flex flex-col gap-3 pt-6 border-t border-gray-100">
                <Button variant="outline" className="w-full">Login</Button>
                <Button variant="primary" className="w-full">Get Started</Button>
                </div>
        </div>
      )}
        </header>
    )
}