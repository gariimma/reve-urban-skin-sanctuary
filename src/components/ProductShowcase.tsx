import { motion } from "framer-motion";

const products = [
  {
    name: "Pollution Defense Serum",
    description: "Shields skin from PM2.5 particles and environmental stress",
    category: "Step 1: Protect",
  },
  {
    name: "Blue Light Repair Cream",
    description: "Reverses screen-induced aging and inflammation",
    category: "Step 2: Repair",
  },
  {
    name: "Barrier Recovery Night Oil",
    description: "Rebuilds your skin's natural defense system overnight",
    category: "Step 3: Restore",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each card appears 0.2s after the previous
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 // Start 50px below
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            The 3-Step Ritual
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Scientifically sequenced to work together — not against your skin.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4">
                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                  {product.category}
                </span>
              </div>
              <h3 className="font-serif text-2xl mb-4 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
