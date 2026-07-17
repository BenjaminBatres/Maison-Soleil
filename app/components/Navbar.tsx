'use client'
import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Menu from "../assets/images/icon-menu.svg";
import Image from "next/image";
import Sidebar from "./Sidebar";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <nav className="lg:hidden flex justify-between items-center p-4 border-b border-Neutral-400">
      <Image src={Logo} alt="logo" loading="eager" />
      <button onClick={() => setIsOpen(!isOpen)} className="h-10 w-10 border border-Neutral-400 flex justify-center items-center rounded-sm cursor-pointer">
        <Image src={Menu} alt="menu" loading="eager" className="w-6 h-6" />
      </button>
    </nav>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
}
