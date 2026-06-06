"use client";
import { useState } from "react";
import { Briefcase } from "@gravity-ui/icons";
import DashboardForm from "@/components/allRoute/dashboard/dashboardForm/DashboardForm";
// import {
//   Briefcase,
//   Building2,
//   MapPin,
//   Calendar,
//   DollarSign,
//   CheckCircle2,
// } from "lucide-react";
// import { toast } from "react-toastify";

const NewJobsPage = ({company}) => {
  // const handleSubmit = async(e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());

  //   //console.log("Form Data:", data);
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/jobs`,{
  //     method: "POST",
  //     headers:{
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   const jobPost = await res.json()
  //   if (jobPost) {
  //     toast.success('Your post added successfully!')
  //     e.target.reset()
  //   } else {
  //     toast.error('Something went wrong. Please try again.')
  //   }
  // };

  // return (
  //   <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
  //     <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[180px]" />
  //     <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[180px]" />

  //     <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 lg:px-8">
  //       {/* HEADER */}
  //       <div className="mb-12 text-center">
  //         <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
  //           Hiring Dashboard
  //         </span>

  //         <h1 className="mt-6 text-5xl font-black md:text-6xl">
  //           Post a New Position
  //         </h1>

  //         <p className="mx-auto mt-5 max-w-2xl text-gray-400">
  //           Create a world-class job listing and attract top talent.
  //         </p>
  //       </div>

  //       <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
          
  //         {/* COMPANY */}
  //         <div className="mb-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
  //           <Building2 size={18} className="text-blue-400" />
  //           <span className="text-gray-300">
  //             Posting as:
  //             <span className="ml-2 font-semibold text-white">
  //               Acme Corporation
  //             </span>
  //           </span>
  //         </div>

  //         {/* FORM START */}
  //         <form onSubmit={handleSubmit}>
            
  //           <SectionTitle title="Basic Information" />

  //           <div className="grid gap-6 md:grid-cols-2">

  //             <Input
  //               label="Job Title"
  //               name="jobTitle"
  //               id="jobTitle"
  //               icon={<Briefcase size={18} />}
  //               placeholder="Senior Frontend Engineer"
  //               required
  //             />

  //             <SelectInput
  //               label="Job Category"
  //               name="jobCategory"
  //               id="jobCategory"
  //               required
  //               options={["Development", "Design", "Marketing", "Business"]}
  //             />

  //             <SelectInput
  //               label="Job Type"
  //               name="jobType"
  //               id="jobType"
  //               required
  //               options={["Full Time", "Part Time", "Contract", "Remote"]}
  //             />

  //             <Input
  //               label="Salary Range"
  //               name="salary"
  //               id="salary"
  //               icon={<DollarSign size={18} />}
  //               placeholder="$80,000 - $120,000"
  //               required
  //             />

  //             <Input
  //               label="Location"
  //               name="location"
  //               id="location"
  //               icon={<MapPin size={18} />}
  //               placeholder="Austin, Texas"
  //               required
  //             />

  //             <Input
  //               label="Application Deadline"
  //               name="deadline"
  //               id="deadline"
  //               type="date"
  //               icon={<Calendar size={18} />}
  //               required
  //             />
  //           </div>

  //           <SectionTitle title="Job Description" />

  //           <TextArea
  //             label="Responsibilities"
  //             name="responsibilities"
  //             id="responsibilities"
  //             required
  //             placeholder="Describe responsibilities..."
  //           />

  //           <div className="mt-6">
  //             <TextArea
  //               label="Requirements"
  //               name="requirements"
  //               id="requirements"
  //               required
  //               placeholder="Describe requirements..."
  //             />
  //           </div>

  //           <div className="mt-6">
  //             <TextArea
  //               label="Benefits"
  //               name="benefits"
  //               id="benefits"
  //               required
  //               placeholder="Health insurance, remote stipend..."
  //             />
  //           </div>

  //           {/* FOOTER */}
  //           <div className="mt-12 flex justify-end gap-4 border-t border-white/10 pt-8">

  //             <button
  //               type="button"
  //               className="rounded-2xl border border-white/10 px-8 py-4 text-gray-300 hover:bg-white/5"
  //             >
  //               Cancel
  //             </button>

  //             <button
  //               type="submit"
  //               className="rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-8 py-4 font-semibold text-white"
  //             >
  //               <span className="flex items-center gap-2">
  //                 <CheckCircle2 size={18} />
  //                 Publish Job
  //               </span>
  //             </button>
  //           </div>

  //         </form>
  //         {/* FORM END */}

  //       </div>
  //     </div>
  //   </section>
  // );
  // Mock configuration for recruiter's authenticated state
  // const [mockCompany] = useState({
  //   name: "Acme Corp (Auto-filled)",
  //   id: "company_123",
  //   isApproved: true,
  // });

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[#121214] border border-zinc-900 rounded-xl p-8 shadow-2xl">

        {/* Form Header block */}
        <div className="border-b border-zinc-800 pb-6 mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">Post a New Job</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Fill out the details below to publish your open position.
          </p>

          {/* Company verification status panel */}
          <div className="mt-4 inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-400">
            <Briefcase size={14} className="text-zinc-500" />
            Posting as: <span className="font-semibold text-zinc-300">{mockCompany.name}</span>
            <span className="text-emerald-500 font-medium bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/50">Approved</span>
          </div>
        </div>

        {/* Hero UI Main Form Handler */}
        <DashboardForm 
        //mockCompany={mockCompany} 
        company={company}/>
      </div>
    </div>
  );
};

// /* ---------- Components ---------- */

// function SectionTitle({ title }) {
//   return (
//     <div className="mb-6 mt-10">
//       <h2 className="text-2xl font-bold">{title}</h2>
//       <div className="mt-2 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
//     </div>
//   );
// }

// function Input({ label, icon, placeholder, type = "text", name, id, required }) {
//   return (
//     <div>
//       <label htmlFor={id} className="mb-2 block text-sm text-gray-300">
//         {label}
//       </label>

//       <div className="relative">
//         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
//           {icon}
//         </div>

//         <input
//           id={id}
//           name={name}
//           type={type}
//           required={required}
//           placeholder={placeholder}
//           className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-4 text-white outline-none"
//         />
//       </div>
//     </div>
//   );
// }

// function SelectInput({ label, options, name, id, required }) {
//   return (
//     <div>
//       <label htmlFor={id} className="mb-2 block text-sm text-gray-300">
//         {label}
//       </label>

//       <select
//         id={id}
//         name={name}
//         required={required}
//         defaultValue=""
//         className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white"
//       >
//         <option value="" disabled>
//           Select an item
//         </option>

//         {options.map((item) => (
//           <option key={item} value={item} className="bg-[#0d1117]">
//             {item}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function TextArea({ label, placeholder, name, id, required }) {
//   return (
//     <div>
//       <label htmlFor={id} className="mb-2 block text-sm text-gray-300">
//         {label}
//       </label>

//       <textarea
//         id={id}
//         name={name}
//         required={required}
//         rows={6}
//         placeholder={placeholder}
//         className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white"
//       />
//     </div>
//   );
// }

export default NewJobsPage;