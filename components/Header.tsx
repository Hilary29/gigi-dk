"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { US } from "country-flag-icons/react/1x1";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 md:px-8 flex justify-between items-center bg-white">
      {/* Logo and Name */}
      <div className="flex items-center gap-2 h-20">
        <Image
          src="/images/gigidknails.png"
          alt="Logo"
          width={183}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-20"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-[#1E1E1E]" />
        ) : (
          <Menu className="h-6 w-6 text-[#1E1E1E]" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-[#1E1E1E] font-medium text-base">
          Home
        </Link>
        <div className="flex items-center">
          <p className="text-[#1E1E1E] font-medium text-base">Services</p>
          <ChevronDown className="h-[18px] w-[18px] ml-1 text-[#1E1E1E]" />
        </div>
        <Link href="/about" className="text-[#1E1E1E] font-medium text-base">
          About
        </Link>
        <Link href="/blog" className="text-[#1E1E1E] font-medium text-base">
          Blog
        </Link>
        <Link href="/faq" className="text-[#1E1E1E] font-medium text-base">
          FAQ
        </Link>
        <Link href="/contact" className="text-[#1E1E1E] font-medium text-base">
          Contact
        </Link>
      </nav>

      {/* Right Side Actions */}
      <div className="hidden md:flex items-center gap-[18px]">
        <Link href="/login" className="text-[#1E1E1E] font-medium text-base">
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-[#7A0002] text-white font-medium text-base px-4 py-[10px] rounded-md"
        >
          Sign up
        </Link>
        <button
          className="flex items-center gap-1 border border-none rounded-md px-[14px] py-[10px] shadow-inner  "
        >
          <span className="text-[#1E1E1E] font-medium text-base">EN</span>
          <US title="United States" className="h-3 w-4" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-10 md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <Link
              href="/"
              className="text-[#1E1E1E] font-medium text-xl"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-[#1E1E1E] font-medium text-xl"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-[#1E1E1E] font-medium text-xl"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-[#1E1E1E] font-medium text-xl"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-[#1E1E1E] font-medium text-xl"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-[#1E1E1E] font-medium text-xl"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col items-center gap-4 mt-4">
              <Link
                href="/login"
                className="text-[#1E1E1E] font-medium text-xl"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-[#7A0002] text-white font-medium text-base px-6 py-3 rounded-md"
                onClick={toggleMenu}
              >
                Sign up
              </Link>
              <div className="flex items-center gap-1 border border-[#C3C3C3] rounded-md px-4 py-2 mt-2">
                <Globe className="h-6 w-6 text-[#1E1E1E]" />
                <span className="text-[#1E1E1E] font-medium text-base">EN</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
