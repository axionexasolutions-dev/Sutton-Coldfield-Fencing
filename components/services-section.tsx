"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowUpRight,
  Sparkles,
  Check,
  Layers,
  Trees,
  Scissors,
  Home,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

interface ServiceItem {
  id: string
  number: string
  title: string
  description: string
  inclusions: string[]
  image: string
  icon: React.ElementType
}

const SERVICES: ServiceItem[] = [
  {
    id: "fencing-gates",
    number: "01",
    title: "Fencing & Bespoke Gates",
    description:
      "Beautifully crafted fencing and bespoke gates designed to enhance privacy, security, and the character of your property.",
    inclusions: [
      "Fence installation",
      "Fence repairs and replacement panels",
      "Bespoke garden gates",
    ],
    image: "/assets/services/fencing-gates.jpg",
    icon: Layers,
  },
  {
    id: "garden-transformations",
    number: "02",
    title: "Garden Transformations",
    description:
      "Transform your outdoor space with considered landscaping, fresh lawns, and beautifully finished garden features.",
    inclusions: [
      "Garden transformations",
      "Turfing and lawn care",
      "Composite and timber decking",
      "Trellis and garden features",
    ],
    image: "/assets/services/garden-transformation.jpg",
    icon: Trees,
  },
  {
    id: "garden-maintenance",
    number: "03",
    title: "Garden Maintenance",
    description:
      "Keep your garden looking its best with reliable, careful maintenance throughout the seasons.",
    inclusions: [
      "Hedge trimming",
      "Leaf clearance",
      "Garden maintenance",
      "Garden clearances",
    ],
    image: "/assets/services/garden-maintenance.jpg",
    icon: Scissors,
  },
  {
    id: "property-cleaning",
    number: "04",
    title: "Outdoor Property Cleaning",
    description:
      "Refresh your outdoor spaces and maintain your property's appearance with professional exterior cleaning.",
    inclusions: [
      "Gutter cleaning",
      "Roof cleaning",
      "Outdoor property maintenance",
    ],
    image: "/assets/services/property-cleaning.png",
    icon: Home,
  },
]

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion()

  const luxuryEase = [0.16, 1, 0.3, 1] as const

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: luxuryEase },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: shouldReduceMotion ? 0 : i * 0.12,
        ease: luxuryEase,
      },
    }),
  }

  return (
    <section
      id="services"
      className="relative w-full pt-10 sm:pt-14 pb-10 sm:pb-12 bg-[#F4F3EC] text-[#1C2921] overflow-hidden"
    >
      {/* Subtle organic background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B9ED63]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#163D2A]/5 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#B9ED63] ring-4 ring-[#B9ED63]/25" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#163D2A]">
              What We Do
            </span>
            <span className="h-px w-12 bg-[#163D2A]/25" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#163D2A] leading-[1.12] tracking-[-0.015em] mb-6">
            Thoughtfully Crafted.
            <br />
            <span className="text-[#163D2A]/90">Beautifully Transformed.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-[#68736A] font-normal leading-relaxed max-w-2xl">
            From bespoke fencing to complete garden transformations, we bring
            craftsmanship, care, and attention to detail to every outdoor space.
          </p>
        </motion.div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* CARD 01: Large Featured Card (Fencing & Bespoke Gates) */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-[#163D2A] text-[#F4F3EC] shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#163D2A]/20 flex flex-col justify-between min-h-[520px] lg:min-h-[580px]"
          >
            {/* Background Image with Hover Scale */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={SERVICES[0].image}
                alt={SERVICES[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Dark Forest Gradient Overlay for Content Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#163D2A] via-[#163D2A]/80 to-[#163D2A]/30 z-10" />
            </div>

            {/* Top Bar inside Card */}
            <div className="relative z-20 p-6 sm:p-8 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl sm:text-3xl font-light text-[#B9ED63]">
                  {SERVICES[0].number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#F4F3EC]/70 font-medium">
                  Featured Specialty
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#B9ED63] group-hover:bg-[#B9ED63] group-hover:text-[#163D2A] transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-20 p-6 sm:p-8 lg:p-10 mt-auto">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F4F3EC] mb-3 leading-tight">
                {SERVICES[0].title}
              </h3>
              <p className="text-sm sm:text-base text-[#F4F3EC]/85 font-light leading-relaxed max-w-xl mb-6">
                {SERVICES[0].description}
              </p>

              {/* Inclusions Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/15">
                {SERVICES[0].inclusions.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-xs text-[#F4F3EC] font-medium"
                  >
                    <Check className="w-3 h-3 text-[#B9ED63]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack: Medium Cards 03 & 04 */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 justify-between">
            {/* CARD 03: Medium Card (Garden Maintenance) */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-[#DDE2D7] flex flex-col justify-between min-h-[260px] sm:min-h-[275px]"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={SERVICES[2].image}
                  alt={SERVICES[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163D2A] via-[#163D2A]/85 to-[#163D2A]/40 z-10" />
              </div>

              <div className="relative z-20 p-6 flex items-start justify-between">
                <span className="font-serif text-2xl font-light text-[#B9ED63]">
                  {SERVICES[2].number}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#B9ED63] group-hover:bg-[#B9ED63] group-hover:text-[#163D2A] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div className="relative z-20 p-6 pt-0 mt-auto text-[#F4F3EC]">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F4F3EC] mb-2 leading-snug">
                  {SERVICES[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F4F3EC]/85 font-light leading-relaxed mb-4">
                  {SERVICES[2].description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/15">
                  {SERVICES[2].inclusions.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] text-[#F4F3EC]"
                    >
                      <Check className="w-2.5 h-2.5 text-[#B9ED63]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 04: Medium Card (Outdoor Property Cleaning) */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-[#DDE2D7] flex flex-col justify-between min-h-[260px] sm:min-h-[275px]"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={SERVICES[3].image}
                  alt={SERVICES[3].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-[80%_center] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163D2A] via-[#163D2A]/85 to-[#163D2A]/40 z-10" />
              </div>

              <div className="relative z-20 p-6 flex items-start justify-between">
                <span className="font-serif text-2xl font-light text-[#B9ED63]">
                  {SERVICES[3].number}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#B9ED63] group-hover:bg-[#B9ED63] group-hover:text-[#163D2A] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div className="relative z-20 p-6 pt-0 mt-auto text-[#F4F3EC]">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F4F3EC] mb-2 leading-snug">
                  {SERVICES[3].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F4F3EC]/85 font-light leading-relaxed mb-4">
                  {SERVICES[3].description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/15">
                  {SERVICES[3].inclusions.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] text-[#F4F3EC]"
                    >
                      <Check className="w-2.5 h-2.5 text-[#B9ED63]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* CARD 02: Wide Supporting Service Card (Garden Transformations) */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-12 group relative rounded-3xl overflow-hidden bg-[#163D2A] text-[#F4F3EC] shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#163D2A]/20 min-h-[380px] lg:min-h-[420px] flex flex-col justify-end"
          >
            {/* Background Panoramic Image with Controlled Zoom */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={SERVICES[1].image}
                alt={SERVICES[1].title}
                fill
                sizes="100vw"
                className="object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Cinematic Multilayer Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#163D2A] via-[#163D2A]/75 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#163D2A]/90 via-[#163D2A]/50 to-transparent z-10" />
            </div>

            {/* Panoramic Content */}
            <div className="relative z-20 p-6 sm:p-10 lg:p-12 max-w-4xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-serif text-3xl font-light text-[#B9ED63]">
                  {SERVICES[1].number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#B9ED63] font-semibold bg-[#B9ED63]/15 border border-[#B9ED63]/30 px-3 py-1 rounded-full">
                  Complete Outdoor Living
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-normal text-[#F4F3EC] mb-3 leading-tight">
                {SERVICES[1].title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#F4F3EC]/90 font-light leading-relaxed max-w-2xl mb-6">
                {SERVICES[1].description}
              </p>

              {/* Inclusions Badges */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/20">
                {SERVICES[1].inclusions.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-[#F4F3EC] font-medium"
                  >
                    <Check className="w-3.5 h-3.5 text-[#B9ED63]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* View All Services Callout */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="flex flex-col items-center text-center"
        >

          <h3 className="font-serif text-2xl sm:text-3xl text-[#163D2A] font-normal mb-2.5 tracking-tight">
            Looking for something tailored?
          </h3>
          <p className="text-sm sm:text-base text-[#68736A] font-light max-w-lg mb-6 leading-relaxed">
            From single bespoke gate commissions to full estate transformations, explore our full spectrum of services.
          </p>

          <Link
            href="/services"
            className={cn(
              buttonVariants(),
              "group relative h-12 sm:h-13 px-8 rounded-full bg-[#163D2A] hover:bg-[#1f4e37] text-[#F4F3EC] hover:text-white font-medium text-sm transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer border border-[#163D2A]"
            )}
          >
            <span>Explore All Services</span>
            <span className="w-6 h-6 rounded-full bg-[#B9ED63] text-[#163D2A] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 shadow-sm">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
