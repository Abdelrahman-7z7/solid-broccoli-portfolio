"use client";
import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navigation - Always visible */}
      <nav className={`mx-auto mt-4 max-w-5xl px-6 py-3 backdrop-blur-md bg-white/10 shadow-2xl rounded-2xl transition-all duration-300 hidden md:block ${
        isScrolled ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
      }`}>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold tracking-wide text-[#4A9782]">MyPortfolio</span>
          
          {/* Desktop Menu */}
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#FFF9E5] hover:text-[#4A9782] transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation - Visible when not scrolled */}
      {!isScrolled && (
        <nav className="mx-4 mt-4 px-6 py-4 backdrop-blur-md bg-white/10 shadow-2xl rounded-2xl transition-all duration-300 md:hidden">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold tracking-wide text-[#4A9782]">MyPortfolio</span>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-[#FFF9E5] hover:text-[#4A9782] hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="mt-6 pt-4 border-t border-[#DCD0A8]/20">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#FFF9E5] hover:text-[#4A9782] hover:bg-white/5 transition-all duration-200 font-medium block py-3 px-4 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      )}

      {/* Floating Icon with Dropdown - Mobile only when scrolled */}
      {isScrolled && (
        <div className="fixed top-4 right-4 z-50 md:hidden">
          <div className="relative">
            {/* Floating Button */}
            <button
              onClick={toggleDropdown}
              className="w-14 h-14 bg-white/10 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center text-[#FFF9E5] hover:text-[#4A9782] transition-all duration-200 hover:scale-110"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isDropdownOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-16 right-0 min-w-56 bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl border border-[#DCD0A8]/20 overflow-hidden">
                <div className="py-4">
                  <ul className="space-y-2">
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-[#FFF9E5] hover:text-[#4A9782] hover:bg-white/5 transition-all duration-200 font-medium block px-6 py-4"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
} 