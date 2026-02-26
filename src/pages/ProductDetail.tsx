import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ShieldCheck, Leaf, FlaskConical } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const productData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  science: string;
}> = {
  "pollution-defense-serum": {
    name: "Pollution Defense Serum",
    tagline: "Your daily shield against the city",
    description: "A lightweight yet potent serum that creates an invisible barrier against PM2.5 particles, blue light, and environmental aggressors. Powered by our proprietary Urban Shield Complex™.",
    price: "$68",
    image: product1,
    benefits: [
      "Neutralizes 97% of free radicals on contact",
      "Creates an invisible pollution barrier",
      "Visibly reduces dullness in 14 days",
      "Non-comedogenic, suitable for all skin types",
    ],
    ingredients: ["Niacinamide (5%)", "Astaxanthin", "Fermented Rice Extract", "Ceramide Complex", "Vitamin E"],
    howToUse: "Apply 2-3 drops to clean skin every morning before moisturizer. Pat gently into skin, focusing on areas most exposed to environmental stress.",
    science: "Our Urban Shield Complex™ combines three key actives that work synergistically to protect and repair. Clinical trials showed a 94% improvement in skin barrier function after 4 weeks of daily use.",
  },
  "blue-light-repair-cream": {
    name: "Blue Light Repair Cream",
    tagline: "Undo the screen damage",
    description: "A rich, fast-absorbing cream that reverses screen-induced oxidative stress and rebuilds your moisture barrier overnight. Perfect for digital-age skin recovery.",
    price: "$74",
    image: product2,
    benefits: [
      "Reverses blue light oxidative damage",
      "Rebuilds moisture barrier overnight",
      "Reduces fine lines from screen fatigue",
      "Deeply hydrating without heaviness",
    ],
    ingredients: ["Biomimetic Ceramides", "Blue Light Filter Complex", "Squalane", "Adaptogenic Mushroom Extract", "Hyaluronic Acid"],
    howToUse: "Apply a pea-sized amount to face and neck each evening after cleansing and serum. Massage in upward motions until fully absorbed.",
    science: "Blue light from screens generates reactive oxygen species that accelerate collagen breakdown. Our Blue Light Filter Complex neutralizes these free radicals while biomimetic ceramides rebuild the compromised barrier.",
  },
  "barrier-recovery-oil": {
    name: "Barrier Recovery Oil",
    tagline: "Deep restoration while you sleep",
    description: "A luxurious blend of cold-pressed botanicals that rebuilds your skin's natural defense system overnight. Wake up to skin that's visibly stronger, calmer, and more radiant.",
    price: "$82",
    image: product3,
    benefits: [
      "Rebuilds the skin barrier overnight",
      "Reduces redness and sensitivity",
      "Locks in 72 hours of hydration",
      "100% plant-derived, cold-pressed oils",
    ],
    ingredients: ["Rosehip Seed Oil", "Sea Buckthorn", "Bakuchiol", "Jojoba Oil", "Evening Primrose Oil"],
    howToUse: "Warm 3-4 drops between palms, then press gently into skin as the final step of your evening routine. Can also be mixed with your moisturizer.",
    science: "Cold-pressed botanical oils mirror the lipid composition of a healthy skin barrier. Our proprietary extraction preserves the full spectrum of fatty acids, antioxidants, and vitamins that accelerate barrier recovery.",
  },
};

const trustBadges = [
  { icon: ShieldCheck, label: "Dermatologist Tested" },
  { icon: Leaf, label: "100% Vegan" },
  { icon: FlaskConical, label: "Clinically Proven" },
];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4 text-foreground">Product not found</h1>
          <Link to="/shop" className="text-sm text-primary underline">Back to shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-sans">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-[0.3em] text-foreground">RÊVE</Link>
          <div className="w-16" />
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] overflow-hidden rounded-sm bg-muted"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:sticky md:top-24"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-muted-foreground mb-3">{product.tagline}</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">{product.name}</h1>
            <p className="font-serif text-2xl text-foreground mb-6">{product.price}</p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary" />
                  {label}
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {product.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>

            <Link
              to="/shop"
              className="inline-block w-full md:w-auto text-center bg-primary text-primary-foreground px-10 py-4 text-[12px] tracking-[0.2em] uppercase font-sans hover:opacity-90 transition-opacity"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>

        {/* Details sections */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24 pt-12 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-xl text-foreground mb-4">How to Use</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">{product.howToUse}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-serif text-xl text-foreground mb-4">Key Ingredients</h3>
            <div className="space-y-2">
              {product.ingredients.map((ing) => (
                <p key={ing} className="font-sans text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                  {ing}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-serif text-xl text-foreground mb-4">The Science</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">{product.science}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
