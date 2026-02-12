import Button from "./components/Button";
import Header from "./components/header";


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
        className="w-full h-auto object-cover  "
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
      </main>
    </div>
  );
}