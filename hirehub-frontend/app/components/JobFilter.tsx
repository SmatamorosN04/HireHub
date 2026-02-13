export default function JobFilter() {
    return (
        <aside className="w-full lg:w-80 space-y-8 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <div>
                <h4 className="text-black font-black uppercase tracking-widest text-xs mb-4"> Search Job by Title</h4>
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Job title or company"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm outline-none focus:border-[#800020] transition-all"
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div>
                <h4 className="text-black font-black uppercase tracking-widest text-xs mb-4">Location</h4>
                <select className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl text-sm outline-none focus:border-[#800020] appearance-none cursor-pointer ">
                    <option> Chose city</option>
                    <option> Managua</option>
                    <option> Masaya </option>
                </select>
            </div>

            <div>
                <h4 className="text-black font-black uppercase tracking-widest text-xs mb-4 "> Salary Range</h4>
                <input type="range" className="w-ffull h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#800020]"/>
                <div className="flex justify-between mt-2  text-xs font-bold text-gray-500 ">
                    <span>$0</span>
                    <span>$100k</span>
                </div>
            </div>

            <div className=" relative overflow-hidden rounded-2xl bg-[#800020] p-6 text-white aspect-3/4 flex flex-col justify-end">
            <div className="relative z-10">
                <h3 className="text-2xl font-black leading-tight mb-2"> WE ARE HIRING</h3>
                <p className="text-xs font-medium opacity-80 mb-4">Apply Today an Join</p>
                <button className="w-full py-3 bg-white text-[#800020] rounded-xl font-black text-xs uppercase trackingwidest hover:bg-gray-200 transition-colors">
                    Apply Now
                </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full mr-16 mt-16 blur-3xl"></div>
            
            </div>

        </aside>
    )
}