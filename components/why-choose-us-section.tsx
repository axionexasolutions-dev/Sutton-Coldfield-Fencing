"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  MessageSquareCheck,
  SlidersHorizontal,
  FileCheck2,
  CheckCircle2,
  MapPin,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

interface TrustPoint {
  id: string
  title: string
  description: string
  icon: React.ElementType
}

const TRUST_POINTS: TrustPoint[] = [
  {
    id: "quality",
    title: "Quality Craftsmanship",
    description:
      "Careful attention to detail and a professional finish across every project.",
    icon: ShieldCheck,
  },
  {
    id: "reliable",
    title: "Reliable Local Service",
    description:
      "Friendly, clear communication from your first enquiry through to completion.",
    icon: MessageSquareCheck,
  },
  {
    id: "tailored",
    title: "Tailored Outdoor Solutions",
    description:
      "Practical solutions shaped around your garden, property, and priorities.",
    icon: SlidersHorizontal,
  },
  {
    id: "quotations",
    title: "Free Quotations",
    description:
      "Discuss your ideas and request a quotation before deciding how to proceed.",
    icon: FileCheck2,
  },
]

const TRUST_STRIP_ITEMS = [
  "Quality Workmanship",
  "Personal Service",
  "Free Quotations",
  "Sutton Coldfield & Surrounding Areas",
]

export function WhyChooseUsSection() {
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

  const pointVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: shouldReduceMotion ? 0 : 0.15 + i * 0.1,
        ease: luxuryEase,
      },
    }),
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: luxuryEase },
    },
  }

  return (
    <section
      id="about"
      className="relative w-full pt-6 sm:pt-8 pb-16 sm:pb-20 bg-[#F4F3EC] text-[#1C2921] overflow-hidden"
    >
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#163D2A]/5 rounded-full blur-3xl pointer-events-none -mr-24" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#B9ED63]/10 rounded-full blur-3xl pointer-events-none -ml-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric Two-Column Story Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative & Trust Points */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header Content */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="max-w-2xl mb-8 sm:mb-10"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="h-2 w-2 rounded-full bg-[#B9ED63] ring-4 ring-[#B9ED63]/25" />
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#163D2A]">
                  The Difference Is In The Detail
                </span>
                <span className="h-px w-12 bg-[#163D2A]/25" />
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[50px] font-normal text-[#163D2A] leading-[1.12] tracking-[-0.015em] mb-5">
                Good Gardens Begin
                <br />
                <span className="text-[#163D2A]/90">With Good People.</span>
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#68736A] font-normal leading-relaxed max-w-xl">
                From the first conversation to the final detail, we believe every
                outdoor project deserves care, clear communication, and quality workmanship.
              </p>
            </motion.div>

            {/* Four Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
              {TRUST_POINTS.map((point, index) => {
                const Icon = point.icon
                return (
                  <motion.div
                    key={point.id}
                    custom={index}
                    variants={pointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="group relative p-5 rounded-2xl bg-white/70 hover:bg-white border border-[#DDE2D7] hover:border-[#163D2A]/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-start"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#163D2A]/5 border border-[#163D2A]/10 flex items-center justify-center text-[#163D2A] group-hover:bg-[#163D2A] group-hover:text-[#B9ED63] transition-colors duration-300 shrink-0">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h3 className="text-base font-semibold text-[#163D2A] tracking-tight">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#68736A] font-normal leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="pt-2"
            >
              <Link
                href="#quote"
                className={cn(
                  buttonVariants(),
                  "group relative h-12 px-8 rounded-full bg-[#163D2A] hover:bg-[#1f4e37] text-[#F4F3EC] hover:text-white font-medium text-sm transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer border border-[#163D2A]"
                )}
              >
                <span>Let's Discuss Your Project</span>
                <span className="w-6 h-6 rounded-full bg-[#B9ED63] text-[#163D2A] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Cinematic Photography with Floating Glass Panel */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Frame */}
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-[#DDE2D7] min-h-[480px] sm:min-h-[540px] lg:h-[620px]">
              <Image
                src="/assets/why-choose-us/why-choose-us.jpg"
                alt="Craftsmanship in timber fencing and garden landscaping"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette for Depth and Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#163D2A]/85 via-[#163D2A]/30 to-transparent z-10" />

              {/* Top Corner Decorative Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs text-[#F4F3EC] font-medium shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#B9ED63]" />
                  <span>Craftsmanship First</span>
                </span>
              </div>

              {/* Floating Overlapping Glass Panel at Bottom */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: 0.25, ease: luxuryEase }}
                  className="rounded-2xl bg-[#163D2A]/85 backdrop-blur-xl border border-white/20 p-5 shadow-2xl text-[#F4F3EC] relative overflow-hidden"
                >
                  {/* Subtle inner ambient glow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#B9ED63]/20 rounded-full blur-xl pointer-events-none" />

                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B9ED63] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B9ED63]" />
                    </span>
                    <h4 className="text-sm font-semibold text-[#F4F3EC] tracking-tight">
                      Dedicated Local Specialists
                    </h4>
                  </div>
                  <p className="text-xs text-[#F4F3EC]/80 font-light leading-relaxed">
                    Delivering reliable fencing and garden transformations across Sutton Coldfield and surrounding areas.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Optional Restrained Horizontal Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: luxuryEase }}
          className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-[#DDE2D7]/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {TRUST_STRIP_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/50 border border-[#DDE2D7]/80 text-[#163D2A] shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B9ED63] shrink-0" />
                <span className="text-xs sm:text-[13px] font-semibold tracking-wide uppercase">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
