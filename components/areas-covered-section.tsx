"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  MapPin,
  ArrowUpRight,
  Compass,
  CheckCircle2,
  HelpCircle,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

interface ServiceLocation {
  id: string
  name: string
  tag?: string
}

// Central list of service locations (initial draft for client verification)
const SURROUNDING_LOCATIONS: ServiceLocation[] = [
  { id: "four-oaks", name: "Four Oaks", tag: "Regular Service" },
  { id: "streetly", name: "Streetly", tag: "Regular Service" },
  { id: "walmley", name: "Walmley", tag: "Regular Service" },
  { id: "boldmere", name: "Boldmere", tag: "Regular Service" },
  { id: "wylde-green", name: "Wylde Green", tag: "Regular Service" },
  { id: "erdington", name: "Erdington", tag: "Regular Service" },
  { id: "great-barr", name: "Great Barr", tag: "Regular Service" },
  { id: "kingstanding", name: "Kingstanding", tag: "Regular Service" },
  { id: "perry-barr", name: "Perry Barr", tag: "Regular Service" },
  {
    id: "birmingham",
    name: "Birmingham and surrounding areas",
    tag: "Enquiry Welcome",
  },
]

export function AreasCoveredSection() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: luxuryEase },
    },
  }

  return (
    <section
      id="areas-covered"
      aria-label="Areas We Cover"
      className="relative w-full pt-2 sm:pt-4 pb-16 sm:pb-20 bg-[#F4F3EC] text-[#1C2921] overflow-hidden"
    >
      {/* Subtle organic ambient glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#B9ED63]/10 rounded-full blur-3xl pointer-events-none -ml-20" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#163D2A]/5 rounded-full blur-3xl pointer-events-none -mr-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Centered */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center mb-8 sm:mb-10"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-3.5">
            <span className="h-2 w-2 rounded-full bg-[#B9ED63] ring-4 ring-[#B9ED63]/25" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#163D2A]">
              Proudly Serving Our Local Community
            </span>
            <span className="h-px w-12 bg-[#163D2A]/25" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#163D2A] leading-[1.15] tracking-[-0.015em] mb-3.5 text-center">
            Local Knowledge. Quality Workmanship.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#68736A] font-normal leading-relaxed max-w-xl text-center">
            From Sutton Coldfield to the surrounding Birmingham areas, we're
            here to help transform and maintain your outdoor space.
          </p>
        </motion.div>

        {/* Main Content Grid: Featured Primary Hub on Left, Surrounding Locations Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-16">
          {/* Featured Primary Area Panel: Sutton Coldfield (4 cols on lg) */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 rounded-3xl bg-[#163D2A] text-[#F4F3EC] p-7 sm:p-9 border border-[#163D2A] shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#B9ED63]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#B9ED63]/25 transition-all duration-700" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#B9ED63]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Badge & Header */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B9ED63] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B9ED63]" />
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#B9ED63]">
                  Primary Service Area
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#B9ED63]/15 border border-[#B9ED63]/30 flex items-center justify-center text-[#B9ED63]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F4F3EC]">
                    Sutton Coldfield
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] text-[#F4F3EC]/80 font-normal leading-relaxed mt-4">
                Our primary base and home territory. We provide dedicated
                fencing, bespoke gate installations, and comprehensive garden
                transformations with close personal attention.
              </p>
            </div>

            {/* Abstract Vector Architectural Schematic Map */}
            <div className="relative z-10 my-6 py-4 flex items-center justify-center">
              <div className="w-full max-w-[280px] aspect-[4/3] relative flex items-center justify-center">
                <svg
                  viewBox="0 0 280 210"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  {/* Concentric Schematic Range Rings */}
                  <circle
                    cx="140"
                    cy="105"
                    r="85"
                    fill="none"
                    stroke="#B9ED63"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="140"
                    cy="105"
                    r="55"
                    fill="none"
                    stroke="#B9ED63"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <circle
                    cx="140"
                    cy="105"
                    r="25"
                    fill="none"
                    stroke="#B9ED63"
                    strokeOpacity="0.35"
                    strokeWidth="1.2"
                  />

                  {/* Crosshair Axes */}
                  <line
                    x1="140"
                    y1="10"
                    x2="140"
                    y2="200"
                    stroke="#B9ED63"
                    strokeOpacity="0.15"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="105"
                    x2="260"
                    y2="105"
                    stroke="#B9ED63"
                    strokeOpacity="0.15"
                    strokeWidth="1"
                  />

                  {/* Surrounding Abstract Radial Nodes */}
                  {/* Four Oaks (North) */}
                  <line
                    x1="140"
                    y1="105"
                    x2="140"
                    y2="45"
                    stroke="#B9ED63"
                    strokeOpacity="0.25"
                    strokeDasharray="2 2"
                  />
                  <circle cx="140" cy="45" r="3.5" fill="#B9ED63" fillOpacity="0.7" />
                  <text
                    x="146"
                    y="42"
                    fill="#F4F3EC"
                    fontSize="9"
                    fontFamily="inherit"
                    opacity="0.65"
                  >
                    Four Oaks
                  </text>

                  {/* Streetly (North-West) */}
                  <line
                    x1="140"
                    y1="105"
                    x2="75"
                    y2="55"
                    stroke="#B9ED63"
                    strokeOpacity="0.25"
                    strokeDasharray="2 2"
                  />
                  <circle cx="75" cy="55" r="3" fill="#B9ED63" fillOpacity="0.6" />
                  <text
                    x="35"
                    y="53"
                    fill="#F4F3EC"
                    fontSize="9"
                    fontFamily="inherit"
                    opacity="0.6"
                  >
                    Streetly
                  </text>

                  {/* Walmley (East) */}
                  <line
                    x1="140"
                    y1="105"
                    x2="215"
                    y2="95"
                    stroke="#B9ED63"
                    strokeOpacity="0.25"
                    strokeDasharray="2 2"
                  />
                  <circle cx="215" cy="95" r="3" fill="#B9ED63" fillOpacity="0.6" />
                  <text
                    x="222"
                    y="98"
                    fill="#F4F3EC"
                    fontSize="9"
                    fontFamily="inherit"
                    opacity="0.6"
                  >
                    Walmley
                  </text>

                  {/* Boldmere (South-West) */}
                  <line
                    x1="140"
                    y1="105"
                    x2="80"
                    y2="155"
                    stroke="#B9ED63"
                    strokeOpacity="0.25"
                    strokeDasharray="2 2"
                  />
                  <circle cx="80" cy="155" r="3" fill="#B9ED63" fillOpacity="0.6" />
                  <text
                    x="38"
                    y="158"
                    fill="#F4F3EC"
                    fontSize="9"
                    fontFamily="inherit"
                    opacity="0.6"
                  >
                    Boldmere
                  </text>

                  {/* Wylde Green (South) */}
                  <line
                    x1="140"
                    y1="105"
                    x2="150"
                    y2="170"
                    stroke="#B9ED63"
                    strokeOpacity="0.25"
                    strokeDasharray="2 2"
                  />
                  <circle cx="150" cy="170" r="3" fill="#B9ED63" fillOpacity="0.6" />
                  <text
                    x="158"
                    y="173"
                    fill="#F4F3EC"
                    fontSize="9"
                    fontFamily="inherit"
                    opacity="0.6"
                  >
                    Wylde Green
                  </text>

                  {/* Central Sutton Coldfield Node (Hub) */}
                  <circle cx="140" cy="105" r="8" fill="#B9ED63" fillOpacity="0.25" />
                  <circle cx="140" cy="105" r="4.5" fill="#B9ED63" />
                  <circle cx="140" cy="105" r="1.5" fill="#163D2A" />
                </svg>
              </div>
            </div>

            {/* Bottom Key Standards */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-[#F4F3EC]/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B9ED63] shrink-0" />
                <span>Dedicated on-site assessments across Sutton Coldfield</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#F4F3EC]/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B9ED63] shrink-0" />
                <span>Respectful boundary planning & high-grade materials</span>
              </div>
            </div>
          </motion.div>

          {/* Surrounding Locations Grid (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-[#163D2A] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#163D2A]/70" />
                  <span>Surrounding Service Areas</span>
                </h3>
                <span className="text-xs text-[#68736A]">
                  Initial coverage list
                </span>
              </div>

              {/* Location Rows: 2 Columns on desktop/tablet, 1 Column on mobile */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {SURROUNDING_LOCATIONS.map((loc) => (
                  <motion.div
                    key={loc.id}
                    variants={itemVariants}
                    className="group relative rounded-2xl p-4 bg-[#E8F1E5] hover:bg-white border border-[#163D2A]/10 hover:border-[#163D2A]/30 shadow-[0_2px_10px_rgba(22,61,42,0.03)] hover:shadow-[0_6px_20px_rgba(22,61,42,0.08)] transition-all duration-300 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white/80 group-hover:bg-[#163D2A]/8 border border-[#163D2A]/10 flex items-center justify-center text-[#163D2A] transition-colors duration-300">
                        <MapPin className="w-4 h-4 text-[#163D2A]/75 group-hover:text-[#163D2A]" />
                      </div>
                      <div>
                        <h4 className="text-[14.5px] font-medium text-[#163D2A] group-hover:translate-x-0.5 transition-transform duration-200">
                          {loc.name}
                        </h4>
                        <span className="text-[11px] text-[#68736A] font-normal">
                          {loc.tag}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-[#163D2A]/35 group-hover:text-[#163D2A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Note & Verification Disclaimer */}
            <div className="mt-5 pt-4 border-t border-[#163D2A]/10 flex items-center gap-2 text-xs text-[#68736A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#163D2A]/40 shrink-0" />
              <span>
                Coverage is subject to scheduling and project scope. Areas listed
                above are for guidance and pending final verification.
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action Box */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="rounded-3xl p-6 sm:p-8 bg-[#E8F1E5] border border-[#163D2A]/12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-start sm:items-center gap-4 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-[#163D2A] text-[#B9ED63] flex items-center justify-center shrink-0 mx-auto sm:mx-0 shadow-sm">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#163D2A]">
                Not Sure If We Cover Your Area?
              </h3>
              <p className="text-sm text-[#68736A] mt-1">
                Get in touch and tell us where your project is located.
              </p>
            </div>
          </div>

          <Link
            href="#quote"
            className={cn(
              buttonVariants(),
              "group relative h-11 px-7 rounded-full bg-[#163D2A] hover:bg-[#1E4E36] text-[#F4F3EC] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#163D2A] shrink-0"
            )}
          >
            <span>Ask About Your Area</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B9ED63]" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
