'use client'
import DashboardState from '@/components/allRoute/dashboard/dashboardState/DashboardState';
import RecentApplication from '@/components/allRoute/dashboard/recentApplication/RecentApplication';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const DashboardRecruiterPage = () => {

  const {data: session, isPending} = useSession()
  const user = session?.user

  if (isPending) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-100 bg-[#0B0F19]">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Welcome back, {user?.name || "Recruiter"} 👋
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Here is what's happening with your job listings today.
        </p>
      </div>

      {/* Grid Container for Separate Cards */}
      <DashboardState/>

      {/* Recent Application */}
      <RecentApplication/>
    </div>
  );
};

export default DashboardRecruiterPage;