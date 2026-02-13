'use client'

import Button from "./Button"

export default function Footer() {
    return ( 
        <footer className="bg-black border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#800020] p-1.5 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-xl font-black text-white tracking-tighter uppercase">
                                Job Portal
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed font-medium">
                            La plataforma líder para encontrar las mejores oportunidades en el ecosistema de Solana. Conectamos talento con proyectos de alto impacto.
                        </p>
                    </div>

                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Company</h4>
                        <ul className="space-y-4 text-sm font-bold text-gray-300">
                             <li><a href="#" className="hover:text-[#800020] transition-colors">About Us</a></li>
                             <li><a href="#" className="hover:text-[#800020] transition-colors">Our Team</a></li>
                             <li><a href="#" className="hover:text-[#800020] transition-colors">Partners</a></li>
                             <li><a href="#" className="hover:text-[#800020] transition-colors">For Candidates</a></li>
                        </ul>
                    </div>

                    <div>
                     <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Categories</h4>
                      <ul className="space-y-4 text-sm font-bold text-gray-300">
                         <li><a href="#" className="hover:text-[#800020] transition-colors">Telecommunications</a></li>
                         <li><a href="#" className="hover:text-[#800020] transition-colors">Hotels & Tourism</a></li>
                         <li><a href="#" className="hover:text-[#800020] transition-colors">Construction</a></li>
                         <li><a href="#" className="hover:text-[#800020] transition-colors">Financial Services</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Newsletter</h4>
                        <p className="text-gray-300 text-xs font-medium ">Subscribe for get news </p>
                        <div className="space-y-2">
                            <input 
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:border-[#800020] transition-all text-sm"
                            />
                            <Button variant="primary" className="w-full py-3 text-xs tracking-[0.2em]">
                                Subscribe Now
                            </Button>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs fiont-bold">
                        © 2026 SMATAMOROSN. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-xs font-bold text-gray-400">
                        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}