import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/translogo.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/calculator", label: "Loan Calculator" },
  { to: "/booking", label: "Book a Call" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/5 bg-[#111218]/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-20 w-auto" />
          <div className="leading-tight hidden sm:block">
            <div className="font-semibold text-base text-slate-100">
              Asthi Mortgage Group
            </div>
            <div className="text-xs text-slate-400">
              Home loans made simple
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "transition duration-200",
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn-primary">
            Free Consult
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ANIMATED MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-[#111218]/95 border-t border-white/5 pb-2"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-slate-200 border-b border-white/5 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/booking"
              className="block px-4 py-3 text-center bg-[#48297A] text-white rounded mt-2 mx-4"
              onClick={() => setOpen(false)}
            >
              Free Consult
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
