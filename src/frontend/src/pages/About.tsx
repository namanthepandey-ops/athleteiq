import AnimatedSection from "../components/AnimatedSection";

const team = [
  {
    initials: "N",
    name: "Naman",
    title: "Co-founder & CEO",
    bio: "Passionate about sports science and AI. Believes every athlete deserves access to world-class coaching technology.",
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.31 328), oklch(0.45 0.22 310))",
  },
  {
    initials: "J",
    name: "Jordan",
    title: "Co-founder & CTO",
    bio: "Building the future of athletic technology. Specializes in computer vision, machine learning, and real-time inference systems.",
    gradient:
      "linear-gradient(135deg, oklch(0.45 0.22 310), oklch(0.70 0.28 350))",
  },
];

const stats = [
  {
    stat: "95%",
    label: "of athletes train without professional form guidance",
  },
  { stat: "$200/hr", label: "average cost of a qualified biomechanics coach" },
  {
    stat: "3\u00d7",
    label: "higher injury rate when training without feedback",
  },
];

const storyParas = [
  {
    id: "s1",
    text: "It started with a torn ACL. Naman had been training hard for two years \u2014 squatting, sprinting, grinding \u2014 with no idea his knee alignment was slowly creating a ticking time bomb. The surgery and recovery lasted eight months. The insight that could have prevented it? A 30-second pose analysis.",
  },
  {
    id: "s2",
    text: "That experience sparked a simple question: why does AI-powered movement analysis exist for professional sports teams but not for the 300 million recreational athletes who need it most? The barrier was cost, accessibility, and ease of use.",
  },
  {
    id: "s3",
    text: "AthleteIQ was built to tear down that barrier. We combine state-of-the-art computer vision with an adaptive AI coaching engine \u2014 making it accessible to anyone with a smartphone. From elite prep athletes to weekend runners, every body deserves a world-class coach.",
  },
];

export default function About() {
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
            Our Mission
          </p>
          <h1
            className="font-display font-extrabold mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "oklch(0.98 0.005 0)",
            }}
          >
            Democratizing <span className="text-shimmer">elite coaching</span>
          </h1>
          <p
            className="max-w-xl mx-auto text-lg"
            style={{ color: "oklch(0.60 0.05 310)" }}
          >
            We believe every athlete \u2014 from weekend warriors to aspiring
            professionals \u2014 deserves the same data-driven insights that top
            sports organizations use.
          </p>
        </AnimatedSection>
      </section>

      <section
        className="py-20 px-6"
        style={{ background: "oklch(0.04 0.015 310)" }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.62 0.31 328)" }}
            >
              The Problem
            </p>
            <h2
              className="font-display font-bold text-3xl md:text-4xl mb-8"
              style={{ color: "oklch(0.98 0.005 0)" }}
            >
              Athletes train harder than ever. But most are training blind.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <blockquote
              className="font-display text-2xl md:text-3xl font-medium leading-relaxed mb-10 pl-6 italic"
              style={{
                color: "oklch(0.82 0.08 310)",
                borderLeft: "3px solid oklch(0.62 0.31 328)",
              }}
            >
              \u201c95% of athletes never receive professional form analysis.
              The ones who do pay thousands of dollars for access that should be
              universal.\u201d
            </blockquote>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.stat}
                  className="rounded-xl p-6 text-center"
                  style={{
                    background: "oklch(0.07 0.03 310)",
                    border: "1px solid oklch(0.25 0.08 310)",
                  }}
                >
                  <div className="font-display font-extrabold text-4xl mb-2 text-shimmer">
                    {s.stat}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.60 0.05 310)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.62 0.31 328)" }}
            >
              Our Story
            </p>
            <h2
              className="font-display font-bold text-3xl md:text-4xl mb-8"
              style={{ color: "oklch(0.98 0.005 0)" }}
            >
              From frustration to breakthrough
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {storyParas.map((para) => (
              <AnimatedSection key={para.id}>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "oklch(0.68 0.04 310)" }}
                >
                  {para.text}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6"
        style={{ background: "oklch(0.04 0.015 310)" }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.62 0.31 328)" }}
            >
              The Team
            </p>
            <h2
              className="font-display font-bold text-3xl md:text-4xl"
              style={{ color: "oklch(0.98 0.005 0)" }}
            >
              The minds behind <span className="text-shimmer">AthleteIQ</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 150}>
                <div
                  className="glow-box-hover rounded-2xl p-8 text-center"
                  style={{
                    background: "oklch(0.07 0.03 310)",
                    border: "1px solid oklch(0.25 0.08 310)",
                  }}
                  data-ocid={`team.card.${i + 1}`}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 font-display font-bold text-2xl"
                    style={{
                      background: member.gradient,
                      color: "#000",
                      boxShadow: "0 0 20px oklch(0.62 0.31 328 / 0.3)",
                    }}
                  >
                    {member.initials}
                  </div>
                  <h3
                    className="font-display font-bold text-xl mb-1"
                    style={{ color: "oklch(0.98 0.005 0)" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: "oklch(0.62 0.31 328)" }}
                  >
                    {member.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.58 0.05 310)" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
