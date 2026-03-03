import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const featured = products[0];
  return (
    <section
      className="relative h-[100svh] md:h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
        <h1 className="font-serif text-[clamp(2.2rem,7vw,6rem)] font-light leading-[0.95] text-white mb-4 md:mb-8 max-w-3xl">
          <span className="sr-only">
            Luxury Urban Skincare for Pollution Defense &amp; Overnight Repair
          </span>
          <span
            className="block opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Skin that
          </span>
          <span
            className="block opacity-0 animate-fade-in-up italic"
            style={{ animationDelay: "0.7s" }}
          >
            breathes.
          </span>
        </h1>

        <p
          className="font-sans text-sm md:text-lg tracking-wide text-white/75 mb-6 md:mb-10 max-w-md opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          Seoul science meets French elegance.
          <br className="hidden md:block" />
          Urban skincare for overnight repair.
        </p>

        {/* Bestseller callout */}
        <div
          className="flex items-center gap-4 mb-5 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <img
            src={featured.image}
            alt={`${featured.name}, RÊVE bestselling product`}
            className="w-14 h-14 md:w-16 md:h-16 rounded-sm object-cover border border-white/20"
          />
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase font-sans text-white/60">
              Best Seller
            </p>
            <p className="font-serif text-sm md:text-base text-white">
              {featured.name}
            </p>
            <p className="font-sans text-xs text-white/60">
              {featured.tagline} · From ${featured.sizes[0].price}
            </p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <Link
            to={`/product/${featured.slug}`}
            className="group relative overflow-hidden bg-white px-7 md:px-10 py-3.5 md:py-4 w-fit active:scale-[0.98] transition-transform"
          >
            <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-sans font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-500">
              Shop Best Seller · ${featured.sizes[1].price}
            </span>
          </Link>

          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2.5 text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-sans text-white/80 hover:text-white transition-all duration-300 border border-white/30 hover:border-white/60 px-7 py-3.5 md:py-4 w-fit backdrop-blur-sm"
          >
            Explore Collection
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
