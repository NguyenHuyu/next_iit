import React from "react";
import Image from "../Image";
import Link from "next/link";
import NavigationMenuDemo from "../Navbar/Navbar";

export default function Header() {
  const handleLanguageChange = (e) => {};

  return (
    <main>
      <div className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700  w-full ">
        <div className="headerContainer mx-auto  flex justify-between items-center  max-w-4xl p-1">
          <div className="flex items-center gap-2">
            <Link href="/" legacyBehavior>
              <a>
                <Image image="logosiu.png" className="w-20" />
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a>
                <Image image="logoiit.png" className="w-24" />
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-10">
            <div className="flex items-center justify-between p-[2px] md:p-2 border border-[#e3ad51] rounded-md">
              <select className="bg-transparent focus:outline-none text-[8px] md:text-[12px] ">
                <option value="en" className="bg-[#e3ad51]">
                  English
                </option>
                <option value="vi" className="bg-[#676258]">
                  Tiếng Việt
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-300">
        <NavigationMenuDemo />
      </div>
    </main>
  );
}
