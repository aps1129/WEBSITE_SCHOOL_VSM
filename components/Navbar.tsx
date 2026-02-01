"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // Add background blur after scrolling a bit
      setScrolled(currentScrollY > 50);

      // Hide/show navbar based on scroll direction
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // Update ref without causing re-render
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array - effect only runs once on mount

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={clsx(
            "fixed top-4 left-4 right-4 z-50 max-w-5xl mx-auto transition-all duration-300 rounded-2xl",
            scrolled
              ? "backdrop-blur-lg bg-white/80 border border-white/20 shadow-2xl"
              : "backdrop-blur-md bg-white/60 border border-white/10 shadow-lg"
          )}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 sm:h-24">
              {/* Logo */}
              <Link href="/" className="flex items-center z-10">
                <Logo />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium text-zinc-700 hover:text-primary transition-colors duration-200 rounded-full group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </Link>
                ))}
                <Link
                  href="/login"
                  className="ml-2 px-6 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Student Login
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full text-zinc-700 hover:bg-white/50 transition-colors z-10"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden backdrop-blur-md bg-white/90 border-t border-white/20 rounded-b-2xl"
              >
                <div className="px-4 pt-2 pb-6 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-zinc-700 hover:bg-primary hover:text-white rounded-full transition-all duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <Link
                      href="/login"
                      className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-200 font-medium mt-4 shadow-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Student Login
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
