import { useEffect, useState } from "react";
import logo from "../assets/logo/nova-logo.png";

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-nova-charcoal/95 shadow-lg backdrop-blur-md"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent"
      }`}
    >
      <nav className="nova-container flex h-20 items-center justify-between">
        
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="relative z-10 shrink-0"
          aria-label="NOVA Café & Restaurant home"
        >
          <img
            src={logo}
            alt="NOVA Café & Restaurant"
            className="h-11 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-2 text-sm font-medium tracking-wide text-white transition-colors duration-300"
            >
              {item.label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-nova-brown-light transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* CTA */}
          <a
            href="#reservation"
            className="ml-2 inline-flex items-center gap-2 bg-nova-brown px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:bg-nova-brown-light hover:text-nova-charcoal"
          >
            Book a Table
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="relative z-10 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-white transition-all duration-300 ${
                isMenuOpen
                  ? "top-2 rotate-45"
                  : "top-0"
              }`}
            />

            <span
              className={`absolute left-0 top-2 h-px w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 h-px w-6 bg-white transition-all duration-300 ${
                isMenuOpen
                  ? "top-2 -rotate-45"
                  : "top-4"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-nova-charcoal transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "max-h-[420px] border-t border-white/10"
            : "max-h-0"
        }`}
      >
        <div className="nova-container py-6">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${index * 60}ms`
                    : "0ms",
                }}
                className={`border-b border-white/10 py-5 font-display text-2xl text-white transition-all duration-500 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#reservation"
              onClick={closeMenu}
              className="mt-6 flex items-center justify-center bg-nova-brown px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-nova-brown-light hover:text-nova-charcoal"
            >
              Reserve a Table
              <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}