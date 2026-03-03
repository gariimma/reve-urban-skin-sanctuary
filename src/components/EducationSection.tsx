import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Droplets, Sun, Sparkles, Zap, Heart } from "lucide-react";
import skinTexture from "@/assets/skin-texture.jpg";

const pillars = [
  {
    icon: Shield,
    title: "Barrier Defense",
    short: "Biomimetic ceramides reinforce your natural lipid structure.",
    detail:
      "Our ceramide complex mirrors the exact ratio found in healthy skin barriers. In clinical trials, participants saw a measurable improvement in transepidermal water loss within 14 days.",
    stat: "94%",
    statLabel: "barrier improvement",
  },
  {
    icon: Zap,
    title: "Antioxidant Power",
    short: "Astaxanthin delivers 6,000x more free-radical protection than vitamin C.",
    detail:
      "Sourced from micro-algae, astaxanthin crosses the cell membrane to neutralize oxidative stress on both sides. It works synergistically with vitamin E to prevent lipid peroxidation.",
    stat: "6,000×",
    statLabel: "vs vitamin C",
  },
  {
    icon: Droplets,
    title: "Deep Hydration",
    short: "Multi-weight hyaluronic acid draws moisture into every skin layer.",
    detail:
      "Three molecular weights target different depths: high-weight forms a surface film, medium-weight plumps the mid-dermis, and low-weight penetrates deep for lasting hydration.",
    stat: "72hr",
    statLabel: "moisture retention",
  },
  {
    icon: Sun,
    title: "Blue Light Shield",
    short: "Proprietary filter complex neutralises HEV light from screens.",
    detail:
      "Our filter absorbs high-energy visible light in the 400-450nm range, preventing the oxidative cascade that leads to hyperpigmentation and collagen degradation.",
    stat: "97%",
    statLabel: "HEV neutralised",
  },
  {
    icon: Heart,
    title: "Microbiome Care",
    short: "Pre- and postbiotics nourish beneficial skin bacteria.",
    detail:
      "A balanced microbiome is the first line of defense. Our fermented rice extract feeds beneficial bacteria while postbiotic lysates calm inflammation and strengthen the acid mantle.",
    stat: "3×",
    statLabel: "microbiome diversity",
  },
  {
    icon: Sparkles,
    title: "Overnight Repair",
    short: "Bakuchiol accelerates cell turnover while you sleep.",
    detail:
      "A plant-based retinol alternative, bakuchiol stimulates collagen production and speeds desquamation without irritation. Paired with rosehip oil for accelerated barrier recovery.",
    stat: "2×",
    statLabel: "cell turnover rate",
  },
];

const EducationSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="science" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
            The Science
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 leading-tight">
            Six pillars of <em>urban skin defense.</em>
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Tap any pillar to explore the research behind it.
          </p>
        </motion.div>

        {/* Interactive pillar grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-24">
          {pillars.map((p, i) => {
            const isOpen = expanded === i;
            return (
              <motion.button
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                onClick={() => setExpanded(isOpen ? null : i)}
                className={`group text-left border rounded-sm p-5 md:p-6 transition-all duration-400 cursor-pointer ${
                  isOpen
                    ? "border-primary/50 bg-primary/5 shadow-md"
                    : "border-border hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                      isOpen
                        ? "border-primary bg-primary/10"
                        : "border-border group-hover:border-primary"
                    }`}
                  >
                    <p.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="font-serif text-base text-foreground">
                        {p.title}
                      </h3>
                      <span className="font-serif text-lg text-primary flex-shrink-0">
                        {p.stat}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      {p.short}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/60">
                        {p.detail}
                      </p>
                      <p className="font-sans text-[10px] text-primary/70 mt-2 tracking-wide uppercase">
                        {p.stat} {p.statLabel}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Visual proof strip */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={skinTexture}
              alt="Close-up of healthy skin barrier texture after using RÊVE products"
              className="w-full aspect-[4/5] object-cover rounded-sm"
              loading="lazy"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-2 md:-right-8 bg-background border border-border p-5 md:p-6 shadow-xl rounded-sm"
            >
              <p className="font-serif text-3xl md:text-4xl text-primary">
                94%
              </p>
              <p className="text-[11px] font-sans text-muted-foreground mt-1 max-w-[140px]">
                saw barrier improvement in 4 weeks
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              {[
                { val: "94%", label: "Barrier improvement in clinical trials (4 weeks)" },
                { val: "3×", label: "More antioxidant protection vs. leading serums" },
                { val: "97%", label: "Free radicals neutralised on contact" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.val}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-5 border-l-2 border-primary/30 pl-5"
                >
                  <div>
                    <p className="font-serif text-2xl md:text-3xl text-foreground">
                      {stat.val}
                    </p>
                    <p className="font-sans text-xs md:text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
