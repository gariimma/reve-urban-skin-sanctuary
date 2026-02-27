import { motion } from "framer-motion";
import { ShieldCheck, Leaf, FlaskConical, Recycle } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "Dermatologist Tested", desc: "Clinically validated on all skin types" },
  { icon: FlaskConical, title: "Clinically Proven", desc: "94% barrier improvement in 4 weeks" },
  { icon: Leaf, title: "100% Vegan & Clean", desc: "No parabens, sulfates, or synthetics" },
  { icon: Recycle, title: "Sustainable Packaging", desc: "Refillable vessels, minimal waste" },
];

const CredibilityBar = () => {
  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-sans text-muted-foreground mb-10 md:mb-14"
        >
          Why RÊVE
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="mx-auto w-12 h-12 md:w-14 md:h-14 rounded-full border border-border flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                <badge.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-sm md:text-base text-foreground mb-1.5">{badge.title}</h3>
              <p className="font-sans text-[11px] md:text-xs text-muted-foreground leading-relaxed">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;
