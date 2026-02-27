import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

const Hero = () => {
  const { addToCart } = useCart();
  const featured = products[0];

  return (
    <section className="relative h-[90vh] md:h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" poster="">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      <div className="relative z-10 w-full px-6 md:px-16 max-w-7xl mx-auto">
        <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95] text-white mb-5 md:mb-8 max-w-3xl">
          <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Skin that
          </span>
          <span className="block opacity-0 animate-fade-in-up italic" style={{ animationDelay: "0.7s" }}>
            breathes.
          </span>
        </h1>

        <p
          className="font-sans text-sm md:text-lg tracking-wide text-white/75 mb-8 md:mb-10 max-w-md opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          Seoul science meets French elegance.
          <br className="hidden md:block" />
          Urban skincare for overnight repair.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
          <button
            onClick={() => addToCart({ slug: featured.slug, name: featured.name, price: featured.price, image: featured.image })}
            className="group relative overflow-hidden bg-white px-8 md:px-10 py-3.5 md:py-4 inline-block"
          >
            <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-sans font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-500">
              Add Best Seller to Bag — ${featured.price}
            </span>
          </button>
          <a
            href="#products"
            onClick={(e) => { e.preventDefault(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-sans text-white/80 hover:text-white transition-colors border border-white/30 hover:border-white/60 px-8 py-3.5 md:py-4 text-center"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
