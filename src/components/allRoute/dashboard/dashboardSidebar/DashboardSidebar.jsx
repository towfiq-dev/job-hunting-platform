// import { getUserSession } from "@/lib/core/session";
// import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
// import { Button, Drawer } from "@heroui/react";
// import { Bookmark, Briefcase, Building, CreditCard, FileText, Users } from "lucide-react";
// import Link from "next/link";

// const DashboardSidebar = async() => {

//   const user = await getUserSession();

//   const seekerNavLinks = [
//         { icon: House, href: "/allRoute/dashboard/seeker", label: "Dashboard" },
//         { icon: Magnifier, href: "/allRoute/dashboard/seeker/jobs", label: "Jobs" },
//         { icon: Bookmark, href: "/allRoute/dashboard/seeker/saved-jobs", label: "Saved Jobs" },
//         { icon: FileText, href: "/allRoute/dashboard/seeker/applications", label: "Applications" },
//         { icon: CreditCard, href: "/allRoute/dashboard/seeker/billing", label: "Billing" },
//         { icon: Gear, href: "/allRoute/settings", label: "Settings" },
//     ];

//     const adminNavLinks = [
//         { icon: House, href: "/allRoute/dashboard/admin", label: "Dashboard" },
//         { icon: Users, href: "/allRoute/dashboard/admin/users", label: "Users" },
//         { icon: Building, href: "/allRoute/dashboard/admin/companies", label: "Companies" },
//         { icon: Briefcase, href: "/allRoute/dashboard/admin/jobs", label: "Jobs" },
//         { icon: CreditCard, href: "/allRoute/dashboard/admin/payments", label: "Payments" },
//         { icon: Gear, href: "/allRoute/dashboard/admin/settings", label: "Settings" },
//     ];


//   const recruiterNavLinks = [
//     { icon: House, href: '/allRoute/dashboard/recruiter', label: "Home" },
//     { icon: Magnifier, href: '/allRoute/dashboard/recruiter/jobs', label: "Recruiter" },
//     { icon: Bell, href: '/allRoute/dashboard/recruiter/jobs/new', label: "Create A Jobs" },
//     { icon: Bell, href: '/allRoute/dashboard/recruiter/company', label: "Company Profile" },
//     { icon: Envelope, href: '/allRoute/dashboard/message', label: "Messages" },
//     { icon: Person, href: '/allRoute/dashboard/profile', label: "Profile" },
//     { icon: Gear, href: '/allRoute/dashboard/settings', label: "Settings" },
//   ];

//     const navLinksMap = {
//         seeker: seekerNavLinks,
//         recruiter: recruiterNavLinks,
//         admin: adminNavLinks
//     }

//     const navItems = navLinksMap[user?.role || 'seeker'];

//       const navContent = <nav className="flex flex-col gap-1">
//         {navItems.map((item) => (
//             <Link
//                 key={item.label}
//                 className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
//                 href={item.href}
//             >
//                 <item.icon className="size-5 text-muted" />
//                 {item.label}
//             </Link>
//         ))}
//     </nav>

//   return (
//     <>
//       <aside className="hidden w-50 shrink-0 border-r border-default p-4 lg:block">
//         {navContent}
//       </aside>
//       <Drawer>
//         <Button className='lg:hidden' variant="secondary">
//           <Bars />
//           Menu
//         </Button>
//         <Drawer.Backdrop>
//           <Drawer.Content placement="left">
//             <Drawer.Dialog>
//               <Drawer.CloseTrigger />
//               <Drawer.Header>
//                 <Drawer.Heading>Navigation</Drawer.Heading>
//               </Drawer.Header>
//               <Drawer.Body>
//                 {navContent}
//               </Drawer.Body>
//             </Drawer.Dialog>
//           </Drawer.Content>
//         </Drawer.Backdrop>
//       </Drawer>
//     </>
//   );
// }

// export default DashboardSidebar;

import { getUserSession } from "@/lib/core/session";
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Bookmark, Briefcase, Building, CreditCard, FileText, Users } from "lucide-react";
import Link from "next/link";

const DashboardSidebar = async () => {
  // ১. সেশন থেকে ইউজার ডেটা আনা হচ্ছে
  const user = await getUserSession();
  
  // 🛠️ আপনার টার্মিনালে (VS Code Terminal) লক্ষ্য করুন কী প্রিন্ট হয়।
  // এখানে দেখতে পাবেন role ফিল্ডটি আদেও আসছে কিনা, নাকি undefined দেখাচ্ছে।
  console.log("--- DEBUGGING USER SESSION ---");
  console.log("User object:", user);
  console.log("------------------------------");

  const seekerNavLinks = [
    { icon: House, href: "/allRoute/dashboard/seeker", label: "Dashboard" },
    { icon: Magnifier, href: "/allRoute/dashboard/seeker/jobs", label: "Jobs" },
    { icon: Bookmark, href: "/allRoute/dashboard/seeker/saved-jobs", label: "Saved Jobs" },
    { icon: FileText, href: "/allRoute/dashboard/seeker/applications", label: "Applications" },
    { icon: CreditCard, href: "/allRoute/dashboard/seeker/billing", label: "Billing" },
    { icon: Gear, href: "/allRoute/settings", label: "Settings" },
  ];

  const adminNavLinks = [
    { icon: House, href: "/allRoute/dashboard/admin", label: "Dashboard" },
    { icon: Users, href: "/allRoute/dashboard/admin/users", label: "Users" },
    { icon: Building, href: "/allRoute/dashboard/admin/companies", label: "Companies" },
    { icon: Briefcase, href: "/allRoute/dashboard/admin/jobs", label: "Jobs" },
    { icon: CreditCard, href: "/allRoute/dashboard/admin/payments", label: "Payments" },
    { icon: Gear, href: "/allRoute/dashboard/admin/settings", label: "Settings" },
  ];

  const recruiterNavLinks = [
    { icon: House, href: '/allRoute/dashboard/recruiter', label: "Home" },
    { icon: Magnifier, href: '/allRoute/dashboard/recruiter/jobs', label: "Recruiter" },
    { icon: Bell, href: '/allRoute/dashboard/recruiter/jobs/new', label: "Create A Jobs" },
    { icon: Bell, href: '/allRoute/dashboard/recruiter/company', label: "Company Profile" },
    { icon: Envelope, href: '/allRoute/dashboard/message', label: "Messages" },
    { icon: Person, href: '/allRoute/dashboard/profile', label: "Profile" },
    { icon: Gear, href: '/allRoute/dashboard/settings', label: "Settings" },
  ];

  const navLinksMap = {
    seeker: seekerNavLinks,
    recruiter: recruiterNavLinks,
    admin: adminNavLinks
  };

  // ২. রোল বের করা হচ্ছে। যদি সেশনে 'role' কোনো কারণে না থাকে, তবে সরাসরি ডিফল্ট 'seeker' সেট হবে।
  // কাঁচা ডাটা টাইপ বা ক্যাপিটালাইজেশন এড়াতে .toLowerCase() ও .trim() করা হয়েছে।
  const rawRole = user?.role || user?.additionalFields?.role; 
  const userRole = rawRole ? String(rawRole).toLowerCase().trim() : 'seeker';

  // ৩. যদি রোল ম্যাপে না মিলে, তবে ডিফল্ট হিসেবে seeker এর লিংকগুলোই দেখাবে, স্ক্রিন খালি থাকবে না।
  const navItems = navLinksMap[userRole] || navLinksMap['seeker']; 

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          href={item.href}
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-50 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
      </aside>
      <Drawer>
        <Button className='lg:hidden' variant="secondary">
          <Bars />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}

export default DashboardSidebar;