import { BarChart3, Bot, CheckCircle, Scan } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const features = [
  {
    icon: Scan,
    title: "Pose Analysis",
    tagline: "Surgical precision on every movement",
    desc: "AthleteIQ detects your skeleton in real time, measures joint angles and flags form deviations before they become injuries.",
    bullets: [
      "Real-time pose detection at 60fps",
      "Joint angle measurement to 0.5\u00b0",
      "Instant form correction alerts",
      "Comparison to elite athlete benchmarks",
    ],
    visual: "pose",
  },
  {
    icon: Bot,
    title: "AI Coaching",
    tagline: "Your personal coach, available 24/7",
    desc: "Our AI coach learns your strengths and goals, builds personalized programs that adapt in real time, and delivers voice feedback mid-session.",
    bullets: [
      "Personalized adaptive training plans",
      "Dynamic difficulty scaling",
      "Voice feedback during workouts",
      "Weekly progress insights & reports",
    ],
    visual: "ai",
  },
  {
    icon: BarChart3,
    title: "Metrics Tracking",
    tagline: "Data that drives decisions",
    desc: "Track over 150 performance metrics across speed, strength, endurance and technique. Set goals, hit milestones, and share your journey.",
    bullets: [
      "150+ tracked performance metrics",
      "Historical trend analysis",
      "Goal setting & milestone tracking",
      "Export & share your data",
    ],
    visual: "metrics",
  },
];

const JOINTS = [
  { x: 50, y: 10, r: 5 },
  { x: 50, y: 25, r: 4 },
  { x: 35, y: 30, r: 4 },
  { x: 65, y: 30, r: 4 },
  { x: 28, y: 45, r: 3.5 },
  { x: 72, y: 45, r: 3.5 },
  { x: 25, y: 58, r: 3 },
  { x: 75, y: 58, r: 3 },
  { x: 50, y: 50, r: 4 },
  { x: 40, y: 68, r: 4 },
  { x: 60, y: 68, r: 4 },
  { x: 38, y: 84, r: 3.5 },
  { x: 62, y: 84, r: 3.5 },
];
const BONES = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [4, 6],
  [3, 5],
  [5, 7],
  [1, 8],
  [8, 9],
  [8, 10],
  [9, 11],
  [10, 12],
];
const BONE_KEYS = BONES.map(([a, b]) => `${a}-${b}`);

function PoseVisual() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      role="img"
      aria-label="Neon skeleton pose visualization"
      style={{ filter: "drop-shadow(0 0 8px oklch(0.62 0.31 328 / 0.6))" }}
    >
      <title>Pose skeleton visualization</title>
      {BONES.map(([a, b], i) => (
        <line
          key={BONE_KEYS[i]}
          x1={`${JOINTS[a].x}%`}
          y1={`${JOINTS[a].y}%`}
          x2={`${JOINTS[b].x}%`}
          y2={`${JOINTS[b].y}%`}
          stroke="oklch(0.62 0.31 328 / 0.7)"
          strokeWidth="1.2"
        />
      ))}
      {JOINTS.map((j) => (
        <circle
          key={`j-${j.x}-${j.y}`}
          cx={`${j.x}%`}
          cy={`${j.y}%`}
          r={j.r}
          fill="oklch(0.62 0.31 328)"
          style={{ filter: "drop-shadow(0 0 3px oklch(0.62 0.31 328))" }}
        />
      ))}
      <text
        x="63%"
        y="73%"
        fill="oklch(0.70 0.28 350)"
        fontSize="4"
        fontFamily="Satoshi, sans-serif"
      >
        142\u00b0
      </text>
    </svg>
  );
}

const AI_MESSAGES = [
  { id: "m1", text: "Analyzing your squat form...", side: "ai" },
  {
    id: "m2",
    text: "Left knee tracking inside \u2014 adjust foot angle.",
    side: "ai",
  },
  { id: "m3", text: "Got it! Correcting...", side: "user" },
  { id: "m4", text: "Great. Hip depth improved 18% this session.", side: "ai" },
];

function AIVisual() {
  return (
    <div className="flex flex-col gap-3 p-4 h-full justify-center">
      {AI_MESSAGES.map((m) => (
        <div
          key={m.id}
          className={`flex ${m.side === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className="px-3 py-2 rounded-xl text-xs max-w-[85%] leading-relaxed"
            style={
              m.side === "ai"
                ? {
                    background: "oklch(0.12 0.04 310)",
                    border: "1px solid oklch(0.30 0.10 310)",
                    color: "oklch(0.62 0.31 328)",
                  }
                : {
                    background: "oklch(0.62 0.31 328 / 0.15)",
                    border: "1px solid oklch(0.62 0.31 328 / 0.4)",
                    color: "oklch(0.88 0.05 310)",
                  }
            }
          >
            {m.text}
          </div>
        </div>
      ))}
    </div>
  );
}

const METRIC_BARS = [
  { label: "Speed", pct: 82, color: "oklch(0.62 0.31 328)" },
  { label: "Power", pct: 68, color: "oklch(0.70 0.28 350)" },
  { label: "Endurance", pct: 75, color: "oklch(0.45 0.22 310)" },
  { label: "Form", pct: 91, color: "oklch(0.62 0.31 328)" },
  { label: "Recovery", pct: 58, color: "oklch(0.55 0.25 290)" },
];

function MetricsVisual() {
  return (
    <div className="flex flex-col gap-4 p-4 justify-center h-full">
      {METRIC_BARS.map((b) => (
        <div key={b.label}>
          <div className="flex justify-between text-xs mb-1">
            <span style={{ color: "oklch(0.65 0.05 310)" }}>{b.label}</span>
            <span style={{ color: b.color }}>{b.pct}%</span>
          </div>
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ background: "oklch(0.15 0.04 310)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${b.pct}%`,
                background: b.color,
                boxShadow: `0 0 8px ${b.color}`,
                transition: "width 1.2s ease",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section
        className="py-20 px-6 text-center relative"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.62 0.31 328 / 0.08) 0%, transparent 70%)",
        }}
      >
        <AnimatedSection>
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.62 0.31 328)" }}
          >
            Platform Features
          </p>
          <h1
            className="font-display font-extrabold mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "oklch(0.98 0.005 0)",
            }}
          >
            Built for <span className="text-shimmer">peak performance</span>
          </h1>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: "oklch(0.62 0.31 328)",
              boxShadow: "0 0 16px oklch(0.62 0.31 328 / 0.6)",
            }}
          />
        </AnimatedSection>
      </section>

      {features.map((feat, idx) => {
        const Icon = feat.icon;
        const isEven = idx % 2 === 0;
        const visual =
          feat.visual === "pose" ? (
            <PoseVisual />
          ) : feat.visual === "ai" ? (
            <AIVisual />
          ) : (
            <MetricsVisual />
          );
        return (
          <section
            key={feat.title}
            className="py-24 px-6"
            style={{
              background:
                idx % 2 === 1 ? "oklch(0.04 0.015 310)" : "transparent",
            }}
          >
            <div className="max-w-6xl mx-auto">
              <div
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-20 items-center`}
              >
                <AnimatedSection className="w-full md:w-1/2" delay={100}>
                  <div
                    className="aspect-square max-w-sm mx-auto rounded-2xl p-8"
                    style={{
                      background: "oklch(0.07 0.03 310)",
                      border: "1px solid oklch(0.25 0.08 310)",
                      boxShadow: "0 0 40px oklch(0.62 0.31 328 / 0.08)",
                    }}
                  >
                    {visual}
                  </div>
                </AnimatedSection>
                <AnimatedSection className="w-full md:w-1/2" delay={200}>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold mb-6"
                    style={{
                      background: "oklch(0.62 0.31 328 / 0.1)",
                      border: "1px solid oklch(0.62 0.31 328 / 0.3)",
                      color: "oklch(0.62 0.31 328)",
                    }}
                  >
                    <Icon size={14} /> {feat.tagline}
                  </div>
                  <h2
                    className="font-display font-bold text-3xl md:text-4xl mb-4"
                    style={{ color: "oklch(0.98 0.005 0)" }}
                  >
                    {feat.title}
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-8"
                    style={{ color: "oklch(0.62 0.06 310)" }}
                  >
                    {feat.desc}
                  </p>
                  <ul className="space-y-3">
                    {feat.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
                        <CheckCircle
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "oklch(0.62 0.31 328)" }}
                        />
                        <span style={{ color: "oklch(0.78 0.04 310)" }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
