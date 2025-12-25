'use client';
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Language = () => {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 p-2 rounded-lg  border-gray-300 "
    >
      <span>{lang === "en" ? "English" : "العربية"}</span>
      <IoIosArrowDown className="text-xl" />
    </button>
  );
};

export default Language;