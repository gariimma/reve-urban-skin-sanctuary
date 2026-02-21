import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const products = [
  { name: "Urban Shield Cleanser", price: "$48", category: "Cleanse", image: product1 },
  { name: "Blue Light Defense Serum", price: "$72", category: "Treat", image: product2 },
  { name: "Barrier Repair Cream", price: "$65", category: "Moisturize", image: product3 },
  { name: "City Mist Hydrator", price: "$42", category: "Protect", image: product4 },
];

const ProductShowcase = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="products" ref={ref} className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Built for city skin.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="relative overflow-hidden bg-muted mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground mb-1">
                {product.category}
              </p>
              <h3 className="font-serif text-lg text-foreground mb-1">
                {product.name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
