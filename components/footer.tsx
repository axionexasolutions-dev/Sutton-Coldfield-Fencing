"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, MessageCircle, MapPin, ArrowUpRight, ArrowUp } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

const QUICK_LINKS = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#why-choose-us" },
  { name: "About", href: "#why-choose-us" },
  { name: "Contact", href: "#quote" },
]

const OUR_SERVICES = [
  { name: "Fencing & Gates", href: "#services" },
  { name: "Garden Transformations", href: "#services" },
  { name: "Decking", href: "#services" },
  { name: "Garden Maintenance", href: "#services" },
  { name: "Outdoor Cleaning", href: "#services" },
]

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number>(2026)

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-[#102B1D] text-[#F4F3EC] overflow-hidden border-t border-white/10"
    >
      {/* Subtle organic ambient highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B9ED63]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#163D2A]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-12 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand Column (5 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="#"
              className="inline-flex items-center gap-2 group mb-4"
              aria-label="Sutton Coldfield Fencing - Home"
            >
              <span className="font-serif text-2xl sm:text-[26px] font-normal text-[#F4F3EC] tracking-tight">
                Sutton Coldfield
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B9ED63] ring-2 ring-[#B9ED63]/30" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B9ED63] font-semibold">
                Fencing
              </span>
            </Link>

            <p className="text-sm text-[#F4F3EC]/75 font-normal leading-relaxed max-w-sm mb-6">
              Bespoke fencing, gate installations, and comprehensive garden
              transformations across Sutton Coldfield and surrounding areas.
              Crafted with care, local knowledge, and reliable workmanship.
            </p>

            <Link
              href="#quote"
              className={cn(
                buttonVariants(),
                "group h-10 px-5 rounded-full bg-[#B9ED63] hover:bg-[#cbf487] text-[#163D2A] font-semibold text-xs shadow-[0_0_20px_rgba(185,237,99,0.2)] hover:shadow-[0_0_25px_rgba(185,237,99,0.35)] transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer border border-[#B9ED63]/40"
              )}
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#163D2A]" />
            </Link>
          </div>

          {/* Quick Links Column (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B9ED63] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F4F3EC]/75 hover:text-[#B9ED63] transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="h-px w-0 bg-[#B9ED63] group-hover:w-2 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B9ED63] mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {OUR_SERVICES.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-[#F4F3EC]/75 hover:text-[#B9ED63] transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="h-px w-0 bg-[#B9ED63] group-hover:w-2 transition-all duration-200" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B9ED63] mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {/* Phone */}
              <li>
                <a
                  href="tel:+447587762236"
                  className="group flex items-start gap-3 text-sm text-[#F4F3EC]/80 hover:text-[#F4F3EC] transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#B9ED63] group-hover:text-[#163D2A] text-[#B9ED63] flex items-center justify-center shrink-0 transition-colors duration-200">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#F4F3EC]/50 font-medium">
                      Call Us
                    </span>
                    <span className="font-medium text-[#F4F3EC] group-hover:text-[#B9ED63] transition-colors">
                      07587 762 236
                    </span>
                  </div>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/447889889320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-[#F4F3EC]/80 hover:text-[#F4F3EC] transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#B9ED63] group-hover:text-[#163D2A] text-[#B9ED63] flex items-center justify-center shrink-0 transition-colors duration-200">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#F4F3EC]/50 font-medium">
                      WhatsApp
                    </span>
                    <span className="font-medium text-[#F4F3EC] group-hover:text-[#B9ED63] transition-colors">
                      07889 889 320
                    </span>
                  </div>
                </a>
              </li>

              {/* Service Area */}
              <li className="flex items-start gap-3 text-sm text-[#F4F3EC]/75 pt-1">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-[#B9ED63] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#F4F3EC]/50 font-medium">
                    Service Area
                  </span>
                  <span className="text-xs leading-relaxed text-[#F4F3EC]/85">
                    Sutton Coldfield and surrounding Birmingham areas
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4F3EC]/60">
          <p>
            © {currentYear} Sutton Coldfield Fencing. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-[#F4F3EC]/50">
              Quality Workmanship • Dedicated Local Service
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#B9ED63] text-[#F4F3EC] hover:text-[#163D2A] border border-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9ED63]"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
