import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

const steps = [
  {
    number: "01",
    title: "Protect",
    subtitle: "Pollution Defense Serum",
    description: "Shield your skin from PM2.5 particles, blue light, and environmental aggressors with our Urban Shield Complex™.",
    product: products[0],
  },
  {
    number: "02",
    title: "Repair",
    subtitle: "Blue Light Repair Cream",
    description: "Neutralize free radical damage from screens and deliver concentrated actives deep into the skin barrier overnight.",
    product: products[1],
  },
  {
    number: "03",
    title: "Restore",
    subtitle: "Barrier Recovery Oil",
    description: "Lock in hydration and rebuild your skin's natural defense system with cold-pressed botanical oils while you sleep.",
    product: products[2],
  },
];

const HowItWorks = () => {
  const { addToCart } = useCart();

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
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">Your Ritual</p>
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
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1">{step.title}</h3>
              <p className="text-[11px] tracking-[0.12em] uppercase font-sans text-primary mb-3 md:mb-4">{step.subtitle}</p>
              <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto mb-5">
                {step.description}
              </p>
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => addToCart({ slug: step.product.slug, name: step.product.name, price: step.product.price, image: step.product.image })}
                  className="text-[11px] tracking-[0.15em] uppercase font-sans text-foreground border border-border px-5 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Add to Bag — ${step.product.price}
                </button>
                <Link
                  to={`/product/${step.product.slug}`}
                  className="text-[10px] tracking-[0.12em] uppercase font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
