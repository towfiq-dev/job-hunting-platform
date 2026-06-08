// import { getJobById } from '@/lib/api/jobs';
// import JopApply from './JobApply';
// import { getUserSession } from '@/lib/core/session';
// import { ShieldExclamation } from '@gravity-ui/icons';
// import Link from 'next/link';
// import { redirect } from 'next/navigation';
// import React from 'react';
// import { getApplicationsByApplicant } from '@/lib/api/applications';

// const ApplyPage = async({params}) => {
//   const {id} = await params
//   const user = await getUserSession()

//   if (!user) {
//     redirect(`/auth/signin?redirect=/allRoute/browseJobs/${id}/apply`)
//   }

//   if (user.role !== 'jobSeeker') {
//         return (
//             <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-white p-6">
//                 <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
//                     <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <ShieldExclamation className="w-6 h-6" />
//                     </div>
//                     <h3 className="text-xl font-bold text-zinc-100 mb-2">Access Restricted</h3>
//                     <p className="text-zinc-400 text-sm leading-relaxed mb-6">
//                         Only job seekers can apply for positions. Please sign in with a seeker account to proceed.
//                     </p>
//                     <Link 
//                         href="/auth/signin" 
//                         className="inline-block w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition"
//                     >
//                         Switch Account
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const applications = await getApplicationsByApplicant(user.id)

//     const plan = {
//         name: 'Free',
//         maxApplicationsPerMonth: 3
//     }

//     const job = await getJobById(id)

//   return (
//     <div>
//     ApplyPage
//     <h2>You have applied so far: {applications.length} out of {plan.maxApplicationsPerMonth} this month</h2>
//     {
//         applications.length < plan.maxApplicationsPerMonth && (
//             <JopApply applicant={user} job={job}/>
//         )
//     }
//     </div>
//   );
// };

// export default ApplyPage;

import { getJobById } from '@/lib/api/jobs';
import JopApply from './JobApply';
import { getUserSession } from '@/lib/core/session';
import { ShieldExclamation } from '@gravity-ui/icons';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { getApplicationsByApplicant } from '@/lib/api/applications';

const ApplyPage = async({params}) => {
  const {id} = await params
  const user = await getUserSession()

  if (!user) {
    redirect(`/auth/signin?redirect=/allRoute/browseJobs/${id}/apply`)
  }

  if (user.role !== 'jobSeeker') {
        return (
            <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-white p-6">
                <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldExclamation className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Access Restricted</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Only job seekers can apply for positions. Please sign in with a seeker account to proceed.
                    </p>
                    <Link 
                        href="/auth/signin" 
                        className="inline-block w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition"
                    >
                        Switch Account
                    </Link>
                </div>
            </div>
        );
    }

    const applications = await getApplicationsByApplicant(user.id)

    const plan = {
        name: 'Free',
        maxApplicationsPerMonth: 3
    }

    const job = await getJobById(id)
    const isLimitExceeded = applications.length >= plan.maxApplicationsPerMonth;

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="border-b border-zinc-800 pb-6">
          <span className="text-xs font-semibold tracking-wider text-emerald-500 uppercase">
            Application Portal
          </span>
          <h1 className="text-3xl font-extrabold text-zinc-100 mt-1">
            Apply for {job?.jobTitle || "Position"}
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            at {job?.companyName || "Company"}
          </p>
        </div>

        {/* Tracker Progress Bar Card */}
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Monthly Usage</h3>
              <p className="text-lg font-semibold text-zinc-200 mt-0.5">
                {applications.length} of {plan.maxApplicationsPerMonth} jobs applied
              </p>
            </div>
            <span className="px-2.5 py-1 text-xs font-medium bg-zinc-800 border border-zinc-700 rounded-full text-zinc-300">
              {plan.name} Plan
            </span>
          </div>
          
          {/* Progress Bar Dynamic */}
          <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                isLimitExceeded ? 'bg-rose-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min((applications.length / plan.maxApplicationsPerMonth) * 100, 100)}%` }}
            />
          </div>
        </div>

        {/* Conditional View: Form or Warning */}
        {isLimitExceeded ? (
          <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center space-y-3">
            <div className="w-10 h-10 bg-rose-500/20 text-rose-400 rounded-full flex items-center justify-center mx-auto">
              <ShieldExclamation className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-rose-400">Monthly Application Limit Reached</h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
              You have used all {plan.maxApplicationsPerMonth} free applications for this month. Upgrade your plan to keep applying for premium positions.
            </p>
            <div className="pt-2">
              <Link 
                href="/allRoute/pricing" 
                className="inline-flex items-center justify-center px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-sm font-medium transition shadow-md shadow-rose-600/10"
              >
                Upgrade Plan
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-900">
            <JopApply applicant={user} job={job}/>
          </div>
        )}

      </div>
    </div>
  );
};

export default ApplyPage;