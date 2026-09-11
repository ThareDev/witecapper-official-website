"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logocapper.png";

const LINKS = ["About", "Music", "Shows", "Blog", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#07080A]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:h-20 lg:px-16">
        {/* Logo */}
        <Link href="/" className="relative block shrink-0">
          <Image
            src={logo}
            alt="White Caper"
            priority
            className="h-12 w-auto sm:h-14 lg:h-16"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative text-[13px] tracking-[0.16em] transition-colors duration-300 ${
                i === 0 ? "text-white" : "text-[#94A3B8] hover:text-white"
              }`}
            >
              {link.toUpperCase()}
              {i === 0 && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-[#D4AF37] to-transparent" />
              )}
            </a>
          ))}
        </div>

        {/* Right side CTA */}
        <div className="hidden lg:flex">
          <a
            href="#shows"
            className="group relative overflow-hidden rounded-full border border-[#D4AF37]/70 px-6 py-2.5 text-[12px] tracking-[0.12em] text-[#D4AF37] transition-colors duration-300 hover:text-[#07080A]"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            GET TICKETS
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#07080A]/95 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          {LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-[13px] tracking-[0.16em] transition-colors ${
                i === 0 ? "text-white" : "text-[#94A3B8] hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.toUpperCase()}
            </a>
          ))}
          <a
            href="#shows"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full border border-[#D4AF37]/70 px-6 py-3 text-center text-[12px] tracking-[0.12em] text-[#D4AF37]"
          >
            GET TICKETS
          </a>
        </div>
      </div>
    </nav>
  );
}