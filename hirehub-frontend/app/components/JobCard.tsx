'use client';

import React from 'react';
import Button from './Button';

interface JobCardProps {
  logo?: string;
  company: string;
  title: string;
  timeAgo: string;
  category: string;
  type: string; 
  salary: string;
  location: string;
}

export default function JobCard({ 
  company, 
  title, 
  timeAgo, 
  category, 
  type, 
  salary, 
  location 
}: JobCardProps) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
      
      <div className="flex items-start gap-5 text-left">
        <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:border-[#800020]/20 transition-colors shrink-0">
          <div className="w-10 h-10 bg-[#800020] rounded-full opacity-90 flex items-center justify-center text-white font-bold text-xl">
            {company.charAt(0)}
          </div>
        </div>
        
        <div>
          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded mb-2 uppercase tracking-wider">
            {timeAgo}
          </span>
          <h3 className="text-xl font-black text-black group-hover:text-[#800020] transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-gray-400 text-sm font-bold mb-4">{company}</p>
          
          <div className="flex flex-wrap gap-y-2 gap-x-5 text-[11px] font-black text-gray-500 uppercase tracking-tighter">
            <span className="flex items-center gap-1.5">
              <span className="text-[#800020]">●</span> {category}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#800020]">●</span> {type}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#800020]">●</span> {salary}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#800020]">●</span> {location}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 border-t md:border-t-0 pt-4 md:pt-0">
        <button className="p-3 text-gray-300 hover:text-[#800020] transition-colors border border-transparent hover:border-gray-100 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
        <Button variant="primary" className="whitespace-nowrap px-8 py-3 text-[11px] tracking-[0.15em] uppercase shadow-none border-none">
          Job Details
        </Button>
      </div>
    </div>
  );
}