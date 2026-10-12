"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  MessageSquare,
  CalendarCheck,
  Compass,
  Smile,
} from "lucide-react"

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: React.ElementType
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Tell Us About Your Project",
    description:
      "Share your ideas, requirements, and what you would like to improve in your outdoor space.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Arrange Your Free Quotation",
    description:
      "We discuss the details and arrange the next steps for your quotation.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Plan Your Project",
    description:
      "Once the details are agreed, we coordinate the work and confirm the plan with you.",
    icon: Compass,
  },
  {
    step: "04",
    title: "Enjoy Your Outdoor Space",
    description:
      "Your project moves through to completion, with attention to the details that matter.",
    icon: Smile,
  },
]

export function HowItWorksSection() {
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

  const stepCardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: shouldReduceMotion ? 0 : 0.12 * i,
        ease: luxuryEase,
      },
    }),
  }

  return (
    <section
      id="how-it-works"
      className="relative w-full pt-6 sm:pt-10 pb-16 sm:pb-20 bg-[#F4F3EC] text-[#1C2921] overflow-hidden"
    >
      {/* Subtle organic ambient glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#B9ED63]/10 rounded-full blur-3xl pointer-events-none -mr-20" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#163D2A]/5 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Centered */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-14"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-3.5">
            <span className="h-2 w-2 rounded-full bg-[#B9ED63] ring-4 ring-[#B9ED63]/25" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#163D2A]">
              Straightforward From Start To Finish
            </span>
            <span className="h-px w-12 bg-[#163D2A]/25" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#163D2A] leading-[1.15] tracking-[-0.015em] mb-4 text-center">
            Your Project, Made Simple.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#68736A] font-normal leading-relaxed max-w-xl text-center">
            From your first enquiry to the finishing touches, we keep the process
            clear, personal, and straightforward.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Progress Line (Desktop Horizontal) */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-[#DDE2D7] z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.1, ease: luxuryEase }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-[#163D2A] via-[#B9ED63] to-[#163D2A]"
            />
          </div>

          {/* Steps Grid (Responsive: Mobile Vertical Timeline, Tablet 2-Col, Desktop 4-Col Horizontal) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 border-l-2 border-[#DDE2D7] md:border-l-0 pl-6 md:pl-0 ml-3 md:ml-0">
            {PROCESS_STEPS.map((stepItem, index) => {
              const Icon = stepItem.icon
              return (
                <motion.div
                  key={stepItem.step}
                  custom={index}
                  variants={stepCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/75 hover:bg-white border border-[#DDE2D7] hover:border-[#163D2A]/30 transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  {/* Mobile Left Timeline Marker */}
                  <span className="md:hidden absolute -left-[33px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-[#F4F3EC] border-2 border-[#163D2A]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B9ED63]" />
                  </span>

                  <div>
                    {/* Top Marker & Number Row */}
                    <div className="flex items-center justify-between mb-5">
                      {/* Step Number */}
                      <span className="font-serif text-3xl sm:text-4xl font-light text-[#163D2A] tracking-tight group-hover:text-[#163D2A] transition-colors">
                        {stepItem.step}
                      </span>

                      {/* Desktop Node Marker & Icon */}
                      <div className="w-10 h-10 rounded-xl bg-[#163D2A]/5 border border-[#163D2A]/10 flex items-center justify-center text-[#163D2A] group-hover:bg-[#163D2A] group-hover:text-[#B9ED63] transition-colors duration-300">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#163D2A] mb-2.5 leading-snug">
                      {stepItem.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-[13px] text-[#68736A] font-normal leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Refined Bottom Accent Line on Hover */}
                  <div className="pt-6 mt-auto">
                    <div className="h-[2px] w-full bg-[#163D2A]/10 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-[#B9ED63] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
