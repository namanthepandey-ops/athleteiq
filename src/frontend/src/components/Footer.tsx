import { Link } from "@tanstack/react-router";
import { Github, Heart, Instagram, Linkedin, Twitter, Zap } from "lucide-react";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/demo", label: "Demo" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="relative pt-16 pb-8 px-6"
      style={{
        background: "oklch(0.04 0.02 310)",
        borderTop: "1px solid oklch(0.62 0.31 328 / 0.25)",
        boxShadow: "0 -1px 40px oklch(0.62 0.31 328 / 0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap
                size={20}
                style={{
                  color: "oklch(0.62 0.31 328)",
                  filter: "drop-shadow(0 0 6px oklch(0.62 0.31 328))",
                }}
              />
              <span className="font-display font-bold text-lg text-shimmer">
                AthleteIQ
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.55 0.05 310)" }}
            >
              Train smarter. Move better. Win more.
              <br />
              AI-powered athletic training for the next generation.
            </p>
          </div>
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.62 0.31 328)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid="nav.link"
                    className="text-sm transition-colors duration-200 hover:text-foreground"
                    style={{ color: "oklch(0.50 0.05 310)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.62 0.31 328)" }}
            >
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-md transition-all duration-200"
                  style={{
                    border: "1px solid oklch(0.25 0.08 310)",
                    color: "oklch(0.50 0.05 310)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.62 0.31 328)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.62 0.31 328 / 0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 12px oklch(0.62 0.31 328 / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.50 0.05 310)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.25 0.08 310)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-sm" style={{ color: "oklch(0.50 0.05 310)" }}>
              hello@athleteiq.app
            </p>
          </div>
        </div>
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid oklch(0.20 0.06 310)",
            color: "oklch(0.40 0.04 310)",
          }}
        >
          <p>&copy; {year} AthleteIQ. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <Heart size={12} style={{ color: "oklch(0.62 0.31 328)" }} /> using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: "oklch(0.62 0.31 328)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
