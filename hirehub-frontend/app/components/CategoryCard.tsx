interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  jobsCount: string;
}

 export default function CategoryCard({ icon, title, jobsCount }: CategoryCardProps)  {

    return(
         <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
    <div className="text-[#800020] mb-5 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg font-black text-black mb-2">{title}</h3>
    <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
      {jobsCount} jobs
    </span>
  </div>
    )
 }
 
