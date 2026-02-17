'use client'; 
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { EMPLOYER_NAV_ITEMS, CANDIDATE_NAV_ITEMS } from '@/constant/navigation';

export const Sidebar = () => {
  const pathname = usePathname();
  
 const [userRole, setUserRole] = useState<'employer' | 'candidate'>('employer'); 
  const navItems = userRole === 'employer' ? EMPLOYER_NAV_ITEMS : CANDIDATE_NAV_ITEMS;
  return (
    <aside className="w-72 bg-black text-white p-8 flex flex-col justify-between hidden lg:flex min-h-screen">
      <div className="space-y-12">
        <div className="text-2xl font-black italic tracking-tighter">
          HIRE<span className="text-[#800020]">HUB</span>
        </div>
        <button 
          onClick={() => setUserRole(userRole === 'employer' ? 'candidate' : 'employer')}
          className="w-full py-2 bg-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#800020] transition-all"
        >
          Switch to {userRole === 'employer' ? 'Candidate' : 'Employer'}
        </button>
        
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link 
                key={item.id} 
                href={item.href}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group
                  ${isActive 
                    ? 'bg-[#800020] text-white shadow-lg shadow-[#800020]/20' 
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
              >
                <Icon size={20} className={isActive ? 'text-white' : 'group-hover:text-white'} />
                <span className="text-xs font-black uppercase tracking-widest">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 bg-[#800020]/10 border border-[#800020]/20 rounded-2xl mt-8">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#800020] mb-2">
          {userRole === 'candidate' ? 'Employer Plan' : 'Candidate Profile'}
        </p>
        <p className="text-xs font-bold text-white/80">
          {userRole === 'candidate' 
            ? 'Manage unlimited job postings' 
            : 'Track all your applications'}
        </p>
      </div>
    </aside>
  );
};