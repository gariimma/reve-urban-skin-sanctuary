import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
        className="relative h-[120vh] flex items-end overflow-hidden scrollbar-hide"
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

      {/* Gradient overlay — left fade for text + bottom fade for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-24 md:pb-32">
        {/* Category label - frosted pill */}
        <div
          className="mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
<span className="inline-block text-[13px] tracking-[0.35em] uppercase font-sans font-medium text-white bg-white/15 backdrop-blur-sm px-6 py-3 border border-white/25">
  Urban Skin Recovery
</span>

        </div>

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

        {/* CTAs */}
        <div
          className="flex items-center gap-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          {/* Primary - white button with brown sweep */}
<Link
  to="/shop"
  className="group relative overflow-hidden bg-white px-14 py-5 flex items-center gap-4"
>
  <span className="absolute inset-0 bg-[#8B6540] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
  <span className="relative z-10 text-[13px] tracking-[0.25em] uppercase font-sans font-medium text-[#2B2B2B] group-hover:text-white transition-colors duration-500">
    Explore the Ritual
  </span>
  <svg
    className="relative z-10 w-5 h-5 text-[#2B2B2B] group-hover:text-white group-hover:translate-x-1 transition-all duration-500"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
  </svg>
</Link>


          {/* Secondary - line + text */}
          <a
            href="#science"
            className="group flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-sans text-white/80 hover:text-white transition-colors duration-300"
         >
         <span className="w-8 h-px bg-white/60 group-hover:w-12 transition-all duration-300" />
         The Science
        </a>

        </div>
      </div>
  );
};

export default Hero;
