'use client';

import { useState } from "react";
import Navbar from "./component/Navbar";
import Signin from "./component/signin";
import Signup from "./component/signup";
import { FaPeopleGroup, FaEarthAfrica } from "react-icons/fa6";
import Slider from "./component/Slider";
import Slid2 from "./component/slid2";
import Slie3 from "./component/Slie3";
import Slide4 from "./component/Slide4";
import Slide5 from "./component/Slide5";
import Slide6 from "./component/Slide6";
import Slide7 from "./component/slide7";
import Footer from "./component/Footer";

export default function Home() {
  const [b1,setB1]=useState(false);
  const [b2,setB2]=useState(false);
  const [people, setPeople] = useState("1");
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const show1=()=>{ setB1(!b1); setB2(false); };
  const show2=()=>{ setB2(!b2); setB1(false); };

  const tourCards = Array(6).fill(0);

  return (
    <div className="bg-white">
      <div className="relative w-full h-screen bg-[url('/pic/julia.png')] bg-cover bg-center flex flex-col">

  {/* Navbar ثابت */}
  <div className="sticky top-0 z-50">
    <Navbar
      lang={lang}
      setLang={setLang}
      onLoginClick={() => setShowLogin(true)}
      onSignupClick={()=>setShowSignup(true)}
    />
  </div>
  {showLogin && <Signin lang={lang} setLang={setLang} onClose={() => {setShowLogin(false),setShowSignup(false)}} />}
        {showSignup && <Signup lang={lang} setLang={setLang} onClose={() => {setShowLogin(false),setShowSignup(false)}} />}
  {/* Overlay Buttons فوق الصورة */}
  <div className="flex-1 flex items-center justify-center text-white text-center px-4">
    <div className="relative w-full max-w-6xl">

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <button
          onClick={show1}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold transition
            ${b1 ? 'bg-white text-orange-400' : 'bg-white/30 text-black'}`}
        >
          <FaEarthAfrica /> Public Tours
        </button>
        <button
          onClick={show2}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold transition
            ${b2 ? 'bg-white text-orange-400' : 'bg-white/30 text-black'}`}
        >
          <FaPeopleGroup /> Private Tours
        </button>
      </div>

      {/* Cards Container */}
      <div className={`${b1 || b2 ? 'bg-white/30 backdrop-blur-md rounded-xl p-4 sm:p-6 w-full mt-64 sm:mt-72 transition-all relative z-10' : ''}`}>
  <div className="w-[80%] relative mx-auto">
    <div className={`flex flex-col sm:flex-row sm:flex-wrap gap-4 transition-opacity duration-300 ${b1 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      {/* كرّس الـ Cards */}
      {[...Array(5)].map((_, index) => (
        <div key={index} className="bg-white text-black flex flex-col items-center justify-center w-full sm:w-[255.5px] h-[88px] p-2 rounded-md">
          <FaPeopleGroup className="mb-2"/>
          <h2 className="text-center">Number of people</h2>
          <div>
            <label>Choose number</label>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="border-[0px] p-2"
            >
              <option value="1">1 شخص</option>
              <option value="2">2 أشخاص</option>
              <option value="3">3 أشخاص</option>
              <option value="4">4 أشخاص</option>
              <option value="5">5 أشخاص</option>
            </select>
          </div>
        </div>
      ))}
    </div>

    {/* نفس الشيء للـ b2 */}
    <div className={`flex flex-col sm:flex-row sm:flex-wrap gap-4 absolute top-0 left-0 w-full transition-opacity duration-300 ${b2 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="bg-white text-black flex flex-col items-center justify-center w-full sm:w-[255.5px] h-[88px] p-2 rounded-md">
          <FaPeopleGroup className="mb-2"/>
          <h2 className="text-center">Number of people</h2>
          <div>
            <label>Choose number</label>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="border-[0px] p-2"
            >
              <option value="1">1 شخص</option>
              <option value="2">2 أشخاص</option>
              <option value="3">3 أشخاص</option>
              <option value="4">4 أشخاص</option>
              <option value="5">5 أشخاص</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </div>
  </div>
</div>
      <Slider/>
      <Slid2 img="/pic/Group2.png"/>
      <Slie3/>
      <Slide4/>
      <Slide5/>
      <Slide6/>
      <Slide7/>
      <Footer/>
    </div>
  );
}
