import React from 'react';

interface OverviewItemProps {
  label: string;
  value: string;
}

export const OverviewItem = ({ label, value }: OverviewItemProps) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
        {label}
      </span>
      <span className="text-sm font-bold text-black">
        {value}
      </span>
    </div>
  );
};