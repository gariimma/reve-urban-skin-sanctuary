import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden scrollbar-hide"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-16">
        <h1 className="font-serif text-[clamp(2.8rem,8vw,6.5rem)] font-light leading-[0.95] text-white mb-6 md:mb-8 max-w-3xl">
          <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Skin that
          </span>
          <span className="block opacity-0 animate-fade-in-up italic" style={{ animationDelay: "0.8s" }}>
            breathes.
          </span>
        </h1>

        <p 
          className="font-sans text-base md:text-xl tracking-wide text-white/80 mb-10 md:mb-12 max-w-md opacity-0 animate-fade-in" 
          style={{ animationDelay: "1.0s" }}
        >
          Urban skincare for overnight repair.
        </p>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <Link
            to="/shop"
            className="group relative overflow-hidden bg-white px-8 md:px-10 py-3.5 md:py-4 inline-block"
          >
            <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-sans font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-500">
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
