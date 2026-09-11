"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import footerBg from "@/public/footer-rain.png";
import logo from "@/public/logocapper.png";

const stage: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const NAV = [
  {
    heading: "Explore",
    links: [
      { label: "Music", href: "#music" },
      { label: "Shows", href: "#shows" },
      { label: "Story", href: "#about" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Booking", href: "#contact" },
      { label: "Press Kit", href: "#press" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

// Real hrefs pulled in from the LilRomePraba footer pattern, plus Facebook added
const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/witecapper",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@witecapper",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M14 3v10.7a3.3 3.3 0 1 1-3.3-3.3c.3 0 .6 0 .9.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 3c.3 2.2 2 3.9 4.2 4.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@witecapper",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/witecapper",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10.2c3.2-.9 6.8-.6 9.5 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M7.6 13.1c2.7-.7 5.6-.5 7.8.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M8.2 15.8c2.1-.5 4.4-.3 6.1.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/witecapper",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M13.6 21v-6.6h2.2l.3-2.6h-2.5V10c0-.75.2-1.3 1.3-1.3h1.4V6.3c-.25-.03-1.1-.1-2.1-.1-2.1 0-3.5 1.28-3.5 3.6v2H8.5v2.6h2.2V21h2.9Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden font-[var(--font-sans)]">
      {/* ---------- Background photo ---------- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={footerBg}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-top"
          priority={false}
        />
      </div>

      {/* Legibility scrim: strongest low, easing off toward the top so the photo still reads */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07080A] via-[#07080A]/92 to-[#07080A]/55" />
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" />

      {/* Gold bloom, echoes Hero/About */}
      <div className="pointer-events-none absolute right-[8%] top-[10%] hidden h-[380px] w-[380px] rounded-full bg-[#D4AF37]/[0.10] blur-[130px] lg:block" />

      <motion.div
        variants={stage}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 pb-10 pt-24 sm:px-8 lg:px-16 lg:pt-32"
      >
        {/* ---------- Top: logo + tagline / nav / booking ---------- */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-8">
          {/* Logo + blurb */}
          <motion.div variants={rise}>
            <div className="relative -ml-3 h-[92px] w-[300px] sm:h-[108px] sm:w-[360px] lg:h-[126px] lg:w-[420px]">
              <Image
                src={logo}
                alt="WiteCapper"
                fill
                className="object-contain object-left drop-shadow-[0_0_28px_rgba(120,180,255,0.18)]"
              />
            </div>
            <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-[#B4C2D4]">
              Rare, unfiltered live rap out of Colombo. No scripts, no soft edges — just the bars and the room.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/60 backdrop-blur-xl transition-colors duration-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {NAV.map((col) => (
            <motion.div key={col.heading} variants={rise}>
              <span className="text-[13px] font-semibold tracking-[0.25em] text-[#D4AF37]/90">
                {col.heading}
              </span>
              <ul className="mt-6 space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[17px] text-white/75 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Booking CTA */}
          <motion.div variants={rise}>
            <span className="text-[13px] font-semibold tracking-[0.25em] text-[#D4AF37]/90">
              For Shows
            </span>
            <p className="mt-6 text-[17px] leading-relaxed text-[#B4C2D4]">
              Booking a set, a feature, or a session? Reach out directly.
            </p>
            <a
              href="mailto:booking@witecapper.lk"
              className="mt-5 inline-block text-[17px] font-medium text-white underline decoration-[#D4AF37]/50 decoration-1 underline-offset-4 transition-colors duration-300 hover:decoration-[#D4AF37]"
            >
              booking@witecapper.lk
            </a>
            <a
              href="#contact"
              className="group relative mt-7 block w-fit overflow-hidden rounded-full border border-[#D4AF37]/70 px-7 py-3 text-[13px] font-semibold tracking-[0.14em] text-[#D4AF37] transition-colors duration-300 hover:text-[#07080A]"
            >
              <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              BOOK ME
            </a>
          </motion.div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <motion.div
          variants={rise}
          className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center"
        >
          <p className="newsreader-italic text-[15px] text-white/45">
            © {new Date().getFullYear()} WiteCapper. All rights reserved.
          </p>
          <div className="flex gap-7 text-[14px] text-white/45">
            <a href="/privacy" className="transition-colors duration-300 hover:text-white/70">
              Privacy
            </a>
            <a href="/terms" className="transition-colors duration-300 hover:text-white/70">
              Terms
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}