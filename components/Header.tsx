'use client'
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

export default function Header() {
  const [bgChange,setBgChange] = useState(false)
  useEffect(()=>{
   function handleBgchange(){
    if(window.scrollY >= 90 ) setBgChange(true)
    else setBgChange(false)
   }
   window.addEventListener("scroll",handleBgchange)
  })
  return (
    <header
      className={`fixed top-0 left-0 w-full h-24 ${bgChange?'bg-bg-nav-2':'bg-bg-nav-1'} p-1.5 z-30 transition-all duration-300`}
    >
      <Navbar />
      <MobileNav />
    </header>
  );
}
