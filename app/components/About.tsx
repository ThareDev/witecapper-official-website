"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Jost } from "next/font/google";
import aboutPortrait from "@/public/capper.jpeg";

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const stage: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const frameReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04, clipPath: "inset(4% 4% 4% 4% round 28px)" },
  show: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0% round 28px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const STATS = [
  { value: "50+", label: "LIVE SHOWS" },
  { value: "2M+", label: "STREAMS" },
  { value: "LK", label: "COLOMBO BASED" },
];

const TAGS = ["Melodic Rap", "Street Rap", "Live Sets", "Unfiltered"];

export default function About() {
  return (
    <section
      id="about"
      className={`${sans.variable} relative isolate overflow-hidden bg-[#07080A] py-24 font-[var(--font-sans)] lg:py-32`}
    >
      {/* Faded watermark, echoes the Hero's serif but tucked low-left this time */}
      <span
        className="newsreader-italic pointer-events-none absolute -left-4 bottom-0 select-none text-[18vw] leading-none text-white/[0.035]"
        aria-hidden
      >
        Story
      </span>

      {/* Gold bloom, mirrored to the opposite corner from the Hero's */}
      <div className="pointer-events-none absolute -left-[10%] bottom-[5%] hidden h-[420px] w-[420px] rounded-full bg-[#D4AF37]/[0.14] blur-[130px] lg:block" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <motion.div
        variants={stage}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1fr_1.25fr] lg:gap-14 lg:px-16"
      >
        {/* ---------- Portrait ---------- */}
        <motion.div variants={frameReveal} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="glass-frame relative aspect-[4/5] w-full overflow-hidden rounded-[28px]">
            <Image
              src={aboutPortrait}
              alt="White Capper backstage"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/15" />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_0_70px_rgba(212,175,55,0.14)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080A]/70 via-transparent to-transparent" />
          </div>

          {/* Corner accents, gold instead of the example's crimson */}
          <div className="pointer-events-none absolute -bottom-4 -left-4 -z-10 h-3/4 w-3/4 rounded-sm border border-[#D4AF37]/30" />
          <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 border-r border-t border-[#D4AF37]/50" />

          {/* Floating stat chip, glass style matching the Hero's "LIVE ON STAGE" chip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-5 bottom-8 hidden items-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 backdrop-blur-2xl backdrop-saturate-150 sm:flex"
          >
          </motion.div>
        </motion.div>

        {/* ---------- Copy ---------- */}
        <div>
          <motion.div variants={rise} className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.3em] text-[#D4AF37]">THE STORY</span>
          </motion.div>

          <motion.h2
            variants={rise}
            className="newsreader-italic text-[10vw]! leading-[1.15]! tracking-wide text-white sm:text-[38px]! lg:text-[52px]!"
          >
            Who Is <span className="text-[#D4AF37]">WiteCapper</span>
          </motion.h2>

          <motion.div variants={rise} className="mt-6 max-w-lg space-y-4 text-[15px] leading-relaxed text-[#94A3B8] lg:text-base">
            <p>
              Born and raised in Colombo, WiteCapper turned late-night writing sessions
              into a stage presence that&apos;s impossible to look away from — melodic
              hooks, street-level bars, and a delivery that hits harder live than on record.
            </p>
            <p>
              Every set is unscripted and every bar is personal. She&apos;s built her name
              show by show, refusing to soften the edges that make the sound hers.
            </p>
          </motion.div>

          {/* Stat row, hairline dividers instead of the example's plain tag row */}
          <motion.div variants={rise} className="mt-10 flex max-w-md divide-x divide-white/10 border-y border-white/10 py-5">
            {STATS.map((s) => (
              <div key={s.label} className="flex-1 px-4 text-center first:pl-0 last:pr-0">
                <div className="newsreader-italic text-2xl text-white">{s.value}</div>
                <div className="mt-1 text-[10px] tracking-[0.15em] text-white/40">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={rise} className="mt-8 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] tracking-[0.1em] text-white/50 transition-colors duration-300 hover:border-[#D4AF37]/40 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#music"
              className="group relative overflow-hidden rounded-full border border-[#D4AF37]/70 px-7 py-3 text-[12px] tracking-[0.12em] text-[#D4AF37] transition-colors duration-300 hover:text-[#07080A]"
            >
              <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              LISTEN NOW
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3 text-[12px] tracking-[0.12em] text-white/85 backdrop-blur-xl transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              BOOK ME
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}