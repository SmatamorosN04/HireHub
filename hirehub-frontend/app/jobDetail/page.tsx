import React from 'react';
import { 
  MapPin, Briefcase, DollarSign, Clock, CheckCircle2, 
  Bookmark, Share2, Mail, Phone, User 
} from 'lucide-react';
import { OverviewItem } from '../components/OverviewItem';
import { SidebarInput } from '../components/SidebarInput';
import Header from '../components/header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';

export default function JobDetailsPage() {
    return (
        <div className='min-h-screen bg-white'>
                <Header/>
            <section className='bg-gray-50 border-b border-gray-100 py-12'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
                        <div className='space-y-4'>
                            <h1 className=' text-4xl font-black text-black uppercase tracking-tight'>
                                Corporate Solution Executive
                            </h1>
                            <div className='flex flex-wrap gap-4 text-sm font-medium text-gray-500'>
                                <span className='flex items-center gap-1'><Briefcase size={16} className='text-[#800020]'/> Commerce</span>
                                <span className='flex items-center gap-1'><Clock size={16} className='text-[#800020]'/> Commerce</span>
                                <span className='flex items-center gap-1'><DollarSign size={16} className='text-[#800020]'/> Commerce</span>
                                <span className='flex items-center gap-1'><MapPin size={16} className='text-[#800020]'/> Commerce</span>

                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <button className='p-3 border border-gray-200 rounded-xl hover:border-gray-100 transition-colors'>
                                <Bookmark size={20} className='text-gray-400'/>
                            </button>
                            <button className='px-8 py-3 bg-[#800020] text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-black transition-all'>
                                Apply Job
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <main className='container mx-auto px-4 py-12'>
                <div className='flex flex-col lg:flex-row gap-12'>
                    <div className='flex-1 space-y-10 text-gray-600 leading-relaxed'>
                        <section>
                            <h3 className='text-xl font-black text-black uppercase mb-4 tracking-wider'>Job Description</h3>
                            <p>
                                We are looking for a Corporate Solutions Executive to join our expanding team. 
                The ideal candidate will be responsible for driving business growth through 
                strategic partnerships and innovative solution selling. You will work closely 
                with cross-functional teams to deliver high-impact results in the Web3 space.
                            </p>
                        </section>

                        <section>
                            <h3 className='text-xl font-black text-black uppercase mb-4 tracking-wider'>Key Responsabilities</h3>
                            <ul className='space-y-3'>
                                {[
                                "Develop and execute strategic plans to achieve sales targets",
                                "Building and maintaining strong, long-lasting customer relationships",
                                "Understand the competitive landscape and market trends",
                                 "Collaborate with the product team to improve customer offerings"
                             ].map((item, i) => (
                             <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#800020] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                            </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h3 className='text-xl font-black uppercase mb-4 tracking-wider'>Professional Skills</h3>
                            <ul className='space-y-3'>
                                {[
                                 "Strong communication and negotiation skills",
                                 "Proven ability to drive the sales process from plan to close",
                                 "Analytical mindset and data-driven decision making",
                                 "Ability to work independently in a remote-first environment"
                                ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 size={20} className="text-[#800020] mt-0.5 flex-shrink-0" />
                                 <span>{item}</span>
                                </li>
                                ))}
                            </ul>
                        </section>
                        
                        
                        <div className='flex flex-wrap gap-2 pt-6 border-t border-gray-100'>
                            {['Full Time', 'Commerce', 'Corporate', 'Remote'].map(tag => (
                                <span key={tag} className='px-4 py-1.5 bg-gray-100 text-gray-500 text-xs font-bold uppercase rounded-full'>
                                    {tag}
                                </span>
                            ))}
                              <button className="text-[#800020] font-bold uppercase text-xs tracking-widest border-b-2 border-[#800020] pb-1 hover:text-black hover:border-black transition-all">
        View All Jobs
      </button>
    </div>

    {/* Usamos el componente que ya tienes */}
    <div className="flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-8">
      <JobCard 
                                    title="Internal Creative Coordinator"
                                    company="Green Group"
                                    location="New York, USA"
                                    salary="$44k-$46k"
                                    type="Full time"
                                    category="Commerce"
                                    logo="/path-to-logo.png" // Si tu JobCard pide logo
                                    timeAgo={''}      />
      <JobCard 
                                    title="District Intranet Director"
                                    company="VonRueden - Weber Co"
                                    location="New York, USA"
                                    salary="$42k-$48k"
                                    type="Full time"
                                    category="Commerce" timeAgo={''}      />
      <JobCard 
                                    title="Corporate Tactics Facilitator"
                                    company="Cormier, Turner and Flatley Inc"
                                    location="New York, USA"
                                    salary="$38k-$40k"
                                    type="Full time"
                                    category="Commerce" timeAgo={''}      />
  
                        </div>
                    </div>



                    <aside className='w-full lg:w-75 space-y-8'>
                        <div className='bg-gray-50 rounded-2xl p-8 border border-gray-100'>
                            <h4 className='text-black font-black uppercase text-xs tracking-widest mb-6'>Job Overview</h4>
                            <div className='space-y-6'>
                             <OverviewItem label='experience' value='5 years'/>
                             <OverviewItem label='Degree' value='Master Degree'/>
                             <OverviewItem label='Gender' value='any'/>
                             <OverviewItem label='Posted' value='2 Days Ago'/>
                            </div>
                        </div>

                        <div className='bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
                            <h4 className='text-black font-black uppercase text-xs tracking-widest mb-6'>Send us Message</h4>
                            <form className='space-y-4'>
                                <SidebarInput icon={<User size={16}/>} placeholder="Full Name" />
                                <SidebarInput icon={<Mail size={16}/>} placeholder="Email Address" />
                                <SidebarInput icon={<Phone size={16}/>} placeholder="Phone Number" />                            </form>
                            <textarea
                            placeholder='Message'
                            rows={4}
                            className='w-full p-4 bg-gray-40 border-transparent rounded-xl text-sm focus:border-[#800020] focus:bg-white outline-none transition-all resize-none'
                            />
                            <button className=' w-full py-4 bg-[#800020] text-white font-black uppercase text-xs trackinhg-widest rounded-xl hover:bg-black transition-all shadow-lg shadow-[#800020]/20'>
                            Send Message
                            </button>
                        </div>
                    </aside>



                </div>
            </main>
            <Footer />
        </div>
    )
}