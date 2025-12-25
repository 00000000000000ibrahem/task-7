'use client';
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

interface NavbarProps {
  lang: "en" | "ar";
  setLang: React.Dispatch<React.SetStateAction<"en" | "ar">>;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Navbar = ({ lang, setLang, onLoginClick, onSignupClick }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/30 w-full  top-0 left-0 z-50 shadow-md overflow-x-hidden">
  <div className="max-w-7xl w-full mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
    <div className="flex items-center flex-shrink-0">
      <img src="/pic/Layer.png" alt="Logo" className="h-10 sm:h-26" />
    </div>
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-2xl focus:outline-none">
        {menuOpen ? <HiX /> : <HiOutlineMenu />}
      </button>
    </div>
    {/* Links for large screens */}
    <div className="hidden md:flex items-center gap-4 sm:gap-6 flex-wrap">
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/tour">Tour Packages</Link>
      <Link href="/contact">Contact Us</Link>
      </div>
      <div className="hidden md:flex items-center gap-4 sm:gap-6 flex-wrap">
        <button
        onClick={() => setLang(lang === "en" ? "ar" : "en")}
        className="flex items-center px-3 py-1 rounded hover:bg-gray-200">
        {lang === "en" ? "العربية" : "English"}
        <IoIosArrowDown className="ml-1" />
      </button>
      <button
        onClick={onLoginClick}
        className="px-3 py-1 bg-white/1 text-white rounded-2xl hover:bg-orange-400">
        {lang === "en" ? "Login" : "تسجيل الدخول"}
      </button>
      <button
        onClick={onSignupClick}
        className="px-3 py-1 bg-white/1 text-white rounded-2xl hover:bg-orange-400">
        {lang === "en" ? "Sign Up" : "أنشاء حساب"}
      </button>
      </div>
    </div>


  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden w-full overflow-x-hidden bg-white shadow-md px-4 py-4 flex flex-col gap-4">
      <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
      <Link href="/tour" onClick={() => setMenuOpen(false)}>Tour Packages</Link>
      <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

      <button
        onClick={() => { setLang(lang === "en" ? "ar" : "en"); setMenuOpen(false); }}
        className="flex items-center px-3 py-1 rounded hover:bg-gray-200"
      >
        {lang === "en" ? "العربية" : "English"}
        <IoIosArrowDown className="ml-1" />
      </button>

      <button
        onClick={() => { onLoginClick(); setMenuOpen(false); }}
        className="px-3 py-1 bg-orange-400 text-white rounded hover:bg-orange-500"
      >
        {lang === "en" ? "Login" : "تسجيل الدخول"}
      </button>

      <button
        onClick={() => { onSignupClick(); setMenuOpen(false); }}
        className="px-3 py-1 bg-orange-400 text-white rounded hover:bg-orange-500"
      >
        {lang === "en" ? "Sign Up" : "أنشاء حساب"}
      </button>
    </div>
  )}
</nav>

  );
};

export default Navbar;
