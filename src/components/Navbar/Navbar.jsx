"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full justify-center pt-6">
  
      <nav className="flex h-22 w-[92%] max-w-7xl items-center justify-between rounded-full border border-neutral-300/50 bg-white/80 px-10 backdrop-blur-xl">

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border text-xl font-bold">
            TS
          </div>
          <span className="font-semibold tracking-wide">
            THUSHAR SHETTY
          </span>
        </div>

        <ul className="hidden gap-10 lg:flex">
          <li>
            <Link href="/" className="hover:text-neutral-600 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-neutral-600 transition-colors">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-neutral-600 transition-colors">Projects</Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-neutral-600 transition-colors">Skills</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-neutral-600 transition-colors">Contact</Link>
          </li>
        </ul>

        <button className="rounded-full bg-black px-7 py-3 text-white transition-all duration-300 hover:bg-lime-400 hover:text-black">
          Let's Talk →
        </button>
        
      </nav>
    </header>
  );
}
