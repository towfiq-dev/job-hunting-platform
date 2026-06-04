"use client";
import React from "react";
import { recentApplications, topCompanies } from "./data"; 

const RecentApplication = () => {
  return (
    <div className="w-full min-h-screen bg-[#070708] text-[#f4f4f5] p-4 md:p-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Side: Recent Applications */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Recent Applications</h2>
            <button className="text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer">
              View all
            </button>
          </div>

          {/* Table Container with exact look */}
          <div className="bg-[#111113] border border-zinc-800/80 rounded-xl shadow-2xl overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b border-zinc-800/80 bg-[#141416]/30">
                    <th className="text-zinc-500 py-4 px-6 font-medium text-xs tracking-wider uppercase">Candidate Name</th>
                    <th className="text-zinc-500 py-4 px-4 font-medium text-xs tracking-wider uppercase">Role</th>
                    <th className="text-zinc-500 py-4 px-4 font-medium text-xs tracking-wider uppercase">Date Applied</th>
                    <th className="text-zinc-500 py-4 px-4 font-medium text-xs tracking-wider uppercase">Experience</th>
                    <th className="text-zinc-500 py-4 px-6 font-medium text-xs tracking-wider uppercase text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/40">
                  {recentApplications.map((candidate) => {
                    // Exact matching styles for Status Badges
                    let badgeStyles = "bg-zinc-800/50 text-zinc-300 border-zinc-700/50";
                    if (candidate.statusColor === "success") badgeStyles = "bg-emerald-950/40 text-emerald-400 border border-emerald-800/40";
                    if (candidate.statusColor === "warning") badgeStyles = "bg-amber-950/40 text-amber-400 border border-amber-800/40";
                    if (candidate.statusColor === "danger") badgeStyles = "bg-rose-950/40 text-rose-400 border border-rose-800/40";

                    return (
                      <tr key={candidate.id} className="hover:bg-zinc-900/20 transition-colors">
                        {/* Avatar and Name */}
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-zinc-800/80 text-zinc-300 font-bold flex items-center justify-center text-sm border border-zinc-700/50 flex-shrink-0">
                              {candidate.name ? candidate.name.charAt(0) : "U"}
                            </div>
                            <span className="font-semibold text-white text-sm md:text-base">
                              {candidate.name}
                            </span>
                          </div>
                        </td>
                        
                        <td className="py-4 px-4 text-zinc-400 text-sm whitespace-nowrap">{candidate.role}</td>
                        <td className="py-4 px-4 text-zinc-400 text-sm whitespace-nowrap">{candidate.date}</td>
                        <td className="py-4 px-4 text-zinc-400 text-sm whitespace-nowrap">{candidate.experience}</td>
                        
                        {/* Badge */}
                        <td className="py-4 px-6 text-center whitespace-nowrap">
                          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles}`}>
                            {candidate.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Side: My Top Companies */}
        <div className="space-y-4 w-full">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">My Top Companies</h2>
            <button className="text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer">
              View all
            </button>
          </div>

          {/* Right Card Panel with clean borders and padding */}
          <div className="bg-[#111113] border border-zinc-800/80 rounded-xl shadow-2xl p-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {topCompanies.map((company) => (
                <div key={company.id} className="flex justify-between items-center p-2 rounded-lg hover:bg-zinc-900/20 transition-all">
                  
                  <div className="flex items-center gap-4">
                    {/* Square Icon Design with First Letter */}
                    <div className="w-11 h-11 bg-zinc-800/70 rounded-xl flex items-center justify-center border border-zinc-700/40 flex-shrink-0">
                      <span className="text-zinc-300 font-bold text-base">
                        {company.name ? company.name.charAt(0) : "C"}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm md:text-base tracking-wide">{company.name}</h4>
                      <p className="text-xs text-zinc-500 mt-0.5">{company.industry}</p>
                    </div>
                  </div>
                  
                  {/* Active Jobs Counter */}
                  <div className="text-right min-w-[70px]">
                    <span className="block font-extrabold text-white text-base md:text-lg tracking-tight">{company.activeJobs}</span>
                    <span className="text-[10px] text-zinc-500 tracking-wider uppercase font-bold block mt-0.5">Active Jobs</span>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Button with exact design spacing */}
            <button className="w-full bg-[#161619] hover:bg-zinc-800/80 text-zinc-300 hover:text-white font-medium py-3 px-4 rounded-xl border border-zinc-800 transition-all cursor-pointer text-sm tracking-wide">
              View All Companies
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecentApplication;