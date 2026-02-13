import Header from "../components/header";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";

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

export default function JobsPage(){
    return(
        <div className="min-h-screen bg-white">
            <Header/>

            <div className="bg-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase">Jobs</h1>
          <p className="text-gray-400 mt-2 font-medium">Find your next job</p>
        </div>
      </div>   
      
           <main className="container mx-auto px-4 py-12">
            <div className=" flex flex-col lg:flex-row gap-8">

                <JobFilter/>

            <div className="flex-col"> <div className="flex-1 space-y-6">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-gray-400 text-sm font-medium">Showing 6 of 10 results</span>
                        <select className="bg-transparent text-sm font-bold text-black outline-none cursor-pointer">
                        <option>Sort by: Latest</option>
                        <option>Sort by: Salary</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                 {MOCK_JOBS.map((job) => (
                    <JobCard key={job.id} {...job} />
                    ))}
            </div>
                <div className="pt-12 flex justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#800020] text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500 font-bold hover:bg-gray-200">2</button>
              <button className="px-4 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500 font-bold hover:bg-gray-200 uppercase text-[10px] tracking-widest ml-4">Next</button>
                </div>
            </div></div>
               
           </main>

        </div>

    )
}