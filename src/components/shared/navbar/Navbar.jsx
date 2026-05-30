"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Browse Jobs",
    href: "/allRoute/browseJobs",
  },
  {
    name: "Company",
    href: "/allRoute/company",
  },
  {
    name: "Pricing",
    href: "/allRoute/pricing",
  },
];

const  Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession()
  
  const user = session?.user
  
  const handleSignOut = async()=>{
    await authClient.signOut()
  }

  return (
    <header className="sticky top-0 z-50 w-full px-4 md:px-6 lg:px-8 py-4">
      <div className="mx-auto max-w-7xl">
        <nav
          className="
            flex items-center justify-between
            rounded-2xl
            border border-white/10
            bg-black/40
            backdrop-blur-xl
            px-4 sm:px-6
            py-3
            shadow-[0_8px_30px_rgb(0,0,0,0.25)]
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
          >
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-fuchsia-500
                text-white
                font-bold
              "
            >
              PH
            </div>

            <div>
              <h2 className="text-white font-bold text-lg leading-none">
                Programming
              </h2>
              <p className="text-gray-400 text-sm">Hero</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300
                  text-sm
                  font-medium
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action */}
          <div className="hidden lg:flex items-center gap-4">
            {
              user? 
              <div className="flex items-center gap-4">
              <Image src={user?.image} alt="UserImg" width={200} height={200} className="w-13 h-13 rounded-full"/>
              <Link
              href="/auth/signin"
              className="
                bg-red-500
                py-2
                px-3
                rounded-xl
                hover:text-violet-300
                font-medium
                transition
              "
              onClick={handleSignOut}
            >
              Sign Out
            </Link>
              </div>
              :
              <div>
              <Link
              href="/auth/signin"
              className="
                text-violet-400
                hover:text-violet-300
                font-medium
                transition
              "
            >
              Sign In
            </Link>
              </div>
            }
            <Button
              radius="md"
              size="lg"
              className="
                bg-white
                text-black
                font-semibold
                px-6
              "
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              text-white
              p-2
              rounded-lg
              hover:bg-white/10
              transition
            "
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${
              isOpen
                ? "max-h-[500px] opacity-100 mt-3"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border border-white/10
              bg-black/50
              backdrop-blur-xl
              p-5
            "
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-gray-300
                    hover:text-white
                    transition
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {
              user? 
              <div className="flex items-center justify-between">
              <Image src={user?.image} alt="UserImg" width={200} height={200} className="w-13 h-13 rounded-full"/>
              <Link
              href="/auth/signin"
              className="
                bg-red-500
                py-2
                px-3
                rounded-xl
                hover:text-violet-300
                font-medium
                transition
              "
              onClick={handleSignOut}
            >
              Sign Out
            </Link>
              </div>
              :
              <div>
              <Link
              href="/auth/signin"
              className="
                text-violet-400
                hover:text-violet-300
                font-medium
                transition
              "
            >
              Sign In
            </Link>
              </div>
            }

              <Button
                size="lg"
                radius="md"
                className="
                  w-full
                  bg-white
                  text-black
                  font-semibold
                "
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;