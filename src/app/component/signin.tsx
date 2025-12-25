'use client';

import { IoMdClose } from "react-icons/io";
import Link from "../../../node_modules/next/link";

interface SigninProps {
  lang: "en" | "ar";
  setLang: React.Dispatch<React.SetStateAction<"en" | "ar">>;
  onClose: () => void;
}

const Signin = ({ lang, setLang, onClose }: SigninProps) => {
  const texts = {
    title: lang === "en" ? "Login" : "تسجيل الدخول",
    email: lang === "en" ? "Email Address" : "البريد الإلكتروني",
    password: lang === "en" ? "Password" : "كلمة المرور",
    placeholderEmail: lang === "en" ? "Enter your email" : "أدخل البريد الإلكتروني",
    placeholderPassword: lang === "en" ? "Enter your password" : "أدخل كلمة المرور",
    submit: lang === "en" ? "sign in" : "دخول",
    toggleLang: lang === "en" ? "العربية" : "English",
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl w-[450px] h-[650px] p-5 flex flex-col shadow-lg z-[1000]">
      <IoMdClose
        className="absolute top-4 right-4 text-neutral-800 text-xl cursor-pointer"
        onClick={onClose}/>
      <h1 className="text-3xl font-bold mb-4 text-neutral-900">{texts.title}</h1>
      <form className="flex flex-col gap-4 flex-1">
        <label className='text-neutral-600'>{texts.email}</label>
        <input
          type="email"
          placeholder={texts.placeholderEmail}
          className="w-full h-12 rounded-lg border border-zinc-400 px-2"/>
        <label className='text-neutral-600'>{texts.password}</label>
        <input
          type="password"
          placeholder={texts.placeholderPassword}
          className="w-full h-12 rounded-lg border border-zinc-400 px-2"/>
        <div className='h-[60%] flex flex-col gap-4 flex-1  items-center justify-center'>
        <button className="mt-4 w-full rounded-lg bg-orange-400 text-white py-2 rounded ">
          {texts.submit}
        </button>
        <p className='text-black'>or</p>
        <button className="mt-4 w-full  text-white py-2 rounded ">
          <p className='text-black h-[35px] rounded-lg border '>sign in with google</p>
        </button>
        <p>dont have account?<Link href="/signup" className='text-orange-400'>Sign UP</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
