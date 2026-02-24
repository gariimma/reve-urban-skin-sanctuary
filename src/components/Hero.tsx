import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#8B6540" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div
          className="inline-block mb-6 px-5 py-2 border border-white/30 backdrop-blur-sm opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-sans">
            Urban Skin Recovery
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
          <span
            className="block opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Built for skin
          </span>
          <span
            className="block opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.0s" }}
          >
            that lives
          </span>
          <span
            className="block opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            in the city.
          </span>
        </h1>

        <div
          className="flex justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1.8s" }}
        >
          <a
            href="#products"
            className="group relative border border-white/60 px-12 py-4 text-sm tracking-[0.2em] uppercase font-sans text-white overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-[#8B6540] transition-colors duration-500">
              Shop Now
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
