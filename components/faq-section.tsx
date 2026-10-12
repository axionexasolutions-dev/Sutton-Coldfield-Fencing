"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Plus, Minus, ArrowUpRight, HelpCircle } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of fencing and gates do you install?",
    answer:
      "We install a comprehensive range of fencing solutions tailored to residential and commercial properties. This includes traditional closeboard and featheredge fencing, contemporary horizontal slatted panels, durable acoustic fencing, bespoke garden gates, and your choice of concrete or pressure-treated timber posts.",
  },
  {
    id: "faq-2",
    question: "Can you repair existing fences or storm-damaged panels?",
    answer:
      "Yes. Whether your fence has suffered weather damage, leaning posts, or broken panels, we assess the structural integrity and recommend whether targeted repairs or a complete section replacement is the most cost-effective and secure solution.",
  },
  {
    id: "faq-3",
    question: "What garden services do you offer alongside fencing?",
    answer:
      "In addition to fencing and gates, we provide complete garden transformations including fresh lawn turfing, timber and composite decking, raised sleeper beds, hedge clearance, and outdoor property maintenance to keep outdoor spaces looking their best.",
  },
  {
    id: "faq-4",
    question: "How does the quotation process work?",
    answer:
      "Our quotation process is straightforward and free of obligation. We discuss your project requirements, arrange a convenient time to view the site and measure boundaries, and provide a clear, transparent quotation detailing the agreed specifications with no hidden costs.",
  },
  {
    id: "faq-5",
    question: "Which locations do you regularly cover?",
    answer:
      "We are based in Sutton Coldfield and regularly carry out projects across Four Oaks, Streetly, Walmley, Boldmere, Wylde Green, Erdington, Great Barr, Kingstanding, Perry Barr, and the surrounding North Birmingham districts. Enquiries for neighboring areas are always welcome.",
  },
  {
    id: "faq-6",
    question: "Do I need to do anything to prepare before work starts?",
    answer:
      "We simply ask that the immediate boundary line is reasonably accessible, and any delicate potted plants are placed aside. Our team handles the safe removal of old fencing if agreed, manages boundary work respectfully, and leaves your garden clean and tidy upon completion.",
  },
]

export function FaqSection() {
  const [openId, setOpenId] = React.useState<string | null>("faq-1")
  const shouldReduceMotion = useReducedMotion()

  const luxuryEase = [0.16, 1, 0.3, 1] as const

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

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
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative w-full pt-4 sm:pt-6 pb-16 sm:pb-20 bg-[#F4F3EC] text-[#1C2921] overflow-hidden"
    >
      {/* Subtle organic ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#B9ED63]/10 rounded-full blur-3xl pointer-events-none -mr-20" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#163D2A]/5 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading, Supporting Text, Lime Accent & CTA */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <span className="h-2 w-2 rounded-full bg-[#B9ED63] ring-4 ring-[#B9ED63]/25" />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#163D2A]">
                Clear Answers & Advice
              </span>
              <span className="h-px w-12 bg-[#163D2A]/25" />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#163D2A] leading-[1.15] tracking-[-0.015em] mb-4">
              Got Questions?
              <br />
              <span className="text-[#163D2A]/85">We’re Here to Help.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#68736A] font-normal leading-relaxed max-w-md mb-8">
              Find clear answers regarding our fencing installations, repairs,
              garden services, and quotation process. If you need specific
              advice, our local team is only a call away.
            </p>

            {/* Forest Green CTA Button */}
            <Link
              href="#quote"
              className={cn(
                buttonVariants(),
                "group relative h-11 px-7 rounded-full bg-[#163D2A] hover:bg-[#1E4E36] text-[#F4F3EC] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#163D2A]"
              )}
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B9ED63]" />
            </Link>

            {/* Reassuring note */}
            <div className="mt-8 pt-6 border-t border-[#163D2A]/10 w-full max-w-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#163D2A]/6 text-[#163D2A] flex items-center justify-center shrink-0">
                <HelpCircle className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#68736A] leading-normal">
                Have a bespoke requirement or specific garden dimensions? We’re
                happy to talk it through.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Accordion with Framer Motion */}
          <div className="lg:col-span-7 divide-y divide-[#163D2A]/15 border-t border-b border-[#163D2A]/15">
            {FAQS.map((faq, index) => {
              const isOpen = openId === faq.id

              return (
                <div key={faq.id} className="py-2">
                  <h3>
                    <button
                      type="button"
                      id={`faq-trigger-${faq.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-content-${faq.id}`}
                      onClick={() => toggleItem(faq.id)}
                      className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#163D2A] rounded-lg"
                    >
                      <span className="font-serif text-lg sm:text-[19px] font-normal text-[#163D2A] group-hover:text-[#163D2A]/80 transition-colors duration-200">
                        {faq.question}
                      </span>

                      {/* Animated Plus / Minus Indicator */}
                      <span
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border",
                          isOpen
                            ? "bg-[#163D2A] text-[#B9ED63] border-[#163D2A]"
                            : "bg-white/80 group-hover:bg-[#163D2A] text-[#163D2A] group-hover:text-[#F4F3EC] border-[#163D2A]/15 shadow-sm"
                        )}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                  </h3>

                  {/* Smooth Framer Motion Collapse/Expand */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-content-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${faq.id}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.35,
                          ease: luxuryEase,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm sm:text-[15px] text-[#68736A] font-normal leading-relaxed pb-5 pt-1 pr-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
