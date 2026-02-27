import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ShieldCheck, Leaf, FlaskConical, Star, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { products, getProduct } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trustBadges = [
  { icon: ShieldCheck, label: "Dermatologist Tested" },
  { icon: Leaf, label: "100% Vegan" },
  { icon: FlaskConical, label: "Clinically Proven" },
];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : null;
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"how" | "ingredients" | "science">("how");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4 text-foreground">Product not found</h1>
          <Link to="/shop" className="text-sm text-primary underline font-sans">Back to shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.slug !== product.slug);
  const tabs = {
    how: { title: "How to Use", content: product.howToUse },
    ingredients: { title: "Key Ingredients", content: product.ingredients.join(" · ") },
    science: { title: "The Science", content: product.science },
  };

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addToCart({ slug: product.slug, name: product.name, price: product.price, image: product.image });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 md:pt-28 pb-4 max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center gap-2 text-xs font-sans text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted sticky top-24">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 left-4">
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans bg-background/90 backdrop-blur-sm px-3 py-1.5 text-foreground">
                {product.category}
              </span>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:pt-4"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-sans text-muted-foreground mb-3">{product.tagline}</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-3 leading-tight">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs font-sans text-muted-foreground">4.9 · 127 reviews</span>
            </div>

            <p className="font-serif text-2xl text-foreground mb-6">${product.price}</p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
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

            {/* Quantity + Add to Bag */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex items-center border border-border rounded-sm">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3.5 text-muted-foreground hover:text-foreground transition-colors" aria-label="Decrease quantity">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-3.5 font-sans text-sm text-foreground min-w-[40px] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3.5 text-muted-foreground hover:text-foreground transition-colors" aria-label="Increase quantity">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 bg-foreground text-background py-4 text-[11px] tracking-[0.2em] uppercase font-sans font-medium hover:bg-foreground/90 transition-colors"
              >
                Add to Bag — ${product.price * qty}
              </button>
            </div>

            <p className="font-sans text-[11px] text-muted-foreground mb-10">Free shipping on orders over $150</p>

            {/* Tabs */}
            <div className="border-t border-border pt-8">
              <div className="flex gap-6 mb-6">
                {(Object.keys(tabs) as Array<keyof typeof tabs>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`text-[11px] tracking-[0.15em] uppercase font-sans pb-2 border-b-2 transition-colors ${
                      activeTab === key ? "text-foreground border-foreground" : "text-muted-foreground border-transparent hover:text-foreground"
                    }`}
                  >
                    {tabs[key].title}
                  </button>
                ))}
              </div>
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-sans text-sm text-muted-foreground leading-relaxed"
              >
                {tabs[activeTab].content}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground text-center mb-10">Complete the Ritual</h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {relatedProducts.map((rp) => (
              <Link key={rp.slug} to={`/product/${rp.slug}`} className="group block bg-card rounded-sm border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{rp.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground mt-1">${rp.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: product.image,
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
            },
          }),
        }}
      />
    </div>
  );
};

export default ProductDetail;
