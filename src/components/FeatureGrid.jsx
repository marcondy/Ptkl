import { motion } from 'framer-motion';

const features = [
  {
    title: "Visual Protocol Planner",
    description: "Map out complex stacks and cycles with an intuitive timeline interface. Never miss a dose or lose track of your schedule.",
    icon: "timeline"
  },
  {
    title: "100% Offline Privacy",
    description: "Sovereign Logging. Your data never touches a server. Everything is encrypted and stored locally on your device by default.",
    icon: "shield"
  },
  {
    title: "Integrated Workout Tracker",
    description: "Seamlessly link your training routines with your protocols to visualize the direct correlation between input and output.",
    icon: "activity"
  },
  {
    title: "Dose Calculator",
    description: "Built-in precision tooling to calculate half-lives, titrations, and optimal dosing schedules automatically.",
    icon: "calculator"
  },
  {
    title: "Body-Map Tracking",
    description: "Pinpoint injection sites, track soreness, or log targeted physiological responses directly on an interactive body map.",
    icon: "body"
  },
  {
    title: "Universal Sharing",
    description: "Export protocols instantly as standard text formats. Share cleanly without compromising your privacy or formatting.",
    icon: "share"
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-[var(--color-hyperia-surface)] border-t border-[var(--color-hyperia-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[var(--color-hyperia-teal)] mono-label mb-4">SYSTEM CAPABILITIES</h2>
          <h3 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
            The Ultimate Optimization Toolkit
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-dark p-8 hover:border-[var(--color-hyperia-teal)]/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-hyperia-teal)]/10 group-hover:border-[var(--color-hyperia-teal)]/30 transition-colors">
                <div className="w-6 h-6 bg-[var(--color-hyperia-text)] group-hover:bg-[var(--color-hyperia-teal)]" style={{ maskImage: 'url(https://api.iconify.design/lucide/cpu.svg)', maskSize: 'cover', WebkitMaskImage: 'url(https://api.iconify.design/lucide/cpu.svg)', WebkitMaskSize: 'cover' }}></div>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
              <p className="text-[var(--color-hyperia-text-dim)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
