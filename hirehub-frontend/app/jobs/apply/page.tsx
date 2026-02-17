import { FileUpload } from "@/app/components/FileUpload";
import { SidebarInput } from "@/app/components/SidebarInput";
import { ArrowLeft, Briefcase, Mail, Phone, Send, User } from "lucide-react";
import Link from "next/link";

export default function ApplyPage({ params}: {params: {id: string }}){
    return ( 
        <div className="min-h-screen bg-white">
      {/* HEADER DE NAVEGACIÓN RÁPIDA */}
      <div className="border-b border-gray-100 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href={`/jobs/${params.id}`} className="flex items-center gap-2 text-gray-400 hover:text-[#800020] transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to job</span>
          </Link>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-300">
            HireHub / Application Form
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO */}
          <div className="flex-1 space-y-10">
            <div className="space-y-2">
              <h1 className="text-5xl font-black text-black uppercase tracking-tighter italic leading-none">
                Submit Your <br /> <span className="text-[#800020]">Application</span>
              </h1>
              <p className="text-gray-400 font-medium text-lg">Be part of the next generation of corporate solutions.</p>
            </div>

            <form className="space-y-8">
              {/* Información Personal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">First Name</label>
                   <SidebarInput icon={<User size={18}/>} placeholder="e.g. Sergio" />
                </div>
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Last Name</label>
                   <SidebarInput icon={<User size={18}/>} placeholder="e.g. Matamoros" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email</label>
                   <SidebarInput icon={<Mail size={18}/>} placeholder="your@email.com" type="email" />
                </div>
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Phone</label>
                   <SidebarInput icon={<Phone size={18}/>} placeholder="+1 (555) 000-000" />
                </div>
              </div>

              <FileUpload label="Resume / CV" />

              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Cover Letter (Optional)</label>
                <textarea 
                  placeholder="Tell the employer why you are the best fit for this role..." 
                  rows={6}
                  className="w-full p-6 bg-gray-50 border border-transparent rounded-3xl text-sm font-medium focus:border-[#800020]/20 focus:bg-white outline-none transition-all resize-none shadow-sm shadow-black/[0.02]"
                />
              </div>

              <button className="group relative w-full md:w-auto overflow-hidden px-12 py-5 bg-[#800020] text-white rounded-2xl shadow-2xl shadow-[#800020]/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                   <span className="text-[11px] font-black uppercase tracking-[0.3em]">Submit Application</span>
                   <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            </form>
          </div>

          {/* COLUMNA DERECHA: RESUMEN STICKY */}
          <aside className="w-full lg:w-95">
            <div className="sticky top-12 p-8 bg-black rounded-[2.5rem] text-white shadow-2xl">
              <div className="mb-8">
                <div className="w-14 h-14 bg-[#800020] rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase size={28} />
                </div>
                <h4 className="text-xs font-black text-[#800020] uppercase tracking-[0.3em] mb-2">Summary</h4>
                <h3 className="text-2xl font-black uppercase leading-tight italic">Corporate Solutions <br /> Executive</h3>
              </div>

              <div className="space-y-6 border-t border-white/10 pt-8">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Company</span>
                  <span className="text-sm font-bold">Green Group</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Location</span>
                  <span className="text-sm font-bold">New York, USA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Salary</span>
                  <span className="text-sm font-bold text-[#800020]">$40k - $42k</span>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/5">
                <p className="text-[11px] font-medium text-white/60 leading-relaxed italic">
                  "You are about to take the next big step in your career. Make sure your details are correct before submitting."
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
    )
}