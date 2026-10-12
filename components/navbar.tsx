"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { ArrowUpRight, Menu, Sparkles } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeLink, setActiveLink] = React.useState("Home")
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 25)
  })

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#163D2A]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/25 py-3 sm:py-3.5"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="#home"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9ED63] rounded-lg"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
              <Image
                src="/assets/logo/logo.png"
                alt="Sutton Coldfield Fencing Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-normal text-[#F4F3EC] tracking-tight group-hover:text-white transition-colors">
                Sutton Coldfield Fencing
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#B9ED63]/90 -mt-0.5">
                Garden Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link.name
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`group relative py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9ED63] rounded-sm ${
                    isActive
                      ? "text-[#B9ED63] font-semibold drop-shadow-[0_0_12px_rgba(185,237,99,0.35)]"
                      : "text-[#F4F3EC]/80 hover:text-[#B9ED63]"
                  }`}
                >
                  <span>{link.name}</span>

                  {/* Premium Fancy Active Indicator */}
                  {isActive ? (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 flex items-center justify-center pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      <span className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#B9ED63] to-transparent rounded-full shadow-[0_0_10px_rgba(185,237,99,0.9)]" />
                      <span className="absolute h-1 w-1 rounded-full bg-[#B9ED63] shadow-[0_0_6px_#B9ED63]" />
                    </motion.div>
                  ) : (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B9ED63]/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center pointer-events-none" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#quote"
              className={cn(
                buttonVariants(),
                "group relative h-10 px-5 rounded-full bg-[#B9ED63] hover:bg-[#cbf487] text-[#163D2A] font-semibold text-sm shadow-[0_0_20px_rgba(185,237,99,0.25)] hover:shadow-[0_0_25px_rgba(185,237,99,0.4)] transition-all duration-200 border border-[#B9ED63]/40 flex items-center gap-1.5 cursor-pointer"
              )}
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#163D2A]" />
            </Link>
          </div>

          {/* Mobile Navigation via Sheet */}
          <div className="flex md:hidden items-center">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger
                aria-label="Open mobile navigation menu"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/15 text-[#F4F3EC] border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9ED63] cursor-pointer"
              >
                <Menu className="w-4.5 h-4.5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:max-w-xs bg-[#102B1D]/95 backdrop-blur-2xl border-l border-white/10 text-[#F4F3EC] p-6 flex flex-col justify-between"
              >
                <div>
                  <SheetHeader className="text-left px-0 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                        <Image
                          src="/assets/logo/logo.png"
                          alt="Sutton Coldfield Fencing Logo"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <SheetTitle className="font-serif text-lg font-normal text-[#F4F3EC]">
                          Sutton Coldfield Fencing
                        </SheetTitle>
                        <p className="text-[10px] uppercase tracking-wider text-[#B9ED63]">
                          Garden Specialists
                        </p>
                      </div>
                    </div>
                  </SheetHeader>

                  <nav
                    aria-label="Mobile Navigation"
                    className="flex flex-col gap-2 pt-6"
                  >
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => {
                          setActiveLink(link.name)
                          setMobileMenuOpen(false)
                        }}
                        className={`flex items-center justify-between py-3 px-3.5 rounded-lg text-base font-medium transition-colors ${
                          activeLink === link.name
                            ? "bg-white/10 text-[#B9ED63] font-semibold"
                            : "text-[#F4F3EC]/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="text-xs text-white/40">→</span>
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#B9ED63]/20 flex items-center justify-center text-[#B9ED63]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#F4F3EC]/70">Local specialists</p>
                      <p className="text-sm font-medium text-[#F4F3EC]">
                        Sutton Coldfield &amp; surrounds
                      </p>
                    </div>
                  </div>

                  <Link
                    href="#quote"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      buttonVariants(),
                      "w-full h-11 rounded-full bg-[#B9ED63] hover:bg-[#cbf487] text-[#163D2A] font-semibold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    )}
                  >
                    <span>Get a Free Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
