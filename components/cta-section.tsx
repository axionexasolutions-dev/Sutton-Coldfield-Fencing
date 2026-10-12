"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Phone, CheckCircle2 } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

export function CtaSection() {
  const shouldReduceMotion = useReducedMotion()

  const luxuryEase = [0.16, 1, 0.3, 1] as const

  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: luxuryEase },
    },
  }

  return (
    <section
      id="quote"
      aria-label="Final Call to Action"
      className="relative w-full pt-4 sm:pt-6 pb-14 sm:pb-18 bg-[#F4F3EC] text-[#1C2921] overflow-hidden"
    >
      {/* Subtle organic ambient highlights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B9ED63]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#163D2A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#B9ED63] ring-4 ring-[#B9ED63]/25" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#163D2A]">
              Start Your Project Today
            </span>
            <span className="h-px w-12 bg-[#163D2A]/25" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#163D2A] leading-[1.12] tracking-[-0.015em] mb-4 max-w-3xl">
            Ready to Transform Your Garden?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#68736A] font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            From bespoke fencing to complete garden transformations, let's bring
            your outdoor ideas to life.
          </p>

          {/* Action Buttons: Get a Free Quote + Call Us Today */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            {/* Primary Button: Get a Free Quote */}
            <Link
              href="#quote"
              className={cn(
                buttonVariants(),
                "group relative w-full sm:w-auto h-12 px-8 rounded-full bg-[#B9ED63] hover:bg-[#cbf487] text-[#163D2A] font-semibold text-base transition-all duration-300 shadow-[0_0_20px_rgba(185,237,99,0.25)] hover:shadow-[0_0_25px_rgba(185,237,99,0.4)] border border-[#B9ED63]/40 flex items-center justify-center gap-2.5 cursor-pointer"
              )}
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#163D2A]" />
            </Link>

            {/* Secondary Button: Call Us Today */}
            <a
              href="tel:+447587762236"
              className={cn(
                buttonVariants(),
                "group relative w-full sm:w-auto h-12 px-8 rounded-full bg-white hover:bg-[#E8F1E5] text-[#163D2A] font-semibold text-base transition-all duration-300 shadow-sm flex items-center justify-center gap-2.5 cursor-pointer border border-[#163D2A]/15 hover:border-[#163D2A]/30"
              )}
            >
              <Phone className="w-4 h-4 text-[#163D2A]" />
              <span>Call Us Today</span>
            </a>
          </div>

          {/* Fine Reassurance Strip */}
          <div className="pt-6 border-t border-[#163D2A]/12 w-full max-w-2xl flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs text-[#68736A]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#163D2A] shrink-0" />
              <span>Free, No-Obligation Quotations</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#163D2A] shrink-0" />
              <span>Transparent & Clear Pricing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#163D2A] shrink-0" />
              <span>Local Sutton Coldfield Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
