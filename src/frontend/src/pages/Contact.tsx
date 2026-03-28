import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, CheckCircle, ChevronDown, Mail } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const sports = [
  "Basketball",
  "Soccer",
  "Tennis",
  "Swimming",
  "Running",
  "Cycling",
  "Weightlifting",
  "CrossFit",
  "Martial Arts",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", sport: "" });
  const [sportOpen, setSportOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@athleteiq.app").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <section
        className="py-20 px-6 text-center relative"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.70 0.28 350 / 0.08) 0%, transparent 70%)",
        }}
      >
        <AnimatedSection>
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.62 0.31 328)" }}
          >
            Get AthleteIQ
          </p>
          <h1
            className="font-display font-extrabold mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "oklch(0.98 0.005 0)",
            }}
          >
            Be first to <span className="text-shimmer">train smarter</span>
          </h1>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "oklch(0.60 0.05 310)" }}
          >
            We're launching soon. Join the waitlist for early access, exclusive
            updates, and founding member perks.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-lg mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2
              className="font-display font-semibold text-2xl mb-2"
              style={{ color: "oklch(0.98 0.005 0)" }}
            >
              Available Soon
            </h2>
            <p className="text-sm" style={{ color: "oklch(0.55 0.05 310)" }}>
              We're launching soon. Be the first to know.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative">
                <button
                  type="button"
                  disabled
                  data-ocid="contact.button"
                  className="flex items-center gap-3 px-6 py-4 rounded-xl opacity-60 w-full sm:w-auto"
                  style={{
                    background: "oklch(0.08 0.02 310)",
                    border: "1px solid oklch(0.25 0.08 310)",
                    color: "oklch(0.88 0.03 310)",
                    cursor: "not-allowed",
                  }}
                >
                  <Apple size={28} />
                  <div className="text-left">
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.55 0.05 310)" }}
                    >
                      Download on the
                    </div>
                    <div className="font-display font-semibold text-base">
                      App Store
                    </div>
                  </div>
                </button>
                <span
                  className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    background: "oklch(0.62 0.31 328)",
                    color: "#000",
                    boxShadow: "0 0 10px oklch(0.62 0.31 328 / 0.6)",
                  }}
                >
                  Soon
                </span>
              </div>
              <div className="relative">
                <button
                  type="button"
                  disabled
                  data-ocid="contact.button"
                  className="flex items-center gap-3 px-6 py-4 rounded-xl opacity-60 w-full sm:w-auto"
                  style={{
                    background: "oklch(0.08 0.02 310)",
                    border: "1px solid oklch(0.25 0.08 310)",
                    color: "oklch(0.88 0.03 310)",
                    cursor: "not-allowed",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    role="img"
                    aria-label="Google Play"
                  >
                    <title>Google Play</title>
                    <path
                      d="M3.18 23.76c.28.16.6.24.93.2L14.72 12 3.1.04A1.5 1.5 0 003 .96v22.08c0 .26.06.5.18.72z"
                      fill="oklch(0.62 0.31 328)"
                    />
                    <path
                      d="M19.28 9.3l-2.82-1.62L13 12l3.46 4.32 2.82-1.62A2.47 2.47 0 0021 12.5a2.47 2.47 0 00-1.72-3.2z"
                      fill="oklch(0.70 0.28 350)"
                    />
                    <path
                      d="M3.18.24L13 12l3.46-4.32-10.68-6.13a1.5 1.5 0 00-2.6.69z"
                      fill="oklch(0.62 0.26 148)"
                    />
                    <path
                      d="M3.18 23.76L13 12 16.46 16.32 5.78 22.45a1.5 1.5 0 01-2.6-.69z"
                      fill="oklch(0.72 0.18 60)"
                    />
                  </svg>
                  <div className="text-left">
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.55 0.05 310)" }}
                    >
                      Get it on
                    </div>
                    <div className="font-display font-semibold text-base">
                      Google Play
                    </div>
                  </div>
                </button>
                <span
                  className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    background: "oklch(0.62 0.31 328)",
                    color: "#000",
                    boxShadow: "0 0 10px oklch(0.62 0.31 328 / 0.6)",
                  }}
                >
                  Soon
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section
        className="py-12 px-6"
        style={{ background: "oklch(0.04 0.015 310)" }}
      >
        <div className="max-w-lg mx-auto">
          <AnimatedSection className="text-center">
            <h2
              className="font-display font-semibold text-xl mb-4"
              style={{ color: "oklch(0.88 0.03 310)" }}
            >
              Get in touch
            </h2>
            <button
              type="button"
              onClick={copyEmail}
              data-ocid="contact.button"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-200"
              style={{
                background: "oklch(0.07 0.03 310)",
                border: "1px solid oklch(0.25 0.08 310)",
                color: copied ? "oklch(0.62 0.31 328)" : "oklch(0.78 0.04 310)",
              }}
            >
              {copied ? <CheckCircle size={18} /> : <Mail size={18} />}
              <span className="font-mono text-sm">
                {copied ? "Copied!" : "hello@athleteiq.app"}
              </span>
            </button>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2
              className="font-display font-bold text-3xl md:text-4xl mb-3"
              style={{ color: "oklch(0.98 0.005 0)" }}
            >
              Join the <span className="text-shimmer">Waitlist</span>
            </h2>
            <p className="text-sm" style={{ color: "oklch(0.55 0.05 310)" }}>
              We'll notify you the moment AthleteIQ launches \u2014 plus share
              exclusive early access.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{
                  background: "oklch(0.07 0.03 310)",
                  border: "1px solid oklch(0.62 0.31 328 / 0.4)",
                  boxShadow: "0 0 40px oklch(0.62 0.31 328 / 0.12)",
                }}
                data-ocid="contact.success_state"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "oklch(0.62 0.31 328 / 0.12)",
                    border: "1px solid oklch(0.62 0.31 328 / 0.4)",
                    animation: "glow-pulse 2s ease-in-out infinite",
                  }}
                >
                  <CheckCircle
                    size={32}
                    style={{ color: "oklch(0.62 0.31 328)" }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-2xl mb-3"
                  style={{ color: "oklch(0.98 0.005 0)" }}
                >
                  You're on the list!
                </h3>
                <p style={{ color: "oklch(0.62 0.05 310)" }}>
                  We'll notify you at launch at{" "}
                  <span style={{ color: "oklch(0.62 0.31 328)" }}>
                    {form.email}
                  </span>
                  .<br />
                  Get ready to train smarter. \ud83d\ude80
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8"
                style={{
                  background: "oklch(0.07 0.03 310)",
                  border: "1px solid oklch(0.25 0.08 310)",
                  boxShadow: "0 0 40px oklch(0.62 0.31 328 / 0.06)",
                }}
                data-ocid="contact.modal"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="wl-name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "oklch(0.75 0.05 310)" }}
                    >
                      Full Name *
                    </label>
                    <Input
                      id="wl-name"
                      required
                      placeholder="Alex Johnson"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      data-ocid="contact.input"
                      className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="wl-email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "oklch(0.75 0.05 310)" }}
                    >
                      Email Address *
                    </label>
                    <Input
                      id="wl-email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      data-ocid="contact.input"
                      className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="wl-sport"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "oklch(0.75 0.05 310)" }}
                    >
                      What sport do you play?
                    </label>
                    <div className="relative">
                      <button
                        id="wl-sport"
                        type="button"
                        onClick={() => setSportOpen((v) => !v)}
                        data-ocid="contact.select"
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-all duration-200"
                        style={{
                          background: "oklch(0.18 0.05 310)",
                          border: `1px solid ${sportOpen ? "oklch(0.62 0.31 328 / 0.5)" : "oklch(0.25 0.08 310)"}`,
                          color: form.sport
                            ? "oklch(0.88 0.03 310)"
                            : "oklch(0.50 0.05 310)",
                        }}
                      >
                        <span>{form.sport || "Select your sport"}</span>
                        <ChevronDown
                          size={16}
                          style={{
                            color: "oklch(0.50 0.05 310)",
                            transform: sportOpen
                              ? "rotate(180deg)"
                              : "rotate(0)",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      </button>
                      {sportOpen && (
                        <div
                          className="absolute top-full left-0 right-0 mt-1 rounded-md overflow-hidden z-30"
                          style={{
                            background: "oklch(0.10 0.04 310)",
                            border: "1px solid oklch(0.25 0.08 310)",
                            boxShadow: "0 8px 30px oklch(0 0 0 / 0.5)",
                          }}
                        >
                          {sports.map((s) => (
                            <button
                              key={s}
                              type="button"
                              className="w-full text-left px-3 py-2.5 text-sm transition-colors duration-150"
                              style={{ color: "oklch(0.75 0.05 310)" }}
                              onMouseEnter={(e) => {
                                (
                                  e.currentTarget as HTMLElement
                                ).style.background =
                                  "oklch(0.62 0.31 328 / 0.12)";
                                (e.currentTarget as HTMLElement).style.color =
                                  "oklch(0.62 0.31 328)";
                              }}
                              onMouseLeave={(e) => {
                                (
                                  e.currentTarget as HTMLElement
                                ).style.background = "transparent";
                                (e.currentTarget as HTMLElement).style.color =
                                  "oklch(0.75 0.05 310)";
                              }}
                              onClick={() => {
                                setForm((p) => ({ ...p, sport: s }));
                                setSportOpen(false);
                              }}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    className="w-full py-3 font-semibold text-base mt-2"
                    style={{
                      background: "oklch(0.62 0.31 328)",
                      color: "#000",
                      boxShadow: "0 0 20px oklch(0.62 0.31 328 / 0.4)",
                      border: "none",
                    }}
                  >
                    Join Waitlist \u2192
                  </Button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
