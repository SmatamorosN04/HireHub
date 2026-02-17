import React from 'react';

interface SidebarInputProps {
  icon: React.ReactNode;
  placeholder: string;
  type?: string; 
}

export const SidebarInput = ({ icon, placeholder, type = "text" }: SidebarInputProps) => {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#800020] transition-colors">
        {icon}
      </div>
      
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm 
                   placeholder:text-gray-400 text-black
                   focus:border-[#800020]/20 focus:bg-white focus:ring-4 focus:ring-[#800020]/5 
                   outline-none transition-all"
      />
    </div>
  );
};