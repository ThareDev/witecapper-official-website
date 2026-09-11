"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type Variants,
} from "framer-motion";
import { Jost } from "next/font/google";
import heroAtmosphere from "@/public/bg.png";
import heroPortrait from "@/public/herocapper.png";

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

/* ---------------------------- Motion choreography ---------------------------- */

const stage: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const frameReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05, clipPath: "inset(5% 5% 5% 5% round 28px)" },
  show: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0% round 28px)",
    transition: { duration: 1.35, ease: [0.16, 1, 0.3, 1], delay: 0.35 },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Subtle scroll parallax on the atmosphere layer (desktop) */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  /* Mouse-tilt on the glass frame — desktop only, premium high-end portfolio feel */
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 120, damping: 18 });
  const springY = useSpring(tiltY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const glareX = useTransform(springX, [-0.5, 0.5], ["20%", "80%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["20%", "80%"]);

  const handleFrameMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className={`${sans.variable} relative isolate min-h-screen w-full overflow-hidden bg-[#07080A] font-[var(--font-sans)]`}
    >
      {/* ================================================================== */}
      {/* MOBILE / TABLET (< lg): portrait image IS the hero background      */}
      {/* ================================================================== */}
      <div className="absolute inset-0 -z-20 lg:hidden">
        <Image
          src={heroPortrait}
          alt="WiteCapper performing live on stage"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ================================================================== */}
      {/* DESKTOP (lg+): busy glowing atmosphere background                  */}
      {/* ================================================================== */}
      <motion.div className="absolute inset-0 -z-20 hidden lg:block" style={{ y: bgY }}>
        <Image
          src={heroAtmosphere}
          alt=""
          fill
          priority
          className="scale-110 object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ---- Legibility scrims ---- */}
      {/* Mobile: strong bottom-up fade so overlaid text reads over the photo */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[70%] bg-gradient-to-t from-[#07080A] via-[#07080A]/75 to-transparent lg:hidden" />
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-[#07080A]/80 to-transparent lg:hidden" />

      {/* Desktop: one soft gradient behind the text column only — the rest
          of the photo stays bright and untouched. */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[#07080A]/90 via-[#07080A]/55 to-transparent lg:block" />
      <div className="absolute inset-x-0 top-0 -z-10 hidden h-28 bg-gradient-to-b from-[#07080A]/70 to-transparent lg:block" />

      {/* Warm gold bloom to tie the two images together (desktop) */}
      <div className="pointer-events-none absolute -z-10 right-[-8%] top-[10%] hidden h-[420px] w-[420px] rounded-full bg-[#D4AF37]/20 blur-[130px] md:h-[600px] md:w-[600px] lg:block" />

      {/* Fine grain for a filmic, non-flat finish */}
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.05]" />

      {/* ------------------------------------------------------------------ */}
      {/* Content                                                            */}
      {/* Mobile: single column, bottom-aligned overlay on the portrait.     */}
      {/* Desktop: original two-column layout (copy + glass-framed portrait) */}
      {/* pt clears a fixed Navbar (h-16 / lg:h-20) rendered above this      */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        variants={stage}
        initial="hidden"
        animate="show"
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end gap-14 px-6 pb-10 pt-28 sm:px-8 lg:grid lg:grid-cols-[1.3fr_1fr] lg:items-center lg:justify-normal lg:gap-10 lg:px-16 lg:pb-28 lg:pt-32"
      >
        {/* ---------- Copy (bottom-overlay on mobile, left column on desktop) ---------- */}
        <div className="lg:order-1">
          <motion.span
            variants={rise}
            className="mb-4 hidden h-[2px] w-10 bg-[#D4AF37] lg:mb-6 lg:inline-block"
          />

          <motion.h1
            variants={rise}
            className="newsreader-italic text-[9vw]! leading-[1.2]! tracking-wide text-white sm:text-[34px]! lg:text-[50px]! xl:text-[58px]!"
          >
            WiteCapper
            <br />
            Sri Lanka&apos;s Fearless
            <br />
            New Queen of Rap
          </motion.h1>

          <motion.p
            variants={rise}
            className="newsreader-italic mt-4 max-w-md text-[13px] text-[#94A3B8] sm:text-[15px] lg:mt-6 lg:text-base"
          >
            The art and soul of live performance — Sri Lanka&apos;s most
            fearless voice in rap, unfiltered on every stage she commands.
          </motion.p>

          <motion.div variants={rise} className="mt-6 flex flex-wrap items-center gap-3 lg:mt-10 lg:gap-4">
            <a
              href="#shows"
              className="group relative overflow-hidden rounded-full border border-[#D4AF37]/70 px-6 py-2.5 text-[11px] tracking-[0.12em] text-[#D4AF37] transition-colors duration-300 hover:text-[#07080A] sm:px-8 sm:py-3 sm:text-[13px]"
            >
              <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              TOUR DATES
            </a>
            <a
              href="#music"
              className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-2.5 text-[11px] tracking-[0.12em] text-white/85 backdrop-blur-xl transition-colors duration-300 hover:border-white/30 hover:text-white sm:px-8 sm:py-3 sm:text-[13px]"
            >
              WATCH LATEST SET
            </a>
          </motion.div>

          {/* Mobile-only meta row — location / status, matches the Figma footer line */}
          <motion.div
            variants={rise}
            className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] tracking-[0.15em] text-white/40 lg:hidden"
          >
            <span>COLOMBO, SRI LANKA</span>
            <span>SOUND ON</span>
          </motion.div>
        </div>

        {/* ---------- Desktop-only: interactive glass-framed portrait ---------- */}
        <motion.div
          variants={frameReveal}
          onMouseMove={handleFrameMove}
          onMouseLeave={resetTilt}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="glass-frame group relative mx-auto hidden aspect-[4/5] w-full max-w-none lg:order-2 lg:block"
        >
          <Image
            src={heroPortrait}
            alt="WiteCapper performing live on stage"
            fill
            priority
            placeholder="blur"
            sizes="44vw"
            className="rounded-[28px] object-cover object-[62%_18%]"
          />

          {/* Glass rim, inner gold glow, top sheen */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/15" />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_0_70px_rgba(212,175,55,0.14)]" />
          <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-t from-[#07080A] via-transparent to-white/[0.06]" />

          {/* Dynamic glare that tracks the cursor — reads as a real glass surface */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.16), transparent 45%)`,
            }}
          />

          {/* Floating glass chip — overlaps frame + background so blur is unmistakable */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-7 left-6 flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 backdrop-blur-2xl backdrop-saturate-150"
          >
          </motion.div>

          {/* Diagonal glass shard — decorative, straddles the image edge to visibly refract the background */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ delay: 1.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -left-10 top-10 hidden h-28 w-20 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 lg:block"
          />
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .glass-frame {
          box-shadow:
            0 30px 90px -20px rgba(0, 0, 0, 0.75),
            0 0 0 1px rgba(255, 255, 255, 0.04);
          transform-style: preserve-3d;
        }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}