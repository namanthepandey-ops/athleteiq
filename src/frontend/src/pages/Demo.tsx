import { ArrowRight, Play } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const aiFeedback = [
  {
    id: 1,
    icon: "\u26a1",
    text: "Your left knee is 12\u00b0 off optimal angle during the squat descent. Try widening your stance by 3cm.",
  },
  {
    id: 2,
    icon: "\ud83d\udcc8",
    text: "Stride efficiency improved 23% this week. Your cadence is now within elite range for your distance.",
  },
  {
    id: 3,
    icon: "\ud83c\udfaf",
    text: "Core engagement during overhead press is 31% below target. Brace before initiating the lift.",
  },
  {
    id: 4,
    icon: "\ud83c\udfc6",
    text: "New personal best detected: vertical jump +4.2cm vs last month. Training plan updated to reflect progress.",
  },
];

export default function Demo() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section
        className="py-20 px-6 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.45 0.22 310 / 0.10) 0%, transparent 70%)",
        }}
      >
        <AnimatedSection>
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.62 0.31 328)" }}
          >
            Live Demo
          </p>
          <h1
            className="font-display font-extrabold mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "oklch(0.98 0.005 0)",
            }}
          >
            See AthleteIQ <span className="text-shimmer">in Action</span>
          </h1>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "oklch(0.60 0.05 310)" }}
          >
            Watch the AI analyze movement in real time and deliver coaching
            feedback that would normally take a personal trainer hours to
            compile.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "16/9",
                background: "oklch(0.06 0.03 310)",
                border: "1px solid oklch(0.62 0.31 328 / 0.3)",
                boxShadow: "0 0 60px oklch(0.62 0.31 328 / 0.15)",
              }}
              data-ocid="demo.canvas_target"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0 0 0 / 0.03) 2px, oklch(0 0 0 / 0.03) 4px)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.62 0.31 328 / 0.15)",
                    border: "2px solid oklch(0.62 0.31 328 / 0.6)",
                    boxShadow: "0 0 30px oklch(0.62 0.31 328 / 0.4)",
                    animation: "glow-pulse 3s ease-in-out infinite",
                  }}
                >
                  <Play
                    size={28}
                    style={{ color: "oklch(0.62 0.31 328)", marginLeft: 4 }}
                  />
                </div>
                <div className="text-center">
                  <p
                    className="font-display font-semibold text-lg mb-1"
                    style={{ color: "oklch(0.88 0.03 310)" }}
                  >
                    Demo Video Coming Soon
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.50 0.06 310)" }}
                  >
                    Join the waitlist to get early access and be the first to
                    see it.
                  </p>
                </div>
              </div>
              <div
                className="absolute top-4 left-4 w-8 h-8"
                style={{
                  borderTop: "2px solid oklch(0.62 0.31 328 / 0.5)",
                  borderLeft: "2px solid oklch(0.62 0.31 328 / 0.5)",
                }}
              />
              <div
                className="absolute top-4 right-4 w-8 h-8"
                style={{
                  borderTop: "2px solid oklch(0.62 0.31 328 / 0.5)",
                  borderRight: "2px solid oklch(0.62 0.31 328 / 0.5)",
                }}
              />
              <div
                className="absolute bottom-4 left-4 w-8 h-8"
                style={{
                  borderBottom: "2px solid oklch(0.62 0.31 328 / 0.5)",
                  borderLeft: "2px solid oklch(0.62 0.31 328 / 0.5)",
                }}
              />
              <div
                className="absolute bottom-4 right-4 w-8 h-8"
                style={{
                  borderBottom: "2px solid oklch(0.62 0.31 328 / 0.5)",
                  borderRight: "2px solid oklch(0.62 0.31 328 / 0.5)",
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section
        className="py-20 px-6"
        style={{ background: "oklch(0.04 0.015 310)" }}
      >
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="font-display font-bold text-3xl md:text-4xl"
              style={{ color: "oklch(0.98 0.005 0)" }}
            >
              The <span className="text-shimmer">AthleteIQ</span> Difference
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
              style={{ border: "1px solid oklch(0.25 0.08 310)" }}
            >
              <div
                className="p-8"
                style={{
                  background: "oklch(0.06 0.02 310)",
                  borderRight: "1px solid oklch(0.25 0.08 310 / 0.5)",
                }}
              >
                <div
                  className="inline-block px-3 py-1 rounded text-xs font-bold mb-4 uppercase tracking-widest"
                  style={{
                    background: "oklch(0.45 0.12 30 / 0.15)",
                    color: "oklch(0.72 0.18 30)",
                    border: "1px solid oklch(0.45 0.12 30 / 0.3)",
                  }}
                >
                  Before
                </div>
                <h3
                  className="font-display font-semibold text-xl mb-4"
                  style={{ color: "oklch(0.88 0.03 310)" }}
                >
                  Training without AthleteIQ
                </h3>
                <ul
                  className="space-y-3 text-sm"
                  style={{ color: "oklch(0.55 0.05 310)" }}
                >
                  {[
                    "Manual guesswork on form and technique",
                    "Inconsistent results week to week",
                    "No real-time feedback during workouts",
                    "Expensive personal trainer dependency",
                    "Injury risk from undetected form issues",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: "oklch(0.60 0.15 30)" }}>
                        \u2715
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="p-8 relative"
                style={{ background: "oklch(0.07 0.03 310)" }}
              >
                <div
                  className="inline-block px-3 py-1 rounded text-xs font-bold mb-4 uppercase tracking-widest"
                  style={{
                    background: "oklch(0.62 0.31 328 / 0.12)",
                    color: "oklch(0.62 0.31 328)",
                    border: "1px solid oklch(0.62 0.31 328 / 0.3)",
                  }}
                >
                  After
                </div>
                <h3
                  className="font-display font-semibold text-xl mb-4"
                  style={{ color: "oklch(0.98 0.005 0)" }}
                >
                  Training with AthleteIQ
                </h3>
                <ul
                  className="space-y-3 text-sm"
                  style={{ color: "oklch(0.70 0.05 310)" }}
                >
                  {[
                    "AI-guided precision on every movement",
                    "Measurable, consistent weekly gains",
                    "Live coaching feedback during each rep",
                    "Pro-level insights at zero extra cost",
                    "Proactive injury prevention built in",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: "oklch(0.62 0.31 328)" }}>
                        \u2713
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <ArrowRight
                  className="absolute top-1/2 -left-5 -translate-y-1/2 hidden md:block"
                  size={24}
                  style={{
                    color: "oklch(0.62 0.31 328)",
                    filter: "drop-shadow(0 0 6px oklch(0.62 0.31 328))",
                  }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2
              className="font-display font-bold text-3xl md:text-4xl mb-4"
              style={{ color: "oklch(0.98 0.005 0)" }}
            >
              Sample AI <span className="text-shimmer">Coaching Feedback</span>
            </h2>
            <p style={{ color: "oklch(0.60 0.05 310)" }}>
              This is what your AI coach delivers after every session.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.05 0.025 310)",
                border: "1px solid oklch(0.62 0.31 328 / 0.25)",
                boxShadow: "0 0 40px oklch(0.62 0.31 328 / 0.10)",
              }}
              data-ocid="demo.panel"
            >
              <div
                className="flex items-center gap-2 px-5 py-3"
                style={{
                  background: "oklch(0.08 0.03 310)",
                  borderBottom: "1px solid oklch(0.25 0.08 310 / 0.6)",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "oklch(0.65 0.18 30)" }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "oklch(0.72 0.14 80)" }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "oklch(0.62 0.31 328)" }}
                />
                <span
                  className="ml-3 text-xs font-mono"
                  style={{ color: "oklch(0.45 0.06 310)" }}
                >
                  athleteiq-coach \u2014 session-2026-03-27
                </span>
              </div>
              <div className="p-6 space-y-5">
                {aiFeedback.map((msg, i) => (
                  <div
                    key={msg.id}
                    className="flex items-start gap-3"
                    style={{
                      animation: `message-appear 0.5s ease ${i * 0.2}s both`,
                    }}
                    data-ocid={`demo.item.${msg.id}`}
                  >
                    <span className="text-xl flex-shrink-0 mt-0.5">
                      {msg.icon}
                    </span>
                    <div
                      className="flex-1 text-sm leading-relaxed font-mono"
                      style={{ color: "oklch(0.62 0.31 328)" }}
                    >
                      <span
                        className="text-xs mr-2"
                        style={{ color: "oklch(0.40 0.06 310)" }}
                      >
                        COACH &gt;
                      </span>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-2 mt-2 pl-9">
                  <span
                    className="text-xs font-mono"
                    style={{ color: "oklch(0.40 0.06 310)" }}
                  >
                    COACH &gt;
                  </span>
                  <span className="terminal-cursor" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
