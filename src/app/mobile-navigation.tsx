"use client";

import Link from "next/link";
import { useRef } from "react";

export default function MobileNavigation() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <details ref={menuRef} className="relative md:hidden">
      <summary className="cursor-pointer list-none rounded-full border border-white/20 px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ad87]">
        Menu
      </summary>
      <nav aria-label="Mobile navigation" className="absolute right-0 top-12 flex w-48 flex-col gap-4 rounded-xl border border-white/15 bg-[#1c252e] p-5 text-sm shadow-2xl">
        <a href="#products" onClick={closeMenu} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8ad87]">Products</a>
        <Link href="/games" onClick={closeMenu}>Games</Link>
        <Link href="/desktop" onClick={closeMenu}>Desktop</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/journal" onClick={closeMenu}>Studio Notes</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <a href="#explore" onClick={closeMenu} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8ad87]">Explore Uprise</a>
      </nav>
    </details>
  );
}
