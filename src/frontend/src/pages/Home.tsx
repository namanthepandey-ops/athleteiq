import { Link } from "@tanstack/react-router";
import { Activity, ArrowDown, Brain, ChevronRight, Target } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const features = [
  {
    icon: Brain,
    title: "Pose Analysis",
    desc: "Real-time AI skeleton tracking that measures every joint angle and flags form errors instantly.",
  },
  {
    icon: Activity,
    title: "AI Coaching",
    desc: "Adaptive training plans that evolve with your progress \u2014 like having a pro coach in your pocket.",
  },
  {
    icon: Target,
    title: "Performance Metrics",
    desc: "150+ tracked metrics with historical trends, goal milestones, and shareable progress reports.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.62 0.31 328 / 0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "oklch(0.62 0.31 328 / 0.05)",
            filter: "blur(80px)",
            top: "10%",
            left: "10%",
            animation: "orb-move-1 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "oklch(0.45 0.22 310 / 0.06)",
            filter: "blur(60px)",
            bottom: "20%",
            right: "15%",
            animation: "orb-move-2 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "oklch(0.70 0.28 350 / 0.05)",
            filter: "blur(50px)",
            top: "60%",
            left: "60%",
            animation: "orb-move-3 20s ease-in-out infinite",
          }}
        />

        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
          style={{
            border: "1px solid oklch(0.62 0.31 328 / 0.4)",
            color: "oklch(0.62 0.31 328)",
            background: "oklch(0.62 0.31 328 / 0.08)",
            animation: "fade-slide-up 0.6s ease 0.1s both",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "oklch(0.62 0.31 328)",
              display: "inline-block",
              animation: "glow-pulse 2s ease-in-out infinite",
            }}
          />
          AI-Powered Athletic Training \u00b7 Early Access
        </div>

        <h1
          className="font-display font-extrabold leading-none tracking-tight mb-6 max-w-4xl"
          style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
        >
          <span
            className="block"
            style={{
              animation: "fade-slide-up 0.7s ease 0.2s both",
              color: "oklch(0.98 0.005 0)",
            }}
          >
            Train smarter.
          </span>
          <span
            className="block text-shimmer"
            style={{ animation: "fade-slide-up 0.7s ease 0.35s both" }}
          >
            Move better.
          </span>
          <span
            className="block"
            style={{
              animation: "fade-slide-up 0.7s ease 0.5s both",
              color: "oklch(0.98 0.005 0)",
            }}
          >
            Win more.
          </span>
        </h1>

        <p
          className="max-w-xl text-lg md:text-xl mb-10 leading-relaxed"
          style={{
            color: "oklch(0.65 0.06 310)",
            animation: "fade-slide-up 0.7s ease 0.65s both",
          }}
        >
          AI-powered athletic training for the next generation. Real-time pose
          analysis, adaptive coaching, and pro-level insights \u2014 for
          everyone.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: "fade-slide-up 0.7s ease 0.8s both" }}
        >
          <Link
            to="/contact"
            data-ocid="home.primary_button"
            className="px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 flex items-center gap-2"
            style={{
              background: "oklch(0.62 0.31 328)",
              color: "#000",
              boxShadow: "0 0 24px oklch(0.62 0.31 328 / 0.5)",
            }}
          >
            Get Early Access <ChevronRight size={18} />
          </Link>
          <Link
            to="/demo"
            data-ocid="home.secondary_button"
            className="px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300"
            style={{
              border: "1px solid oklch(0.62 0.31 328 / 0.5)",
              color: "oklch(0.62 0.31 328)",
            }}
          >
            Watch Demo
          </Link>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            color: "oklch(0.45 0.10 310)",
            animation: "fade-in 1s ease 1.4s both",
          }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown
            size={16}
            style={{ animation: "bounce-arrow 1.5s ease-in-out infinite" }}
          />
        </div>
      </section>

      <section
        className="py-24 px-6"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, oklch(0.10 0.03 310 / 0.5) 0%, transparent 70%)",
        }}
      >
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p
            className="text-base uppercase tracking-widest mb-4 font-semibold"
            style={{ color: "oklch(0.62 0.31 328)" }}
          >
            What is AthleteIQ?
          </p>
          <p
            className="font-display text-2xl md:text-3xl font-medium leading-relaxed"
            style={{ color: "oklch(0.88 0.03 310)" }}
          >
            AthleteIQ is an AI-powered training platform that analyzes your
            movement in real time, coaches you through every rep, and tracks
            progress with the precision of a professional sports science lab
            \u2014 all from your smartphone.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2
              className="font-display font-bold text-3xl md:text-4xl mb-4"
              style={{ color: "oklch(0.98 0.005 0)" }}
            >
              Everything you need to{" "}
              <span className="text-shimmer">perform at your best</span>
            </h2>
            <p style={{ color: "oklch(0.60 0.05 310)" }}>
              Three pillars that power elite-level training for every athlete.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimatedSection key={f.title} delay={i * 120}>
                  <div
                    className="glow-box-hover rounded-xl p-8 h-full flex flex-col"
                    style={{
                      background: "oklch(0.08 0.02 310)",
                      border: "1px solid oklch(0.25 0.08 310)",
                    }}
                    data-ocid={`features.card.${i + 1}`}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                      style={{
                        background: "oklch(0.62 0.31 328 / 0.12)",
                        border: "1px solid oklch(0.62 0.31 328 / 0.3)",
                        color: "oklch(0.62 0.31 328)",
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3
                      className="font-display font-semibold text-xl mb-3"
                      style={{ color: "oklch(0.98 0.005 0)" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: "oklch(0.60 0.05 310)" }}
                    >
                      {f.desc}
                    </p>
                    <div
                      className="mt-6 flex items-center gap-1 text-sm font-medium"
                      style={{ color: "oklch(0.62 0.31 328)" }}
                    >
                      Learn more <ChevronRight size={14} />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-28 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, oklch(0.62 0.31 328 / 0.08) 0%, transparent 70%)",
        }}
      >
        <AnimatedSection>
          <h2
            className="font-display font-extrabold text-4xl md:text-5xl mb-6"
            style={{ color: "oklch(0.98 0.005 0)" }}
          >
            Ready to elevate <span className="text-shimmer">your game?</span>
          </h2>
          <p
            className="mb-10 text-lg"
            style={{ color: "oklch(0.60 0.05 310)" }}
          >
            Join thousands of athletes already training smarter with AthleteIQ.
          </p>
          <Link
            to="/contact"
            data-ocid="home.primary_button"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:opacity-90"
            style={{
              background: "oklch(0.62 0.31 328)",
              color: "#000",
              boxShadow: "0 0 30px oklch(0.62 0.31 328 / 0.5)",
            }}
          >
            Start Training Smarter <ChevronRight size={20} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
