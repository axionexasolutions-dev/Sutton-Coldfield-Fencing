"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"

interface ReviewItem {
  id: string
  client: string
  location: string
  service: string
  quote: string
  highlight: string
}

const REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    client: "Residential Homeowner",
    location: "Four Oaks, Sutton Coldfield",
    service: "Bespoke Slatted Fencing & Gate",
    highlight: "Exceptional Craftsmanship",
    quote:
      "The horizontal slatted fencing and matching gate look immaculate. Punctual, courteous throughout, and left the garden spotless upon completion.",
  },
  {
    id: "review-2",
    client: "Local Resident",
    location: "Little Aston",
    service: "Garden Transformation & Decking",
    highlight: "Complete Transformation",
    quote:
      "Turned our tired garden into a beautiful outdoor space with composite decking and fresh turf. The attention to detail was outstanding.",
  },
  {
    id: "review-3",
    client: "Property Owner",
    location: "Walmley, Sutton Coldfield",
    service: "Acoustic Boundary Fencing",
    highlight: "Clear Communication",
    quote:
      "From the initial quotation to the final panel installed, communication was friendly and clear. Refreshing to work with tradespeople who take pride.",
  },
  {
    id: "review-4",
    client: "Homeowner",
    location: "Boldmere",
    service: "Custom Side Gate & Trellis",
    highlight: "Sturdy & Refined",
    quote:
      "Delighted with our new side gate and custom trellis panels. Sturdy construction, perfectly fitted, and blends seamlessly with our property.",
  },
  {
    id: "review-5",
    client: "Residential Client",
    location: "Wylde Green, Sutton Coldfield",
    service: "Turfing & Boundary Fencing",
    highlight: "Care & Precision",
    quote:
      "Replaced our storm-damaged boundary fencing and leveled the lawn. Solid workmanship, practical advice, and a trustworthy local team.",
  },
  {
    id: "review-6",
    client: "Homeowner",
    location: "Mere Green, Sutton Coldfield",
    service: "Closeboard Fencing & Concrete Posts",
    highlight: "Built To Last",
    quote:
      "Heavy-duty closeboard fencing with concrete posts. Solid as a rock and finished neatly along our sloping garden boundary.",
  },
  {
    id: "review-7",
    client: "Local Resident",
    location: "Streetly, Sutton Coldfield",
    service: "Garden Clearance & New Fencing",
    highlight: "Efficient & Tidy",
    quote:
      "Removed the old hedge and installed clean contemporary fence panels in just two days. Prompt, polite, and very tidy workers.",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const shouldReduceMotion = useReducedMotion()

  const containerRef = React.useRef<HTMLDivElement>(null)
  const firstCardRef = React.useRef<HTMLDivElement>(null)
  const [stepWidth, setStepWidth] = React.useState(0)
  const [itemsPerView, setItemsPerView] = React.useState(3)

  const luxuryEase = [0.16, 1, 0.3, 1] as const

  // Responsive dimensions calculation for the carousel track
  const updateMeasurements = React.useCallback(() => {
    if (!containerRef.current) return
    const width = containerRef.current.offsetWidth
    let count = 1
    if (window.innerWidth >= 1024) {
      count = 3
    } else if (window.innerWidth >= 640) {
      count = 2
    } else {
      count = 1
    }
    setItemsPerView(count)

    if (firstCardRef.current) {
      // gap-5 = 20px
      const cardW = firstCardRef.current.offsetWidth
      setStepWidth(cardW + 20)
    }
  }, [])

  React.useEffect(() => {
    updateMeasurements()

    const observer = new ResizeObserver(() => {
      updateMeasurements()
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    window.addEventListener("resize", updateMeasurements)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateMeasurements)
    }
  }, [updateMeasurements])

  // Total possible scroll steps
  const maxIndex = Math.max(0, REVIEWS.length - itemsPerView)

  // Clamp current index if window resize changes maxIndex
  React.useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [maxIndex, currentIndex])

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Automatic Swiping Effect (every 4.5 seconds)
  React.useEffect(() => {
    if (isPaused || shouldReduceMotion) return

    const timer = setInterval(() => {
      if (document.hidden) return
      handleNext()
    }, 4500)

    return () => clearInterval(timer)
  }, [isPaused, shouldReduceMotion, handleNext])

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
      id="reviews"
      aria-label="Customer Reviews and Testimonials"
      className="relative w-full pt-2 sm:pt-4 pb-16 sm:pb-20 bg-[#F4F3EC] text-[#1C2921] overflow-hidden"
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
              Words From Our Customers
            </span>
            <span className="h-px w-12 bg-[#163D2A]/25" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#163D2A] leading-[1.15] tracking-[-0.015em] mb-3.5 text-center">
            Good Work. Great Experiences.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#68736A] font-normal leading-relaxed max-w-xl text-center">
            Discover what customers have to say about their experience with
            Sutton Coldfield Fencing.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="relative"
        >
          {/* Sliding Track Viewport */}
          <div
            ref={containerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          >
            <motion.div
              drag={shouldReduceMotion ? false : "x"}
              dragConstraints={{
                left: -(maxIndex * stepWidth),
                right: 0,
              }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40 || info.velocity.x < -200) {
                  handleNext()
                } else if (info.offset.x > 40 || info.velocity.x > 200) {
                  handlePrev()
                }
              }}
              animate={{
                x: stepWidth > 0 ? -currentIndex * stepWidth : 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.65,
                ease: luxuryEase,
              }}
              className="flex gap-5 items-stretch"
            >
              {REVIEWS.map((review, index) => {
                return (
                  <div
                    key={review.id}
                    ref={index === 0 ? firstCardRef : undefined}
                    className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.3333%-13.3333px)] flex flex-col justify-between rounded-2xl p-5 sm:p-6 bg-[#E8F1E5] border border-[#163D2A]/10 shadow-[0_4px_20px_rgba(22,61,42,0.04)] hover:border-[#163D2A]/25 hover:shadow-[0_8px_30px_rgba(22,61,42,0.08)] transition-all duration-300 min-h-[220px]"
                  >
                    {/* Top: Quote Icon & Highlight Badge */}
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <Quote className="w-5 h-5 text-[#163D2A]/30" />
                        <span className="text-[11px] font-semibold text-[#163D2A] bg-white/70 border border-[#163D2A]/10 px-2.5 py-0.5 rounded-full tracking-wide">
                          {review.highlight}
                        </span>
                      </div>

                      {/* Review Quote */}
                      <p className="text-sm sm:text-[14.5px] text-[#1C2921]/90 leading-relaxed italic mb-5">
                        "{review.quote}"
                      </p>
                    </div>

                    {/* Bottom: Client info & verified tag */}
                    <div className="pt-3.5 border-t border-[#163D2A]/10 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-[15px] font-normal text-[#163D2A]">
                          {review.client}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-[#163D2A]/80 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#163D2A]" />
                          <span>Verified Project</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#68736A]">{review.location}</p>
                      <p className="text-[11px] font-medium text-[#163D2A]/75 mt-0.5">
                        {review.service}
                      </p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Carousel Navigation Controls: Dots & Arrows */}
          <div className="flex items-center justify-between mt-8 sm:mt-10 pt-2">
            {/* Pagination Indicators */}
            <div
              role="tablist"
              aria-label="Testimonial pagination"
              className="flex items-center gap-2"
            >
              {Array.from({ length: maxIndex + 1 }).map((_, index) => {
                const isActive = currentIndex === index
                return (
                  <button
                    key={`dot-${index}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#163D2A] cursor-pointer ${
                      isActive
                        ? "w-7 bg-[#163D2A]"
                        : "w-2 bg-[#163D2A]/20 hover:bg-[#163D2A]/40"
                    }`}
                  />
                )
              })}
            </div>

            {/* Previous and Next Navigation Arrows */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                aria-label="Previous review"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-[#163D2A] text-[#163D2A] hover:text-[#F4F3EC] border border-[#163D2A]/15 shadow-sm flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#163D2A] cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                aria-label="Next review"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-[#163D2A] text-[#163D2A] hover:text-[#F4F3EC] border border-[#163D2A]/15 shadow-sm flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#163D2A] cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
