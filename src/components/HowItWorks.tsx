import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Cleanse & Reset",
    description: "Remove urban grime and pollution particles with our gentle yet effective formulation. It dissolves impurities without stripping your natural oils.",
    link: "/product/pollution-defense-serum",
  },
  {
    number: "02",
    title: "Treat & Defend",
    description: "Apply our Blue Light Defense Serum to neutralize free radical damage and deliver concentrated actives deep into the skin barrier.",
    link: "/product/blue-light-repair-cream",
  },
  {
    number: "03",
    title: "Seal & Protect",
    description: "Lock in hydration and create an invisible shield against environmental aggressors with our Barrier Recovery Oil.",
    link: "/product/barrier-recovery-oil",
  },
];

const HowItWorks = () => {
  return (
    <section id="routine" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
            Your Ritual
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Three steps to urban resilience.
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-serif text-5xl md:text-6xl text-border mb-4 md:mb-6">{step.number}</p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 md:mb-4">{step.title}</h3>
              <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto mb-5">
                {step.description}
              </p>
              <Link
                to={step.link}
                className="inline-block text-[11px] tracking-[0.15em] uppercase font-sans text-primary hover:text-foreground transition-colors border-b border-primary/30 pb-0.5"
              >
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
