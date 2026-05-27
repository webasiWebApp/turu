import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css"; // Import the vanilla CSS styles

// Facebook Icon
function FacebookIcon({
  size = 20,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const programmeItems = [
  { label: "Japanese by TURU", href: "/japanese-by-turu" },
  { label: "Turu Cafe", href: "/turu-cafe" },
  { label: "MicroService", href: "/microservice" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [programmeOpen, setProgrammeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProgrammeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "#A0D585"
            : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.08)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35 }}
        className="turu-navbar"
      >
        <div className="turu-navbar__container">
          {/* Logo */}
          <Link to="/" className="turu-navbar__logo-link">
            <img
              src={logo}
              alt="Japanese by TURU"
              className="turu-navbar__logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="turu-navbar__desktop">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="turu-navbar__link"
              >
                {link.label}
              </Link>
            ))}

            {/* Programme Dropdown */}
            <div
              ref={dropdownRef}
              className="turu-navbar__dropdown-wrapper"
              onMouseEnter={() => setProgrammeOpen(true)}
              onMouseLeave={() => setProgrammeOpen(false)}
            >
              <button className="turu-navbar__dropdown-btn">
                Programme

                <motion.span
                  animate={{ rotate: programmeOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              <AnimatePresence>
                {programmeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.22 }}
                    className="turu-navbar__dropdown-menu"
                  >
                    {programmeItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          className="turu-navbar__dropdown-item"
                          onClick={() => setProgrammeOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="turu-navbar__mobile-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="turu-navbar__overlay"
              onClick={() => setMobileOpen(false)}
            />

            {/* Off Canvas */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              className="turu-navbar__offcanvas"
            >
              {/* Header */}
              <div className="turu-navbar__offcanvas-header">
                <img
                  src={logo}
                  alt="Japanese by TURU"
                  className="turu-navbar__offcanvas-logo"
                />

                <button
                  onClick={() => setMobileOpen(false)}
                  className="turu-navbar__offcanvas-close"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <nav className="turu-navbar__offcanvas-nav">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      className="turu-navbar__offcanvas-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Programme */}
                <MobileProgramme
                  onClose={() => setMobileOpen(false)}
                />
              </nav>

              {/* Footer */}
              <div className="turu-navbar__offcanvas-footer">
                <a
                  href="#"
                  className="turu-navbar__social-link"
                >
                  <FacebookIcon size={22} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= MOBILE PROGRAMME ================= */

function MobileProgramme({
  onClose,
}: {
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="turu-navbar__mobile-prog-btn"
      >
        Programme

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="turu-navbar__mobile-prog-menu"
          >
            {programmeItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.href}
                  className="turu-navbar__mobile-prog-item"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}