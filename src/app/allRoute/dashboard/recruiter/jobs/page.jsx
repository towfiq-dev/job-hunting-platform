// import { getCompanyJobs } from '@/lib/api/jobs';
// import React from 'react';

// const DashboardJobsPage = async() => {
//   const companyId = 'company_123'
//   const jobs = await getCompanyJobs(companyId)
//   console.log('Received', jobs);
  
//   return (
//     <div>

//     </div>
//   );
// };

// export default DashboardJobsPage;
import { getCompanyJobs } from '@/lib/api/jobs';
import React from 'react';
import { FaEye, FaPen, FaTrashAlt, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const DashboardJobsPage = async () => {
  const companyId = 'company_123';
  const jobs = await getCompanyJobs(companyId);

  // Fallback if jobs is empty or undefined
  const jobList = jobs || [];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 p-6 md:p-10">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Manage All Jobs
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          View, update, and manage your current job postings.
        </p>
      </div>

      {/* Main Table Container */}
      <div className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-800 bg-[#1F2937]/50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Job Title</th>
                <th className="px-6 py-4">Type / Category</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Salary</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-800/60">
              {jobList.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
                    No jobs found. Create a job to get started!
                  </td>
                </tr>
              ) : (
                jobList.map((job) => (
                  <tr 
                    key={job._id} 
                    className="hover:bg-[#1F2937]/30 transition-colors duration-200 group"
                  >
                    {/* Job Title */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-105 transition-transform">
                          <FaBriefcase className="text-base" />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm sm:text-base">
                            {job.jobTitle}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            Deadline: {new Date(job.deadline).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Type / Category */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="block text-sm font-medium text-gray-200 capitalize">
                        {job.jobType}
                      </span>
                      <span className="block text-xs text-gray-400 capitalize mt-0.5">
                        {job.jobCategory}
                      </span>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-sm text-gray-300">
                        <FaMapMarkerAlt className="text-gray-500 text-xs" />
                        <span>{job.isRemote ? 'Remote' : 'On-site'}</span>
                      </div>
                    </td>

                    {/* Salary */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-emerald-400">
                        {job.minSalary} - {job.maxSalary} {job.currency}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium tracking-wide border ${
                        job.status === 'active' 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          job.status === 'active' ? 'bg-emerald-400' : 'bg-amber-400'
                        }`} />
                        <span className="capitalize">{job.status}</span>
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        {/* View Button */}
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all" title="View Details">
                          <FaEye className="text-base" />
                        </button>
                        {/* Edit Button */}
                        <button className="p-2 text-gray-400 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-all" title="Edit Job">
                          <FaPen className="text-sm" />
                        </button>
                        {/* Delete Button */}
                        <button className="p-2 text-gray-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all" title="Delete Job">
                          <FaTrashAlt className="text-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardJobsPage;