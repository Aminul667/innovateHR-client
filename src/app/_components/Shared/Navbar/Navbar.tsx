"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogIn, MessageCircle } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md text-black">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center mr-4">
              <span className="text-xl font-bold">Logo</span>
            </Link>

            {/* Left side navigation items */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-5">
              <Link
                href="/contact"
                className=" px-3 py-2 rounded-md font-medium"
              >
                Contact
              </Link>
              <Link href="/about" className=" px-3 py-2 rounded-md font-medium">
                About
              </Link>

              {/* Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center text-base"
                  >
                    Navigation <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/services">Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/products">Products</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/blog">Blog</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center gap-5">
            <Button
              variant="ghost"
              className="w-8 h-8 rounded-full bg-colorButtonSecondary text-white"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>

            <Avatar className="h-8 w-8 rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <Button
              variant="outline"
              className="ml-3 bg-colorButtonSecondary text-white text-base"
            >
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/contact"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            href="/products"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            Products
          </Link>
          <Link
            href="/blog"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5 gap-6">
            <Avatar className="h-8 w-8 rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              className="w-6 h-6 bg-colorButtonSecondary ml-auto p-1 rounded-full"
            >
              <MessageCircle className="h-8 w-8" />
            </Button>
            <Button variant="outline" className="ml-3 bg-colorButtonSecondary">
              <LogIn className="mr-2 h-8 w-8" /> Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
