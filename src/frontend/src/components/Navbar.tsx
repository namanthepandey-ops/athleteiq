import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/demo", label: "Demo" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.6)",
        backdropFilter: `blur(${scrolled ? "20px" : "12px"})`,
        borderBottom: `1px solid oklch(0.62 0.31 328 / ${scrolled ? "0.35" : "0.15"})`,
        boxShadow: scrolled ? "0 0 30px oklch(0.62 0.31 328 / 0.10)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 no-underline"
          data-ocid="nav.link"
        >
          <Zap
            size={22}
            style={{
              color: "oklch(0.62 0.31 328)",
              filter: "drop-shadow(0 0 6px oklch(0.62 0.31 328))",
            }}
          />
          <span
            className="font-display font-bold text-xl text-shimmer"
            style={{ letterSpacing: "-0.02em" }}
          >
            AthleteIQ
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(link.to) ? "" : "text-foreground/60 hover:text-foreground/90"}`}
              style={
                isActive(link.to)
                  ? {
                      color: "oklch(0.62 0.31 328)",
                      textShadow: "0 0 12px oklch(0.62 0.31 328 / 0.8)",
                    }
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            data-ocid="nav.primary_button"
            className="ml-3 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{
              background: "oklch(0.62 0.31 328)",
              color: "#000",
              boxShadow: "0 0 16px oklch(0.62 0.31 328 / 0.4)",
            }}
          >
            Get Access
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 rounded-md transition-colors"
          style={{ color: "oklch(0.62 0.31 328)" }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div
          className="md:hidden px-6 pb-5 pt-2"
          style={{
            background: "rgba(0,0,0,0.95)",
            animation: "slide-down 0.25s ease forwards",
            borderTop: "1px solid oklch(0.62 0.31 328 / 0.2)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              data-ocid="nav.link"
              className={`block py-3 text-base font-medium border-b transition-all duration-200 ${isActive(link.to) ? "" : "text-foreground/60 hover:text-foreground/90"}`}
              style={
                isActive(link.to)
                  ? {
                      color: "oklch(0.62 0.31 328)",
                      textShadow: "0 0 10px oklch(0.62 0.31 328 / 0.6)",
                      borderColor: "oklch(0.62 0.31 328 / 0.2)",
                    }
                  : { borderColor: "oklch(0.25 0.08 310 / 0.4)" }
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
