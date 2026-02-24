import { Link } from "react-router-dom";
import reveLogo from "@/assets/reve-logo.png";

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-end overflow-hidden scrollbar-hide"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — cinematic bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content — bottom-aligned, left-justified */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-24 md:pb-32">
        <p
          className="font-sans text-[11px] tracking-[0.35em] uppercase text-white/50 mb-5 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Urban Skin Recovery
        </p>

        <h1 className="font-serif text-[clamp(2.8rem,7vw,7rem)] font-light leading-[0.95] text-white mb-10 max-w-3xl">
          <span
            className="block opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Skin that
          </span>
          <span
            className="block opacity-0 animate-fade-in-up italic"
            style={{ animationDelay: "1.0s" }}
          >
            breathes.
          </span>
        </h1>

        <div
          className="flex items-center gap-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <Link
            to="/shop"
            className="group relative bg-white px-10 py-3.5 text-[11px] tracking-[0.25em] uppercase font-sans text-foreground overflow-hidden transition-all duration-500 hover:bg-white/90"
          >
            Shop Now
          </Link>
          <a
            href="#story"
            className="text-white/60 text-[11px] tracking-[0.25em] uppercase font-sans hover:text-white transition-colors duration-300"
          >
            Our Story →
          </a>
        </div>
      </div>

    </div>
  );
};

export default Hero;
