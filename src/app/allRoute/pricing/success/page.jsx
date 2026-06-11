// import { stripe } from '@/lib/stripe'
// import { redirect } from 'next/navigation'
// import Link from 'next/link'

// export default async function Success({ searchParams }) {
//   const { session_id } = await searchParams

//   if (!session_id) {
//     throw new Error('Please provide a valid session_id (`cs_test_...`)')
//   }

//   const {
//     status,
//     customer_details: { email: customerEmail }
//   } = await stripe.checkout.sessions.retrieve(session_id, {
//     expand: ['line_items', 'payment_intent']
//   })

//   if (status === 'open') {
//     return redirect('/')
//   }

//   if (status === 'complete') {
//     return redirect('/')
//   }

//   return (
//     <section className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-[#0B0F19] text-gray-100">
//       <div className="max-w-md w-full space-y-8 bg-[#131B2E] p-8 rounded-2xl border border-emerald-500/20 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] text-center transform transition-all duration-300 hover:border-emerald-500/40">
        
//         {/* Success Icon Animated Wrapper */}
//         <div className="flex flex-col items-center justify-center">
//           <div className="rounded-full bg-emerald-500/10 p-4 border border-emerald-500/30 animate-pulse">
//             <svg 
//               className="h-12 w-12 text-emerald-400" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth="2" 
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
          
//           <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
//             Payment Successful!
//           </h2>
//           <p className="mt-2 text-sm text-gray-400">
//             Thank you for your subscription
//           </p>
//         </div>

//         {/* Info Box */}
//         <div className="rounded-xl bg-[#1E293B]/50 p-5 border border-gray-800 text-left space-y-3">
//           <p className="text-sm text-gray-300 leading-relaxed">
//             We appreciate your business! A confirmation email and invoice will be sent to{' '}
//             <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 break-all">
//               {customerEmail}
//             </span>.
//           </p>
//           <div className="h-px bg-gray-800 my-2" />
//           <p className="text-xs text-gray-400">
//             If you have any questions, please contact{' '}
//             <a 
//               href="mailto:support@yourdomain.com" 
//               className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4"
//             >
//               support@yourdomain.com
//             </a>
//           </p>
//         </div>

//         {/* Action Button */}
//         <div className="pt-2">
//           <Link
//             href="/allRoute/dashboard/recruiter"
//             className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0F19] focus:ring-emerald-500 transition-all duration-200 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] font-semibold"
//           >
//             Go to Dashboard
//           </Link>
//         </div>
        
//       </div>
//     </section>
//   )
// }


import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import Link from 'next/link';
// Gravity UI Icons for a high-quality production finish
import { CircleCheckFill, Envelope, ArrowLeft } from '@gravity-ui/icons';
import { createSubscription } from '@/lib/actions/subscriptions';

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams;

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)');

    const {
        status,
        customer_details: { email: customerEmail },
        metadata
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    });

    if (status === 'open') {
        return redirect('/');
    }

    if (status === 'complete') {
        const subsInfo = {
            email: customerEmail,
            planId: metadata.planId
        }
        // update the user table about the new plan
        const result = await createSubscription(subsInfo);
        console.log(result);

        return (
            <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 flex flex-col justify-center items-center p-6 select-none">
                {/* Decorative ambient glow blur background */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

                <section
                    id="success"
                    className="relative max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center overflow-hidden animate-in fade-in-50 slide-in-from-bottom-4 duration-500"
                >
                    {/* Animated Green Checkmark Badge Container */}
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20 shadow-[0_0_24px_rgba(16,185,129,0.1)]">
                        <CircleCheckFill className="w-8 h-8 text-emerald-500" />
                    </div>

                    {/* Core Status Message */}
                    <h1 className="text-2xl font-extrabold text-zinc-50 tracking-tight mb-2">
                        Payment Successful!
                    </h1>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        We appreciate your business! Your account features have been provisioned and your plan is now active.
                    </p>

                    {/* Receipt Info Box Card */}
                    <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4 text-left space-y-3.5 text-xs mb-8">
                        <div className="flex items-start gap-2.5">
                            <Envelope className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                            <div>
                                <span className="block font-semibold text-zinc-400 mb-0.5">Confirmation Email</span>
                                <span className="text-zinc-200 break-all">{customerEmail}</span>
                            </div>
                        </div>

                        <div className="border-t border-zinc-800/60 pt-3 flex flex-col gap-1 text-zinc-500">
                            <span>Have billing questions or need custom configuration support?</span>
                            <a
                                href="mailto:orders@example.com"
                                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center transition"
                            >
                                orders@example.com
                            </a>
                        </div>
                    </div>

                    {/* Interactive Navigation Calls to Action */}
                    <div className="space-y-3">
                        <Link
                            href="/allRoute/dashboard/recruiter"
                            className="block w-full text-center text-xs font-semibold px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-950/30 transition duration-200"
                        >
                            Go to Workspace Dashboard
                        </Link>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 py-1 transition"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Return to Homepage
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}