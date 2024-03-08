'use client'
import { Home2 } from "@/components/Home";
import { Footer } from "@/components/Home/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:text-white/90 text-white/85 ">
      <Navbar/>
      <Home2 />
    
     
    </main>
  );
}
