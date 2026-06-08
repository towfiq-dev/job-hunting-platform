import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id) {
    throw new Error('Please provide a valid session_id (`cs_test_...`)')
  }

  const {
    status,
    customer_details: { email: customerEmail }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-[#0B0F19] text-gray-100">
      <div className="max-w-md w-full space-y-8 bg-[#131B2E] p-8 rounded-2xl border border-emerald-500/20 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] text-center transform transition-all duration-300 hover:border-emerald-500/40">
        
        {/* Success Icon Animated Wrapper */}
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-emerald-500/10 p-4 border border-emerald-500/30 animate-pulse">
            <svg 
              className="h-12 w-12 text-emerald-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
            Payment Successful!
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Thank you for your subscription
          </p>
        </div>

        {/* Info Box */}
        <div className="rounded-xl bg-[#1E293B]/50 p-5 border border-gray-800 text-left space-y-3">
          <p className="text-sm text-gray-300 leading-relaxed">
            We appreciate your business! A confirmation email and invoice will be sent to{' '}
            <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 break-all">
              {customerEmail}
            </span>.
          </p>
          <div className="h-px bg-gray-800 my-2" />
          <p className="text-xs text-gray-400">
            If you have any questions, please contact{' '}
            <a 
              href="mailto:support@yourdomain.com" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4"
            >
              support@yourdomain.com
            </a>
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/allRoute/dashboard/recruiter"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0F19] focus:ring-emerald-500 transition-all duration-200 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] font-semibold"
          >
            Go to Dashboard
          </Link>
        </div>
        
      </div>
    </section>
  )
}