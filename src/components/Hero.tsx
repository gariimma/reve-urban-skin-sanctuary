import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Badge */}
        <div
          className="inline-block mb-6 px-5 py-2 border border-white/30 backdrop-blur-sm opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-sans">
            Urban Skin Recovery
          </span>
        </div>

        {/* Headline */}
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

        {/* Subheadline */}
        <p
          className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          Clinical-grade formulas that repair pollution damage, block blue light
          aging, and rebuild your skin barrier — in 3 steps.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1.8s" }}
        >
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Shop the Ritual
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            See the Science
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
