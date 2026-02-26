import { motion } from "framer-motion";
import skinTexture from "@/assets/skin-texture.jpg";

const stats = [
  { value: "94%", label: "Barrier improvement in 4 weeks" },
  { value: "3x", label: "More antioxidant protection" },
  { value: "100%", label: "Clean, vegan ingredients" },
];

const ingredients = [
  { name: "Niacinamide", benefit: "Strengthens barrier, reduces inflammation" },
  { name: "Astaxanthin", benefit: "6000x stronger than vitamin C" },
  { name: "Fermented Rice", benefit: "Deep hydration, brightening" },
];

const EducationSection = () => {
  return (
    <section id="science" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image with animated overlay */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <img
              src={skinTexture}
              alt="Skin barrier close-up"
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-background border border-border p-5 md:p-6 shadow-xl rounded-sm"
            >
              <p className="font-serif text-3xl md:text-4xl text-primary">94%</p>
              <p className="text-[11px] font-sans text-muted-foreground mt-1 max-w-[140px]">
                saw barrier improvement in 4 weeks
              </p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
              The Science
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight">
              Skin barrier repair, <em>reimagined.</em>
            </h2>
            <div className="space-y-5 font-sans text-sm text-muted-foreground leading-relaxed">
              <p>
                Your skin barrier is a living ecosystem — a delicate matrix of ceramides, fatty acids, and beneficial microbes that shields you from the outside world.
              </p>
              <p>
                Urban environments assault this barrier daily. Our formulations use biomimetic ceramide complexes and adaptogenic botanicals to restore what the city takes away.
              </p>
            </div>

            {/* Key ingredients */}
            <div className="mt-10 space-y-4">
              <p className="text-[11px] tracking-[0.2em] uppercase font-sans text-foreground mb-4">
                Key Ingredients
              </p>
              {ingredients.map((ing, i) => (
                <motion.div
                  key={ing.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 border-l-2 border-primary/30 pl-4"
                >
                  <div>
                    <p className="font-sans text-sm font-medium text-foreground">{ing.name}</p>
                    <p className="font-sans text-xs text-muted-foreground">{ing.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                >
                  <p className="font-serif text-2xl md:text-3xl text-foreground">{stat.value}</p>
                  <p className="text-[10px] md:text-xs font-sans text-muted-foreground mt-1">{stat.label}</p>
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
