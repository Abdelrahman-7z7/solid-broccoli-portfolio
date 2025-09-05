"use client";
import React, { useState, useEffect } from "react";

// --- FIXED: Changed to absolute paths ---
const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // --- NEW: State for active link highlighting ---
  const [activeSection, setActiveSection] = useState("/#home");

  useEffect(() => {
    const handleScroll = () => {
      // Logic for header visibility
      setIsScrolled(window.scrollY > 50);

      // --- NEW: Logic for active link highlighting ---
      let currentSection = "";
      NAV_LINKS.forEach(link => {
        // We get the ID from the href (e.g., "/#home" -> "home")
        const sectionId = link.href.split('#')[1];
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= window.scrollY + 150) {
            currentSection = link.href;
        }
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };


  // Helper component for nav links to avoid repetition
  const NavLink = ({ href, label }: { href: string, label: string }) => (
    <a
      href={href}
      // --- NEW: Conditional class for active state ---
      className={`transition-colors duration-200 font-medium ${
        activeSection === href 
          ? 'text-[#4A9782]' // Active color
          : 'text-[#FFF9E5] hover:text-[#4A9782]' // Default color
      }`}
      onClick={closeAllMenus}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navigation */}
      <nav className={`mx-auto mt-4 max-w-5xl px-6 py-3 backdrop-blur-md bg-white/10 shadow-2xl rounded-2xl transition-all duration-300 hidden md:block ${
        isScrolled ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
      }`}>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold tracking-wide text-[#4A9782]">MyPortfolio</span>
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}><NavLink href={link.href} label={link.label} /></li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation - Top Bar (when not scrolled) */}
      {!isScrolled && (
        <nav className="mx-4 mt-4 px-6 py-4 backdrop-blur-md bg-white/10 shadow-2xl rounded-2xl transition-all duration-300 md:hidden">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold tracking-wide text-[#4A9782]">MyPortfolio</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#FFF9E5] hover:text-[#4A9782] hover:bg-white/5 rounded-lg transition-all"
            >
              {/* SVG Icon */}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="mt-6 pt-4 border-t border-[#DCD0A8]/20">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="text-center">
                    <NavLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      )}

      {/* Floating Action Button - Mobile only (when scrolled) */}
      {isScrolled && (
        <div className="fixed top-4 right-4 z-50 md:hidden">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-14 h-14 bg-white/10 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center text-[#FFF9E5] hover:text-[#4A9782] transition-all hover:scale-110"
            >
              {/* SVG Icon */}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-16 right-0 min-w-56 bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl border border-[#DCD0A8]/20 overflow-hidden">
                <ul className="py-4 space-y-2">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}><NavLink href={link.href} label={link.label} /></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}