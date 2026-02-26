import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    name: "Pollution Defense Serum",
    description: "Shields skin from PM2.5 particles and environmental stress with our Urban Shield Complex™.",
    category: "Step 1: Protect",
    price: "$68",
    image: product1,
    slug: "pollution-defense-serum",
  },
  {
    name: "Blue Light Repair Cream",
    description: "Reverses screen-induced oxidative stress and rebuilds your moisture barrier overnight.",
    category: "Step 2: Repair",
    price: "$74",
    image: product2,
    slug: "blue-light-repair-cream",
  },
  {
    name: "Barrier Recovery Oil",
    description: "Cold-pressed botanicals rebuild your skin's natural defense system while you sleep.",
    category: "Step 3: Restore",
    price: "$82",
    image: product3,
    slug: "barrier-recovery-oil",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            The 3-Step Ritual
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Scientifically sequenced to work together — not against your skin.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.slug} variants={cardVariants}>
              <Link
                to={`/product/${product.slug}`}
                className="group block bg-card rounded-sm border border-border overflow-hidden hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-sans bg-background/90 backdrop-blur-sm px-3 py-1.5 text-foreground">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-medium text-foreground">{product.price}</span>
                    <span className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase font-sans text-muted-foreground group-hover:text-primary transition-colors">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 md:mt-14"
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans text-foreground hover:text-primary transition-colors border-b border-foreground/30 hover:border-primary pb-1"
          >
            View full collection
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
