import Button from "./components/Button";
import CategoryCard from "./components/CategoryCard";
import Footer from "./components/Footer";
import Header from "./components/header";
import JobCard from "./components/JobCard";
const MOCK_JOBS = [
  {
    id: 1,
    title: "Forward Security Director",
    company: "Beuch, Schuppe and Schulist Co",
    timeAgo: "10 min ago",
    category: "Hotels & Tourism",
    type: "Full time",
    salary: "$40000-$42000",
    location: "New-York, USA"
  },
  {
    id: 2,
    title: "Product Designer Alpha",
    company: "Solana Stream Labs",
    timeAgo: "2 hours ago",
    category: "Design & Creative",
    type: "Remote",
    salary: "$70k-$90k",
    location: "Global"
  },
  {
    id: 3,
    title: "Construir coche para la 33",
    company: "Tractor Martin",
    timeAgo: "1 min ago",
    category: "Formula 1 Team",
    type: "Full Time",
    salary: "Fe en Aston Martin",
    location: "de donde sea, necesitamos la 33"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-white py-24 pt-4 mb-6 border-b border-gray-100">
          <div className="absolute inset-0 z-0 ">
      <img 
        src="/job.jpg" 
        alt="Background" 
        className="w-full h-202 sm:h-145 object-cover  "
      />
     
    </div>

    <div className="container mx-auto text-center relative z-10">
      
      <h1 className="text-5xl md:text-6xl font-black text-black mb-4 tracking-tight leading-tight">
        Find your  <span className="text-[#800020]">Dream Job</span> 
      </h1>
            
            <p className="text-black text-lg mb-12 font-medium">
              Connecting Talent with Opportunity: Your Gateway to Career Success
            </p>

            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col md:flex-row items-stretch p-2 md:p-0 overflow-hidden">
              <div className="flex-1 border-r border-gray-100">
                <input 
                  type="text" 
                  placeholder="Job Title or Company" 
                  className="w-full h-16 px-6 outline-none text-black font-medium"
                />
              </div>
              <div className="flex-1 border-r border-gray-100 hidden md:block">
                <select className="w-full h-16 px-6 outline-none text-gray-500 bg-transparent cursor-pointer font-medium">
                  <option>Select Location</option>
                  <option>Meme coins</option>
                  <option>DePIN</option>
                </select>
              </div>
              <div className="flex-1 border-r border-gray-100 hidden md:block">
                <select className="w-full h-16 px-6 outline-none text-gray-500 bg-transparent cursor-pointer font-medium">
                  <option>Select Category</option>
                  <option>Alto (Degen)</option>
                  <option>Medio</option>
                </select>
              </div>
              <div className=" h-full p-2 flex items-center">
                <Button className="h-full md:h-14 px-8 rounded-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Job
                </Button>
              </div>
            </div>

            {/* ESTADÍSTICAS (Basadas en la parte inferior de image_6ccdee.png) */}
            <div className="mt-16 flex flex-wrap justify-center gap-12 md:gap-24">
              <div className="flex items-center gap-4">
                <div className="bg-[#800020]/10 p-3 rounded-full text-[#800020]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-black text-black leading-none">25,850</p>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-tighter">jobs</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#800020]/10 p-3 rounded-full text-[#800020]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-black text-black leading-none">10,250</p>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-tighter">Candidates</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#800020]/10 p-3 rounded-full text-[#800020]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-black text-black leading-none">18,400</p>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-tighter">Companies</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black py-12">
         <div className="container bg-black mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20  grayscale invert brightness-200">
      <span className="text-2xl font-black tracking-tighter italic">DEXSCREENER</span>
      <span className="text-2xl font-black tracking-tighter italic">BIRDEYE</span>
      <span className="text-2xl font-black tracking-tighter italic">RAYDIUM</span>
      <span className="text-2xl font-black tracking-tighter italic">JUPITER</span>
    </div>
  </div>
</section>
<section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="text-4xl font-black text-black tracking-tighter uppercase">
                Recent <span className="text-[#800020]">Jobs</span> Available
              </h2>
              <div className="w-20 h-1.5 bg-[#800020] mt-2"></div>
            </div>
            <button className="text-[#800020] font-black uppercase tracking-widest text-xs border-b-2 border-[#800020] pb-1 hover:text-black hover:border-black transition-all">
              View All
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {MOCK_JOBS.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#F8F9FA]"> {/* Un fondo gris muy sutil para que las cards blancas resalten */}
  <div className="container mx-auto px-4">
    
    {/* Encabezado */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black text-black tracking-tighter uppercase mb-4">
        Browse by <span className="text-[#800020]">Category</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto font-medium">
        Explore jobs across different industries and find the one that fits your expertise.
      </p>
    </div>

    {/* Grid de Categorías */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <CategoryCard 
        title="Agriculture" 
        jobsCount="1254" 
        icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>} 
      />
      <CategoryCard 
        title="Metal Production" 
        jobsCount="816" 
        icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>} 
      />
      <CategoryCard 
        title="Commerce" 
        jobsCount="2082" 
        icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>} 
      />
      <CategoryCard 
        title="Construction" 
        jobsCount="1520" 
        icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>} 
      />
    </div>
  </div>
</section>
      </main>
      <Footer/>
    </div>
  );
}