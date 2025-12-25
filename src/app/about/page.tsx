
'use client';
import { useState } from "react";
import Signin from "../component/signin";
import Signup from "../component/signup";
import Slid2 from "../component/slid2";
import Slide8 from "../component/slide8";
import Slide7 from "../component/slide7";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Page = () => {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="relative w-full h-screen bg-[url('/pic/julia-solonina.png')] bg-cover bg-center flex flex-col">
  <div className="sticky top-0 z-50">
    <Navbar
      lang={lang}
      setLang={setLang}
      onLoginClick={() => setShowLogin(true)}
      onSignupClick={()=>setShowSignup(true)}/>
  </div>
        {showLogin && <Signin lang={lang} setLang={setLang} onClose={() => setShowLogin(false)} />}
        {showSignup && <Signup lang={lang} setLang={setLang} onClose={() => setShowSignup(false)} />}
        <div className="flex-1 flex items-center justify-center text-white text-center px-4">
        <div className="space-y-6 max-w-4xl text-white">
          <h1 className="font-serif font-semibold uppercase tracking-wide text-3xl sm:text-4xl lg:text-5xl">
            Our team cares about your full relax
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              View our Tour Packages
            </button>
          </div>
        </div>
      </div>
      </div>
      <Slid2 img="/pic/Rectanglen22.png" />
      <Slide8 />
      <Slide7 />
      <Footer/>
    </div>
  );
};

export default Page;
