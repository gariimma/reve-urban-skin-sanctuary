import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative h-screen md:h-[120vh] flex items-end overflow-hidden scrollbar-hide"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-16 pb-16 md:pb-32">
        <h1 className="font-serif text-[clamp(2.4rem,7vw,7rem)] font-light leading-[0.95] text-white mb-4 md:mb-6 max-w-3xl">
          <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Skin that
          </span>
          <span className="block opacity-0 animate-fade-in-up italic" style={{ animationDelay: "0.8s" }}>
            breathes.
          </span>
        </h1>

        <p className="font-sans text-sm md:text-base text-white/70 mb-8 md:mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "1.0s" }}>
          Urban skincare for overnight repair.
        </p>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <Link
            to="/shop"
            className="group relative overflow-hidden bg-white px-8 md:px-14 py-4 md:py-5 inline-flex items-center gap-3 md:gap-4"
          >
            <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-[12px] md:text-[13px] tracking-[0.25em] uppercase font-sans font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-500">
              Shop Now
            </span>
            <svg
              className="relative z-10 w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
