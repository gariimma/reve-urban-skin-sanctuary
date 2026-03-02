import { motion } from "framer-motion";
import { Shield, Droplets, Sun, Sparkles, Zap, Heart } from "lucide-react";
import skinTexture from "@/assets/skin-texture.jpg";

const pillars = [
  {
    icon: Shield,
    title: "Barrier Defense",
    desc: "Biomimetic ceramides mirror your skin's natural lipid structure to reinforce the barrier from within.",
  },
  {
    icon: Zap,
    title: "Antioxidant Power",
    desc: "Astaxanthin delivers 6,000× more free-radical protection than vitamin C alone.",
  },
  {
    icon: Droplets,
    title: "Deep Hydration",
    desc: "Multi-weight hyaluronic acid and fermented rice draw moisture into every layer of the skin.",
  },
  {
    icon: Sun,
    title: "Blue Light Shield",
    desc: "Proprietary filter complex neutralises HEV light damage from screens and LED environments.",
  },
  {
    icon: Heart,
    title: "Microbiome Care",
    desc: "Pre- and postbiotics nourish the skin's beneficial bacteria for a balanced, healthy complexion.",
  },
  {
    icon: Sparkles,
    title: "Overnight Repair",
    desc: "Bakuchiol and botanical oils accelerate cell turnover and barrier recovery while you sleep.",
  },
];

const EducationSection = () => {
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
            Skin barrier repair, <em>reimagined.</em>
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your skin barrier is a living ecosystem — a matrix of ceramides,
            fatty acids, and beneficial microbes. Urban environments assault it
            daily. Our formulations restore what the city takes away.
          </p>
        </motion.div>

        {/* Pillar grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group border border-border rounded-sm p-6 md:p-8 hover:border-primary/40 hover:shadow-md transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {p.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
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
