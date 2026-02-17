import React from 'react';
import { 
  LayoutDashboard, Briefcase, Users, MessageSquare, 
  Settings, Plus, MoreVertical, Eye, Edit3, Trash2 
} from 'lucide-react';
import { Sidebar } from '../components/sidebarDashboard';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <Sidebar/>
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black text-black uppercase tracking-tighter italic">Employer Dashboard</h1>
            <p className="text-gray-400 font-medium">Welcome back, Sergio. Here's what's happening today.</p>
          </div>
          <button className="flex items-center gap-2 bg-[#800020] text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-[#800020]/20 hover:bg-black transition-all">
            <Plus size={16} /> Post New Job
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard label="Active Jobs" value="12" icon={<Briefcase className="text-[#800020]"/>} />
          <StatCard label="Total Applicants" value="148" icon={<Users className="text-[#800020]"/>} />
          <StatCard label="New Messages" value="5" icon={<MessageSquare className="text-[#800020]"/>} />
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h3 className="text-lg font-black text-black uppercase tracking-tight">Recently Posted Jobs</h3>
            <button className="text-[10px] font-black uppercase text-[#800020] tracking-widest">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="p-6 text-[10px] font-black uppercase text-gray-400 tracking-widest">Job Role</th>
                  <th className="p-6 text-[10px] font-black uppercase text-gray-400 tracking-widest">Applicants</th>
                  <th className="p-6 text-[10px] font-black uppercase text-gray-400 tracking-widest">Status</th>
                  <th className="p-6 text-[10px] font-black uppercase text-gray-400 tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <JobRow title="Corporate Solutions Executive" applicants="42" status="Active" />
                <JobRow title="Senior React Developer" applicants="28" status="Active" />
                <JobRow title="Product Designer" applicants="15" status="Expired" />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

// SUB-COMPONENTES AUXILIARES
function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${active ? 'bg-[#800020] text-white shadow-lg shadow-[#800020]/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
      {icon}
      <span className="text-xs font-black uppercase tracking-widest">{label}</span>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string, value: string, icon: any }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-3xl font-black text-black">{value}</p>
      </div>
      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

function JobRow({ title, applicants, status }: { title: string, applicants: string, status: string }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors group">
      <td className="p-6">
        <p className="font-black text-black uppercase text-sm">{title}</p>
        <p className="text-xs text-gray-400">Full Time • New York</p>
      </td>
      <td className="p-6 text-sm font-bold text-gray-600">{applicants} candidates</td>
      <td className="p-6">
        <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
          {status}
        </span>
      </td>
      <td className="p-6 text-right">
        <div className="flex justify-end gap-2">
          <button className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-gray-400 hover:text-[#800020]"><Eye size={16}/></button>
          <button className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-gray-400 hover:text-blue-500"><Edit3 size={16}/></button>
          <button className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-gray-400 hover:text-red-500"><Trash2 size={16}/></button>
        </div>
      </td>
    </tr>
  );
}