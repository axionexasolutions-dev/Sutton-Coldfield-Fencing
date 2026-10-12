"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowUpRight,
  ShieldCheck,
  Shield,
  FileCheck2,
  MapPin,
  Sparkles,
  Eye,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

const TRUST_HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Quality Craftsmanship",
    subtitle: "Built to endure",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    subtitle: "Total peace of mind",
  },
  {
    icon: FileCheck2,
    title: "Free Quotations",
    subtitle: "No obligation",
  },
]

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  // Easing curve with as const for strict Framer Motion typing
  const luxuryEase = [0.16, 1, 0.3, 1] as const

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: luxuryEase,
      },
    },
  }

  const panelVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        delay: shouldReduceMotion ? 0 : 0.55,
        ease: luxuryEase,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-[700px] lg:h-[750px] xl:h-[780px] overflow-hidden flex items-center pt-24 pb-16 lg:py-0"
    >
      {/* Background Image Container with Cinematic Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <Image
          src="/assets/hero/hero.png"
          alt="Luxury landscaped garden and modern residence in Sutton Coldfield"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[78%_center] md:object-[65%_center] lg:object-center"
        />

        {/* Harmonious light forest green ambient shadow - blends organically with lush garden photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#163D2A]/60 via-[#163D2A]/25 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#163D2A]/30 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#163D2A]/35 to-transparent z-10" />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Editorial Hero Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-7 max-w-2xl"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants} className="inline-block mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163D2A]/50 border border-[#B9ED63]/30 backdrop-blur-md text-[#B9ED63] text-xs font-semibold tracking-[0.18em] uppercase shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#B9ED63]" />
                <span>Fencing &amp; Garden Transformations</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-normal text-[#F4F3EC] leading-[1.08] tracking-[-0.015em] mb-5 sm:mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]"
            >
              <span>Transform Your Garden.</span>
              <br />
              <span className="text-[#F4F3EC]/95">Elevate Your Outdoors.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#F4F3EC] font-normal leading-relaxed max-w-xl mb-7 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]"
            >
              From expertly crafted fencing to complete garden transformations,
              we create outdoor spaces you’ll love coming home to.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-6 sm:mb-7"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <Link
                  href="#quote"
                  className={cn(
                    buttonVariants(),
                    "group relative h-12 px-7 rounded-full bg-[#B9ED63] hover:bg-[#cbf487] text-[#163D2A] font-semibold text-base shadow-[0_0_24px_rgba(185,237,99,0.3)] hover:shadow-[0_0_32px_rgba(185,237,99,0.45)] transition-all duration-200 border border-[#B9ED63]/40 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
                  )}
                >
                  <span>Get a Free Quote</span>
                  <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#163D2A]" />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <Link
                  href="#work"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-12 px-6 rounded-full bg-white/10 hover:bg-white/15 text-[#F4F3EC] hover:text-white border border-white/20 hover:border-white/35 backdrop-blur-md font-medium text-base transition-all duration-200 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
                  )}
                >
                  <Eye className="w-4 h-4 text-[#B9ED63]" />
                  <span>Explore Our Work</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Small Trust Indicator beneath CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#F4F3EC] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium"
            >
              <div className="w-5 h-5 rounded-full bg-[#B9ED63]/25 border border-[#B9ED63]/40 flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-3 h-3 text-[#B9ED63]" />
              </div>
              <span>Your local fencing &amp; garden specialists in Sutton Coldfield</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Glass Trust Highlights Panel */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              className="w-full max-w-md rounded-2xl bg-[#163D2A]/65 backdrop-blur-xl border border-white/15 p-5 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.45)] relative overflow-hidden"
            >
              {/* Subtle Ambient Glow inside Panel */}
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 rounded-full bg-[#B9ED63]/10 blur-2xl pointer-events-none" />

              {/* Three Trust Columns */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center relative z-10">
                {TRUST_HIGHLIGHTS.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className={`flex flex-col items-center justify-center px-1 sm:px-2 py-1 ${
                        index !== TRUST_HIGHLIGHTS.length - 1
                          ? "border-r border-white/10"
                          : ""
                      }`}
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#B9ED63] mb-2 sm:mb-2.5 shadow-inner">
                        <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="text-xs sm:text-[13px] font-semibold text-[#F4F3EC] leading-tight mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-[#F4F3EC]/70 font-light">
                        {item.subtitle}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Bottom Trust Guarantee Statement */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-center gap-2 relative z-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B9ED63] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B9ED63]" />
                </span>
                <p className="text-[11px] sm:text-xs text-[#F4F3EC]/80 font-normal">
                  Trusted local specialists serving Sutton Coldfield &amp; surrounding areas
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
